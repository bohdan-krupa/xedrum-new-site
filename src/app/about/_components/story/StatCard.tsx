import React from "react";
import clsx from "clsx";

interface StatCardProps {
    value: number | string;
    label: React.ReactNode;
    className?: string;
}

export const StatCard: React.FC<StatCardProps> = ({ value, label, className }) => {
    return (
        <div
            className={clsx(
                "flex flex-col justify-between p-[35px_24px] border border-[#EEEEEE] rounded-[24px]",
                className
            )}
        >
            <h1 className="font-manrope font-bold text-[64px] md:text-[98px] leading-[100%]">
                {value}+
            </h1>
            <p>{label}</p>
        </div>
    );
};
