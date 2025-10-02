import { Label } from "@/components/ui/Label";

export default function Mission() {
    return (
        <div className="flex flex-col items-center justify-between relative ">
            <div
                className="absolute -right-6 lg:right-1/4 -top-8 lg:-top-32 w-34 h-34 lg:w-68 lg:h-68 bg-[url('/images/puzzle/puzzle3.png')] bg-no-repeat bg-contain rotate-[-29deg] pointer-events-none"
            />
            <div className="flex flex-col gap-2 items-center justify-center max-w-2xl py-8 z-10">

                <Label>Our Mission & Vision</Label>
                <p className="text-center p-6 rounded-4xl bg-white/12 backdrop-blur-sm">
                    At Xedrum, we craft digital experiences that empower businesses to grow, scale,
                    and lead in their industries. Guided by innovation, transparency, and a passion
                    for excellence, we deliver technology solutions that make an impact.
                </p>
            </div>
            <div
                className="absolute left-0 lg:left-2/6 bottom-8 lg:-bottom-8 w-21 h-21 lg:w-42 lg:h-42 bg-[url('/images/puzzle/puzzle3.png')] bg-no-repeat bg-contain rotate-[147deg] pointer-events-none"
            />
            <p className="text-green-primary font-bold mt-8">- Team Xedrum</p>
        </div>
    )
}