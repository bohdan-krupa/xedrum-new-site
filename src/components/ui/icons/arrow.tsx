import React from 'react'

interface IconProps {
    color?: string;
    bg?: string;
    className?: string;
}

const Arrow = ({ color, bg, className }: IconProps) => {
    return (
        <svg className={className} width="34" height="34" viewBox="0 0 34 34" fill={bg} xmlns="http://www.w3.org/2000/svg">
            <path d="M17 0.424805C26.1541 0.424805 33.5752 7.84588 33.5752 17C33.5752 26.1541 26.1541 33.5752 17 33.5752C7.84588 33.5752 0.424805 26.1541 0.424805 17C0.424805 7.84588 7.84588 0.424805 17 0.424805Z" stroke={color} strokeWidth="0.85" />
            <path d="M12.9984 20.5001L20.9984 12.5001M20.9984 12.5001V18.9001M20.9984 12.5001H14.5984" stroke={color} strokeWidth="0.85" strokeLinecap="round" />
        </svg>

    )
}

export default Arrow