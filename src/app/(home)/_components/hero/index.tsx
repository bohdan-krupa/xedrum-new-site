import Image from "next/image"
import ArrowButton from '@/components/ui/buttons/arrowButton/ArrowButton';
import { Label } from "@/components/ui/Label";
import AvatarStack from "./AvatarStack";

const avatars = [
    { src: "/images/faces/faceA.svg", alt: "Person 1" },
    { src: "/images/faces/faceD.svg", alt: "Person 2" },
    { src: "/images/faces/faceB.svg", alt: "Person 3" },
];



const Hero = () => {
    return (
        <div className="flex flex-col gap-6 lg:gap-16 md:flex-row
            bg-[url(/images/puzzle/puzzle.svg)] 
            bg-position-[center_top_0rem]
            lg:bg-position-[center_top_7rem] bg-no-repeat bg-size-[48px] md:bg-auto pt-18 lg:pt-52"
        >
            <div className="md:text-left flex-1">
                <Label>Software Development</Label>
                <h1 className="h2-text mt-2 leading-[1.2]">
                    Practical AI solutions
                    <Image
                        src="/images/phone.png"
                        alt="phone"
                        width={108}
                        height={80}
                        className="w-12 md:w-16 lg:w-26 h-auto inline align-bottom"
                    /><br />
                    <AvatarStack avatars={avatars} size={32} lgSize={56} overlap={4} />
                    for product teams in SaaS and Health
                </h1>
                <h5 className="text-p mt-4">
                    Launch AI features that <b>improve user retention by</b> <span className="text-green-primary">37%</span>,
                    cut support by 40%,
                    <b>and streamline operations</b> — across <b>SaaS and Healthcare.</b>
                </h5>
                <div className="mt-6">
                    <ArrowButton title="Let's talk" />
                </div>
            </div>
            <div className="bg-[url(/images/puzzle/puzzle2.svg)] 
            bg-top-right bg-no-repeat absolute">
            </div>
            <div className="flex justify-center">
                <Image
                    src="/images/puzzle/puzzle-composition.png"
                    alt="puzzle"
                    width={560}
                    height={0}
                    className=" max-w-sm md:max-w-none"
                />
            </div>

        </div>
    )
}

export default Hero