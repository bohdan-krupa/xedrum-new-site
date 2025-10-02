import Image from "next/image";
import { Label } from "@/components/ui/Label";
import WhiteArrowButton from "@/components/ui/buttons/arrowButton/WhiteArrowButton";

const caseData = [
    {
        title: "AI-powered SaaS Dashboard",
        description:
            "A platform that helps teams make smarter campaign decisions with real-time insights and AI-powered recommendations.",
        tags: ["Node.js", "TypeScript", "React", "AI Models (Python API)"],
        goals: [
            "Redesign the product architecture and UX to improve performance and scalability",
            "Enhance data visibility for end-users",
            "Introduce AI-driven decision support tools",
        ],
        imageSrc: "/images/",
        link: "#",
    },
    {
        title: "AI-powered SaaS Dashboard",
        description:
            "A platform that helps teams make smarter campaign decisions with real-time insights and AI-powered recommendations.",
        tags: ["Node.js", "TypeScript", "React", "AI Models (Python API)"],
        goals: [
            "Redesign the product architecture and UX to improve performance and scalability",
            "Enhance data visibility for end-users",
            "Introduce AI-driven decision support tools",
        ],
        imageSrc: "/images/",
        link: "#",
    },
    {
        title: "AI-powered SaaS Dashboard",
        description:
            "A platform that helps teams make smarter campaign decisions with real-time insights and AI-powered recommendations.",
        tags: ["Node.js", "TypeScript", "React", "AI Models (Python API)"],
        goals: [
            "Redesign the product architecture and UX to improve performance and scalability",
            "Enhance data visibility for end-users",
            "Introduce AI-driven decision support tools",
        ],
        imageSrc: "/images/",
        link: "#",
    },
    {
        title: "AI-powered SaaS Dashboard",
        description:
            "A platform that helps teams make smarter campaign decisions with real-time insights and AI-powered recommendations.",
        tags: ["Node.js", "TypeScript", "React", "AI Models (Python API)"],
        goals: [
            "Redesign the product architecture and UX to improve performance and scalability",
            "Enhance data visibility for end-users",
            "Introduce AI-driven decision support tools",
        ],
        imageSrc: "/images/",
        link: "#",
    },
];

export default function CaseList() {
    return (
        <div className="flex flex-col gap-8 container">
            {caseData.map((c, i) => (
                <div
                    key={i}
                    className={`flex flex-col md:flex-row gap-6 lg:gap-16 rounded-2xl p-6 ${i % 2 === 1 ? "md:flex-row-reverse" : ""
                        }`}
                >
                    <div className="flex-1 flex items-center bg-green-primary rounded-2xl justify-center">
                        <Image
                            src={c.imageSrc}
                            alt={c.title}
                            width={400}
                            height={300}
                            className="rounded-2xl object-contain"
                        />
                    </div>
                    <div className="flex-1 flex flex-col gap-4">
                        <Label>Case study</Label>
                        <h3 className="font-bold text-[28px] lg:text-[48px] mt-2">{c.title}</h3>
                        <div className="flex flex-wrap gap-2">
                            {c.tags.map((tag, i) => (
                                <span
                                    key={i}
                                    className="text-xs p-2 bg-green-light text-green-primary border-1 border-[#53b3705c]
                                     rounded-xl font-bold font-inter"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <p className="font-inter text-p-sm">{c.description}</p>

                        <div>
                            <span className="text-xs font-semibold text-green-primary">Goal:</span>
                            <ul className="list-disc pl-5 text-gray-600 mt-1 space-y-1">
                                {c.goals.map((goal, i) => (
                                    <li key={i}>{goal}</li>
                                ))}
                            </ul>
                        </div>

                        <WhiteArrowButton
                            title="More Details"
                            buttonColor="#ffffffff"
                            textColor="#53b36f"
                            boldText
                            fontSize="16px"
                            className="!border-2 !border-[#53b36f] max-w-max"
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}
