import Image from "next/image";

type Review = {
    name: string;
    role: string;
    text: string;
    stars: string;
    avatar?: string;
};

interface ReviewCardProps {
    review: Review;
}

const ReviewCard = ({ review }: ReviewCardProps) => {
    return (
        <div className="flex-shrink-0 flex flex-col border border-[#EEEEEE] 
        rounded-2xl justify-between p-4 max-w-[400px] min-h-[400px]">
            <div>
                <span>{review.stars}</span>
                <p className="text-p-sm mt-4">{review.text}</p>
            </div>
            <div className="flex flex-row gap-3 mt-4">
                <Image src={"/images/faces/review-card-avatar.svg"} alt={"avatar"} width={45} height={45} />
                <div className="flex flex-col gap-0.5">
                    <span>{review.name}</span>
                    <span>{review.role}</span>
                </div>
            </div>
        </div>
    )
}

export default ReviewCard;