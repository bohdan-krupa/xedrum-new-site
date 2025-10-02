import { Label } from "@/components/ui/Label";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import { accordionData, progressData } from "@/components/layout/about/constants";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion/Accordion"
export default function Values() {
    return (
        <>
            <Label>Our Values</Label>
            <div className="flex flex-col lg:flex-row mt-6 gap-16">

                <div className="flex flex-col gap-8 flex-1 min-w-0">

                    <h2 className="h2-text">
                        Built on Values.<br />Driven by Purpose.
                    </h2>
                    <Image
                        src="/images/team/team.png"
                        alt="Team"
                        width={564}
                        height={204}
                        className="w-full lg:w-auto"
                    />
                    <Progress items={progressData} />
                </div>
                <div className="flex-1 min-w-0 w-full lg:w-auto">
                    <Accordion type="single" collapsible className="w-full">
                        {accordionData.map((item, idx) => (
                            <AccordionItem key={idx} value={`item-${idx}`}>
                                <AccordionTrigger>
                                    <div className="flex items-center gap-3">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            width={44}
                                            height={44}
                                        />
                                        <span className="font-medium">{item.title}</span>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="pl-10 text-gray-600">
                                    {item.text}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </>
    )
}
