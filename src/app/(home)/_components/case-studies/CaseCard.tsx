import Image from "next/image"

interface CaseCardProps {
    title: string
    description: string
    tags: string[]
}

const CaseCard = ({ title, description, tags }: CaseCardProps) => {
    return (
        <div className="flex flex-col gap-2 overflow-hidden">
            <div className="w-full h-[280px] sm:h-[340px] lg:h-[380px] bg-green-primary rounded-2xl flex flex-col justify-between">
                <div className="flex justify-end relative">
                    <span className="bg-white text-p px-12 sm:px-16 py-1.5 absolute top-6 sm:top-8 -left-10 sm:-left-12 -rotate-45">
                        * case study *
                    </span>
                    <button className="bg-white rounded-md text-black m-3 sm:m-4 p-3 sm:p-4">
                        <Image src="/images/black-arrow.svg" alt="arrow" width={16} height={16} />
                    </button>
                </div>
                <div className="flex flex-wrap gap-2 m-3 sm:m-4">
                    {tags.map((tag) => (
                        <p key={tag} className="bg-white px-2 py-1 rounded-lg text-center text-p">
                            {tag}
                        </p>
                    ))}
                </div>
            </div>
            <h3 className="text-h3">{title}</h3>
            <p className="py-2 sm:py-3 text-p-sm text-[#636363] font-inter">{description}</p>
        </div>
    )
}

export default CaseCard
