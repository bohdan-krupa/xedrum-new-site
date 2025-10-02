import WhiteArrowButton from "@/components/ui/buttons/arrowButton/WhiteArrowButton"

export default function BlogSection() {

    return (
        <div className="">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                <div className="md:col-span-2 lg:col-span-2 h-[300px] bg-gray-200 rounded-xl">Big Left</div>
                <div className="h-[300px] bg-gray-200 rounded-xl">Right</div>

                <div className="h-[250px] bg-gray-200 rounded-xl">Small 1</div>
                <div className="h-[250px] bg-gray-200 rounded-xl">Small 2</div>
                <div className="h-[250px] bg-gray-200 rounded-xl">Small 3</div>

                <div className="h-[300px] bg-gray-200 rounded-xl order-2 lg:order-1">Left</div>
                <div className="md:col-span-2 lg:col-span-2 h-[300px] bg-gray-200 rounded-xl order-1 lg:order-2">
                    Big Right
                </div>
            </div>
            <WhiteArrowButton
                title="Load More"
                buttonColor="#ffffffff"
                textColor="#53b36f"
                boldText
                fontSize="16px"
                className="!border-2 !border-[#53b36f] max-w-max"
            />
        </div>
    )
}