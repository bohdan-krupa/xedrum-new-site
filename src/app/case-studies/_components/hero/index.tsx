import WhiteArrowButton from "@/components/ui/buttons/arrowButton/WhiteArrowButton";
import { Label } from "@/components/ui/Label";

export default function Hero() {
    return (
        <div className="text-left text-white container">
            <Label>Projects that speak for themselves</Label>
            <h1 className="font-bold text-[28px] lg:text-[68px] mt-2 leading-[1.2]">
                Our Case Studies
            </h1>
            <h5 className="text-sm lg:text-base mt-4 max-w-2xl ">
                Check out our portfolio to view the featured projects!
            </h5>
            <div className="my-6">
                <WhiteArrowButton
                    title='Start a project'
                    buttonColor="#ffffffff"
                    textColor="#53b36f"
                    boldText
                    fontSize="16px" />
            </div>
        </div>
    )
}