import RoundedArrowButton from "@/components/ui/buttons/arrowButton/RoundedArrowButton";
import { Label } from "@/components/ui/Label";
import TeamCard from "./TeamCard";

const teammate = [
    { id: 1, jobTitle: "Co Founder", name: "Bohdan", cite: "“Decor is the art of giving every space unique haracter and soul”" },
    { id: 2, jobTitle: "Co Founder", name: "Bohdan", cite: "“Decor is the art of giving every space unique haracter and soul”" },
    { id: 3, jobTitle: "Co Founder", name: "Bohdan", cite: "“Decor is the art of giving every space unique haracter and soul”" },
    { id: 4, jobTitle: "Co Founder", name: "Bohdan", cite: "“Decor is the art of giving every space unique haracter and soul”" },

];

export default function Team() {
    return (
        <div className="flex flex-col lg:flex-row gap-18">
            <div className="flex flex-col gap-4 lg:gap-8 max-w-[400px]">
                <Label>Expertise</Label>
                <h2 className="h2-text">Meet The Team</h2>
                <p className="text-p">
                    Our talented team consists of skilled developers,
                    creative designers, and dedicated project managers
                    who bring diverse expertise and fresh ideas to every project.
                </p>
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