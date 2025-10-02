"use client";

import React, { useEffect, useRef, useState, ReactNode } from "react";
import { motion, PanInfo, animate } from "framer-motion";

type SliderProps = {
    children: ReactNode[];
    slideWidthPercent?: number;
    peek?: number;
    showProgress?: boolean;
    progressColor?: string;
};

export default function Slider({
    children,
    slideWidthPercent = 85,
    peek = 24,
    showProgress = true,
    progressColor = "bg-gray-800",
}: SliderProps) {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const trackRef = useRef<HTMLDivElement | null>(null);
    const [constraints, setConstraints] = useState({ left: 0, right: 0 });
    const [slideWidth, setSlideWidth] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);

    const items = React.Children.toArray(children);

    useEffect(() => {
        const update = () => {
            const container = containerRef.current;
            const track = trackRef.current;
            if (!container || !track) return;

            const containerWidth = container.offsetWidth;
            const trackWidth = track.scrollWidth;
            const maxDrag = Math.max(0, trackWidth - containerWidth + peek);

            setConstraints({ left: -maxDrag, right: peek });

            const slide = track.firstElementChild as HTMLElement;
            if (slide) {
                setSlideWidth(slide.offsetWidth + parseInt(getComputedStyle(track).gap || "0"));
            }
        };

        update();
        const ro = new ResizeObserver(update);
        if (containerRef.current) ro.observe(containerRef.current);
        if (trackRef.current) ro.observe(trackRef.current);
        window.addEventListener("resize", update);

        return () => {
            ro.disconnect();
            window.removeEventListener("resize", update);
        };
    }, [children]);

    const handleDragEnd = (_: any, info: PanInfo) => {
        const currentX =
            (trackRef.current?.getBoundingClientRect().x ?? 0) -
            (containerRef.current?.getBoundingClientRect().x ?? 0);

        let targetIndex = Math.round(-currentX / slideWidth);
        targetIndex = Math.max(0, Math.min(targetIndex, items.length - 1));
        setCurrentIndex(targetIndex);

        if (trackRef.current) {
            animate(trackRef.current, { x: -targetIndex * slideWidth + peek }, { type: "spring", stiffness: 300, damping: 30 });
        }
    };

    const progress = ((currentIndex + 1) / items.length) * 100;

    return (
        <div className="flex flex-col gap-3">
            <div ref={containerRef} className="overflow-hidden">
                <motion.div
                    ref={trackRef}
                    className="flex gap-4 py-2"
                    drag="x"
                    dragConstraints={constraints}
                    dragElastic={0.2}
                    onDragEnd={handleDragEnd}
                    whileTap={{ cursor: "grabbing" }}
                >
                    {items.map((child, i) => (
                        <motion.div
                            key={i}
                            className="flex-shrink-0"
                            style={{ width: `${slideWidthPercent}%` }}
                        >
                            {child}
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {showProgress && (
                <div className="w-full h-1 bg-gray-300 rounded-full overflow-hidden mt-2">
                    <motion.div
                        className={`h-full ${progressColor} rounded-full`}
                        style={{ width: `${progress}%` }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                </div>
            )}
        </div>
    );
}
