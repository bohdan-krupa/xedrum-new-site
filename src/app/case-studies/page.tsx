import Hero from "./_components/hero";
import CaseList from "./case-list";
import ClientsReviews from "@/components/clients-reviews/ClientsReviews"

export default function CaseStudies() {
    return (
        <main className="container pt-12">
            <CaseList />
            <ClientsReviews />
        </main>
    )
}