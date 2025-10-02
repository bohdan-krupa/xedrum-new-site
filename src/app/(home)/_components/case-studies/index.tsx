"use client";

import { useState } from "react";
import { Label } from "@/components/ui/Label";
import Switcher from "./Switcher";
import RoundedArrowButton from "@/components/ui/buttons/arrowButton/RoundedArrowButton";
import CaseCard from "./CaseCard";
import Slider from "@/components/ui/slider/Slider";

interface CaseItem {
    title: string;
    description: string;
    tags: string[];
}
const webCases: CaseItem[] = [
    { title: "CARGOTRACK", description: "Cloud platform optimizing delivery routes and monitoring fleet.", tags: ["Web Development", "Team Extension"] },
    { title: "CARGOTRACK", description: "Cloud platform optimizing delivery routes and monitoring fleet.", tags: ["Web Development", "Team Extension"] },
    { title: "CARGOTRACK", description: "Cloud platform optimizing delivery routes and monitoring fleet.", tags: ["Web Development", "Team Extension"] },
    { title: "CARGOTRACK", description: "Cloud platform optimizing delivery routes and monitoring fleet.", tags: ["Web Development", "Team Extension"] },
];

const mobileCases: CaseItem[] = [
    { title: "HEALTHYAPP", description: "Mobile app for real-time health tracking.", tags: ["Mobile App", "AI Integration"] },
    { title: "HEALTHYAPP", description: "Mobile app for real-time health tracking.", tags: ["Mobile App", "AI Integration"] },
    { title: "HEALTHYAPP", description: "Mobile app for real-time health tracking.", tags: ["Mobile App", "AI Integration"] },
    { title: "HEALTHYAPP", description: "Mobile app for real-time health tracking.", tags: ["Mobile App", "AI Integration"] },
];

const allCases = [...webCases, ...mobileCases];

export default function CaseStudies() {
    const [activeTab, setActiveTab] = useState(0);

    let displayedCases: CaseItem[] = [];
    if (activeTab === 0) displayedCases = webCases;
    else if (activeTab === 1) displayedCases = mobileCases;
    else displayedCases = allCases;

    return (
        <div className="mt-16">
            <div className="flex flex-col gap-y-3">
                <Label>Projects that speak for themselves</Label>
                <h2 className="h2-text">Case Studies</h2>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <Switcher active={activeTab} setActive={setActiveTab} />
                    <RoundedArrowButton title="All projects" />
                </div>

                <div className="sm:hidden mt-6">
                    <Slider slideWidthPercent={90} peek={8}>
                        {displayedCases.map((item, i) => (
                            <CaseCard key={i} {...item} />
                        ))}
                    </Slider>
                </div>
                <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-x-12 mt-6">
                    {displayedCases.map((item, i) => (
                        <div key={i} className={i % 2 === 1 ? "lg:mt-12" : ""}>
                            <CaseCard {...item} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
