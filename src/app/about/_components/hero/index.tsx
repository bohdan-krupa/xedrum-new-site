import WhiteArrowButton from "@/components/ui/buttons/arrowButton/WhiteArrowButton";
import { Label } from "@/components/ui/Label";


export default function Hero() {
    return (
        <div className="text-left text-white max-w-[1440px] mx-auto px-4">
            <Label>Who we are</Label>
            <h1 className="font-bold text-[28px] lg:text-[68px] mt-2 leading-[1.2]">
                About Us
            </h1>
            <h5 className="text-sm lg:text-base mt-4 max-w-2xl ">
                At Xedrum, we don’t just build software — we build long-term partnerships.
                With years of experience, dozens of successful projects, and a team of skilled engineers,
                we help startups and enterprises grow with confidence.
            </h5>
            <div className="my-6">
                <WhiteArrowButton
                    title='Let&apos;s talk'
                    buttonColor="#ffffffff"
                    textColor="#53b36f"
                    boldText
                    fontSize="16px" />
            </div>
        </div>
    )
}