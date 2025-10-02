import RoundedArrowButton from "@/components/ui/buttons/arrowButton/RoundedArrowButton";
import { Label } from "@/components/ui/Label";
import TeamCard from "./TeamCard";

const teammate = [
    { id: 1, jobTitle: "CEO", name: "Bohdan", cite: "sdasdadasdasdas" },
    { id: 2, jobTitle: "CTO", name: "Anna", cite: "Anna leads tech team." },
    { id: 3, jobTitle: "Designer", name: "Alice", cite: "Alice creates designs." },
    { id: 4, jobTitle: "Developer", name: "Bob", cite: "Bob writes code." },
    { id: 5, jobTitle: "PM", name: "Carol", cite: "Carol manages projects." },
];

export default function Team() {
    return (
        <div className="flex flex-col lg:flex-row gap-18">
            <div className="flex flex-col gap-4 lg:gap-8 max-w-[400px]">
                <Label>Expertise</Label>
                <h2 className="text-[24px] lg:text-[54px] font-bold">Meet The Team</h2>
                <h5>
                    Our talented team consists of skilled developers,
                    creative designers, and dedicated project managers
                    who bring diverse expertise and fresh ideas to every project.
                </h5>
                <div className="mt-6">
                    <RoundedArrowButton title="Get in touch" />
                </div>
            </div>
            <div className="flex flex-row gap-4 overflow-auto">
                {teammate.map((t) => (
                    <TeamCard
                        key={t.id}
                        role={t.jobTitle}
                        name={t.name}
                        description={t.cite}
                    />
                ))}
            </div>
        </div>
    )
}