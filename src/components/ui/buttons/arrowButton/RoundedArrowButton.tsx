import React from "react";
import Arrow from "../../icons/arrow";

interface RoundedArrowButtonProps {
    title: string;
    onClick?: () => void;
    className?: string;
}

const RoundedArrowButton: React.FC<RoundedArrowButtonProps> = ({
    title,
    onClick,
    className = "",
}) => {
    return (
        <button
            onClick={onClick}
            className={`group inline-flex max-w-max items-center gap-3 px-3 py-2 transition-all cursor-pointer duration-300 ${className}
        `}
        >
            <Arrow
                color="#22C55E"
                bg="none"
                className="transition-colors duration-300 group-hover:[&_*]:stroke-white group-hover:[&_*]:fill-[#53B36F]"
            />
            <span className="font-bold font-inter">{title}</span>
        </button>
    );
};

export default RoundedArrowButton;
