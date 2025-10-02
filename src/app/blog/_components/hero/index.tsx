import WhiteArrowButton from "@/components/ui/buttons/arrowButton/WhiteArrowButton";
import { Label } from "@/components/ui/Label";

export default function Hero() {
    return (
        <div className="text-left text-white container">
            <Label>Projects that speak for themselves</Label>
            <h1 className="h1-text mt-2 leading-[1.2]">
                Trending Blogs & News
            </h1>
            <h5 className="text-sm lg:text-base mt-4 max-w-2xl ">
                Dive into fresh ideas, practical tips, and expert insights — from web design to digital
                strategy. With Xedrum, stay inspired and ahead in today’s fast-moving tech world.
            </h5>
            <div className="my-6">
                <WhiteArrowButton
                    title='Start a project'
                    buttonColor="#ffffffff"
                    textColor="#53b36f"
                    boldText
                    fontSize="16px" />
            </div>
        </div>
    )
}