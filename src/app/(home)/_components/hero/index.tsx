import Image from "next/image"
import ArrowButton from '@/components/ui/buttons/arrowButton/ArrowButton';
import { Label } from "@/components/ui/Label";
const Hero = () => {
    return (
        <div className="flex flex-col gap-6 lg:gap-16 md:flex-row items-center
            bg-[url(/images/puzzle/puzzle.svg)] 
            bg-position-[center_top_7rem] bg-no-repeat bg-auto"
        >
            <div className="md:text-left flex-1  mt-32">
                <Label>Software Development</Label>
                <h1 className="font-bold text-[28px] lg:text-[54px] mt-2 leading-[1.2]">
                    Practical AI solutions
                    <Image
                        src="/images/phone.png"
                        alt="phone"
                        width={108}
                        height={80}
                        className="w-12 md:w-16 lg:w-26 h-auto inline align-bottom"
                    /><br />
                    <span className="inline-block whitespace-nowrap">
                        <span className="inline-flex -space-x-4 align-middle">
                            <Image
                                src="/images/faces/faceA.svg"
                                alt="Person 1"
                                width={32}
                                height={32}
                                className="lg:w-14 lg:h-14 rounded-full border border-white inline-block align-middle"
                            />
                            <Image
                                src="/images/faces/faceD.svg"
                                alt="Person 2"
                                width={32}
                                height={32}
                                className="lg:w-14 lg:h-14 rounded-full border border-white inline-block align-middle"
                            />
                            <Image
                                src="/images/faces/faceB.svg"
                                alt="Person 3"
                                width={32}
                                height={32}
                                className="lg:w-14 lg:h-14 rounded-full border border-white inline-block align-middle"
                            />
                        </span>
                    </span>
                    for product teams in SaaS and Health
                </h1>
                <h5 className="text-p-base mt-4">
                    Launch AI features that improve user retention by 37%, cut support by 40%, and streamline operations — across SaaS and Healthcare.
                </h5>
                <div className="mt-6">
                    <ArrowButton title="Let's talk" />
                </div>
            </div>
            <div className="bg-[url(/images/puzzle/puzzle2.svg)] 
            bg-top-right bg-no-repeat absolute">
            </div>
            <div className="flex justify-center pt-24">
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