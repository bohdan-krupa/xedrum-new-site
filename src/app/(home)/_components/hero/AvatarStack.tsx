// components/AvatarStack.tsx
import React from "react";
import Image, { StaticImageData } from "next/image";

interface AvatarStackProps {
    avatars: { src: string | StaticImageData; alt: string }[];
    size?: number;
    lgSize?: number;
    overlap?: number;
}

const AvatarStack: React.FC<AvatarStackProps> = ({
    avatars,
}) => {
    return (
        <span className="inline-block whitespace-nowrap">
            <span className={`inline-flex -space-x-4 align-middle`}>
                {avatars.map((avatar, index) => (
                    <Image
                        key={index}
                        src={avatar.src}
                        alt={avatar.alt}
                        width={32}
                        height={32}
                        className="rounded-full border border-white inline-block align-middle w-8 h-8 lg:w-14 lg:h-14"
                    />
                ))}
            </span>
        </span>
    );
};

export default AvatarStack;
