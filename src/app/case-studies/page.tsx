import Hero from "./_components/hero";
import CaseList from "./_components/case-list";
import ClientsReviews from "@/components/clients-reviews/ClientsReviews"

export default function CaseStudies() {
    return (
        <main className="flex flex-col gap-8 lg:gap-16 overflow-hidden">
            <section
                className="
                    bg-[url(/images/mobile-bg.png)] 
                    md:bg-[url(/images/background.png)] 
                    bg-top bg-no-repeat bg-cover 
                    rounded-b-2xl 
                    flex items-center
                     min-h-[580px]
                    "
            >
                <div className="container flex">
                    <div className="flex-1">
                        <Hero />
                    </div>
                </div>

            </section>
            <CaseList />
            <ClientsReviews />
        </main>
    )
}