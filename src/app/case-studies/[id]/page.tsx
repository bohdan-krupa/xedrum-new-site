
import { notFound } from "next/navigation"
import Image from "next/image";
import { caseData } from "../case-list/mockData";
import { Label } from "@/components/ui/Label";
import ClientsReviews from "@/components/clients-reviews/ClientsReviews";
import Slider from "@/components/ui/slider/Slider";
import CaseCard from "@/components/case-card/CaseCard";


const similarCases = [
    { title: "CARGOTRACK", description: "Cloud platform optimizing delivery routes and monitoring fleet.", tags: ["Web Development", "Team Extension"] },
    { title: "CARGOTRACK", description: "Cloud platform optimizing delivery routes and monitoring fleet.", tags: ["Web Development", "Team Extension"] },
    { title: "CARGOTRACK", description: "Cloud platform optimizing delivery routes and monitoring fleet.", tags: ["Web Development", "Team Extension"] },
    { title: "CARGOTRACK", description: "Cloud platform optimizing delivery routes and monitoring fleet.", tags: ["Web Development", "Team Extension"] },
];

interface Props {
    params: { id: string }
}


export default async function CasePage({ params }: Props) {

    const { id } = await params;

    const caseItem = caseData.find(c => c.id.toString() === id);
    if (!caseItem) return notFound();

    return (
        <main className="container flex flex-col gap-16 py-10">
            <section className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-32">
                <div>
                    <Label>Case study</Label>
                    <h1 className="h2-text">{caseItem.title}</h1>
                </div>
                <p className="text-p max-w-xl">{caseItem.description}</p>
            </section>

            <section className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-32">
                <div className="flex-1">
                    <h2 className="h2-text mb-4">Our Approach</h2>
                    <p className="text-p">
                        We focused on scalability, speed, and clarity — rethinking both the backend
                        infrastructure and frontend experience. By moving to a microservice architecture
                        and building a real-time analytics engine, we gave users instant access
                        to campaign insights.
                    </p>
                </div>
                <div className="flex-1 flex items-center justify-center bg-green-primary rounded-2xl">
                    <Image
                        src="/images/phone.png"
                        alt="Our Approach"
                        width={300}
                        height={300}
                        className="rounded-2xl object-contain"
                    />
                </div>
            </section>
            <section>
                <h2 className="h2-text mb-4">The Problem</h2>
                <p className="text-p max-w-3xl">
                    Small and mid-sized businesses often drown in raw data but lack the tools
                    or expertise to turn that data into actionable insights. Most dashboards are
                    either too simplistic to be useful or too complex for non-technical users.
                </p>
            </section>
            <ClientsReviews />
            <section>
                <Label>Why choose us</Label>
                <h2 className="h2-text mb-4">Similar Cases</h2>
                <div className="mt-6">
                    <Slider slideWidthPercent={45} showProgress={false} peek={24}>
                        {similarCases.map((item, i) => (
                            <CaseCard key={i} {...item} />
                        ))}
                    </Slider>
                </div>
            </section>
        </main>
    );
}
