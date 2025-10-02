import { Label } from "@/components/ui/Label";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import { accordionData, progressData } from "@/components/layout/about/constants";
import Accordion from "@/components/ui/accordion/Accordion";


export default function Values() {
    return (
        <div className="flex flex-col lg:flex-row  w-full">
            <div className="flex flex-col gap-8">
                <Label>Our Values</Label>
                <h2 className="font-bold text-[28px] lg:text-[54px]">Built on Values.<br />Driven by Purpose.</h2>
                <Image
                    src="/images/team/team.png"
                    alt="Team"
                    width={564}
                    height={204}
                />
                <Progress items={progressData} />
            </div>
            <div className="flex items-baseline">
                <Accordion items={accordionData} />
            </div>
        </div>
    )
}
