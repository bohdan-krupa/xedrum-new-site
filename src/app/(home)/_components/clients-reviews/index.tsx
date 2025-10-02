import ArrowButton from "@/components/ui/buttons/arrowButton/ArrowButton"
import { Label } from "@/components/ui/Label"
import Slider from "@/components/ui/slider/Slider";
import ReviewCard from "./ReviewCard";

const reviews = [
    {
        name: "Omar Rahman",
        role: "Co-founder & COO at Finlytics",
        text: "Working with Xedrum felt like having an in-house team — fast, reliable, and fully aligned with our product vision.",
        stars: "⭐⭐⭐⭐⭐",
    },
    {
        name: "Jane Doe",
        role: "CEO at HealthPlus",
        text: "The team delivered amazing results on time and exceeded expectations in every way.",
        stars: "⭐⭐⭐⭐⭐",
    },
    {
        name: "John Smith",
        role: "CTO at EduSmart",
        text: "Professional, skilled, and easy to communicate with. Highly recommended!",
        stars: "⭐⭐⭐⭐⭐",
    },
    {
        name: "Alice Brown",
        role: "Product Manager at Finlytics",
        text: "Xedrum helped us scale from MVP to full-featured platform in just a few months.",
        stars: "⭐⭐⭐⭐⭐",
    },
    {
        name: "Michael Lee",
        role: "Founder at TravelApp",
        text: "A reliable team that understands the product and delivers quality work consistently.",
        stars: "⭐⭐⭐⭐⭐",
    },
]

export default function СlientsReviews() {
    return (
        <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-32 mt-32 mb-12">
            <div className="flex flex-col gap-4 lg:gap-8 max-w-[400px]">
                <Label>Projects that speak for themselves</Label>
                <h2 className="text-[24px] lg:text-[54px] font-bold">What Our Clients Say</h2>
                <h5>
                    Trust is built on results. Here’s what our partners think about working with us.
                </h5>
                <div className="mt-6">
                    <ArrowButton title="Learn more" />
                </div>
            </div>

            <div className="mt-8 lg:mt-0 w-full lg:flex-1">
                <div className="lg:hidden">
                    <Slider slideWidthPercent={90} peek={8} showProgress>
                        {reviews.map((review, i) => (
                            <ReviewCard key={i} review={review} />
                        ))}
                    </Slider>
                </div>

                <div className="hidden lg:flex flex-row overflow-hidden gap-6">
                    {reviews.map((review, i) => (
                        <ReviewCard key={i} review={review} />
                    ))}
                </div>
            </div>
        </div>
    )
}
