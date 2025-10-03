import Hero from "./_components/hero";
import OurServices from "./_components/our-services";
import CaseStudies from "./_components/case-studies";
import WhoWeAre from "./_components/who-we-are";
import ClientsReviews from "@/components/clients-reviews/ClientsReviews"

const sections = [
    { component: Hero, bg: "bg-white" },
    { component: WhoWeAre, bg: "bg-off-white" },
    { component: OurServices, bg: "bg-white" },
    { component: CaseStudies, bg: "bg-white" },
    { component: ClientsReviews, bg: "bg-white" },
];

export default function Home() {
    return (
        <main className="min-h-screen flex flex-col overflow-hidden">
            {sections.map(({ component: Component, bg }, index) => (
                <section key={index} className={`w-full ${bg}`}>
                    <div className="container">
                        <Component />
                    </div>
                </section>
            ))}
        </main>
    );
};

