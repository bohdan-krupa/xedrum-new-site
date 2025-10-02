"use client"
import RoundedArrowButton from "@/components/ui/buttons/arrowButton/RoundedArrowButton";
import AgentIcon from "@/components/ui/icons/agent-icon";
import AiIcon from "@/components/ui/icons/ai-icon";
import BotIcon from "@/components/ui/icons/bot-icon";
import ItStaff from "@/components/ui/icons/it-staff";
import RagIcon from "@/components/ui/icons/rag-icon";
import UxIcon from "@/components/ui/icons/ux-icon";
import { Label } from "@/components/ui/Label";
import Image from "next/image";
import { useState } from "react";

const services = [
    { title: "AI/ML Consulting", icon: AiIcon },
    { title: "RAG as a Service", icon: RagIcon },
    { title: "Dedicated AI Team", icon: ItStaff },
    { title: "AI Agents & GenAI", icon: AgentIcon },
    { title: "IT staff augmentation", icon: ItStaff },
    { title: "UX/UI Design", icon: UxIcon },
    { title: "BOT team", icon: BotIcon },
];

export default function OurServices() {
    const [active, setActive] = useState(services[0].title);

    return (
        <div className="flex flex-col lg:flex-row mx-auto gap-8 mt-12 lg:mt-12">
            <div className="flex flex-col gap-3">
                <Label>What We Do Best</Label>
                <h2 className="text-2xl lg:text-[56px] font-bold">Our Services</h2>
                <p>
                    From full-cycle development to scalable team solutions – we help you
                    build future-proof digital products.
                </p>
                <ul className="flex flex-row lg:flex-col overflow-x-auto no-scrollbar scroll-smooth max-w-max gap-2">
                    {services.map((service) => {
                        const isActive = active === service.title;
                        const Icon = service.icon;

                        return (
                            <li
                                key={service.title}
                                onClick={() => setActive(service.title)}
                                className={`flex items-center px-6 py-3 rounded-xl cursor-pointer transition-colors 
                                    ${isActive ? "bg-green-light" : ""
                                    }`}
                            >
                                <Icon color={isActive ? "#22C55E" : "#BCBCBC"} />
                                <span className="ml-2 whitespace-nowrap">{service.title}</span>
                            </li>
                        );
                    })}
                </ul>
            </div>

            <div className="flex flex-col justify-between w-full bg-off-white rounded-2xl">
                <div className="flex w-full justify-center items-center">
                    <Image
                        src="/images/iphone12pro.png"
                        alt="phone"
                        width={400}
                        height={400}
                        className="w-full lg:w-[80%]"
                    />
                </div>
                <div className="bg-white w-full rounded-2xl p-6 border-1 border-[#E9E9E9] bg-[url(/images/puzzle/puzzle-bg.svg)] bg-bottom-right bg-no-repeat">
                    <h3 className="font-semibold text-2xl mb-2">MOBILE DEVELOPMENT</h3>
                    <p className="text-p-sm w-10/12">
                        Native and cross-platform apps that engage users and perform
                        seamlessly across devices. Built for impact and scale.
                    </p>
                    <div className="py-6 items-end"><RoundedArrowButton title="Learn more" /></div>
                </div>
            </div>
        </div>
    );
};

