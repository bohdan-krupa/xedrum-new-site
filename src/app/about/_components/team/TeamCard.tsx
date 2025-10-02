import Image from "next/image";

interface TeamCardProps {
    role: string;
    name: string;
    description: string;
    avatarSrc?: string;
    logoSrc?: string;
}

const TeamCard: React.FC<TeamCardProps> = ({
    role,
    name,
    description,
    avatarSrc,
    logoSrc,
}) => {
    return (
        <div className="flex-shrink-0 flex flex-col w-[200px]">
            {/* Фото учасника */}
            <div className="bg-[#EEEEEE] h-[280px] rounded-2xl w-full flex items-center justify-center">
                {avatarSrc ? (
                    <Image
                        src={avatarSrc}
                        alt={name}
                        width={160}
                        height={160}
                        className="rounded-2xl object-cover"
                    />
                ) : (
                    <span>Avatar</span>
                )}
            </div>

            {/* Інформація та опис */}
            <div className="flex flex-col p-2 gap-2">
                <div className="flex justify-between items-start">
                    <div className="flex flex-col gap-0.5">
                        <span className="text-xs font-semibold">{role}</span>
                        <span className="text-sm font-medium">{name}</span>
                    </div>
                    {logoSrc && <Image src={logoSrc} alt="Logo" width={20} height={20} />}
                </div>

                <p className="text-xs text-gray-700">{description}</p>
            </div>
        </div>
    );
};

export default TeamCard;