"use client";

import { addScaleCorrector, motion } from "framer-motion";

const tabs = ["Web Development", "Mobile Development", "All Example"];

interface SwitcherProps {
    active: number;
    setActive: (index: number) => void;
}

export default function Switcher({ active, setActive }: SwitcherProps) {

    return (
        <div className="font-inter">
            <ul className="relative border-2 max-w-max border-[#E9E9E9] rounded-2xl flex flex-row p-0.5 gap-3">
                {tabs.map((tab, index) => (
                    <li
                        key={index}
                        onClick={() => setActive(index)}
                        className={`relative z-10 cursor-pointer inline-block px-3 py-1 text-p rounded-2xl`}
                    >
                        {active === index && (
                            <motion.div
                                layoutId="activeTab"
                                className="absolute inset-0 bg-green-light rounded-2xl"
                                transition={{ type: "spring", stiffness: 500, damping: 45 }}
                            />
                        )}
                        <span className={active === index ? "relative text-green-primary" : "relative text-[#565656]"}>
                            {tab}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

