import { Label } from "@/components/ui/Label";
import Image from "next/image";

export default function PartnerWithUs() {
    return (
        <div className="py-8 lg:py-24 container">
            <div>
                <Label>Expertise</Label>
                <h1 className="h2-text my-8">Why Partner With Us</h1>
            </div>


            <div className=" grid grid-cols-1 md:grid-cols-2 h-full lg:grid-cols-4 gap-4">
                {/* columnn */}
                <div className="border border-[#EEEEEE] rounded-2xl p-4 flex flex-col justify-between">
                    <Image src="/images/icon/accordionIcon.svg" alt="ico" width={45} height={45} />
                    <div>
                        <h3 className="font-semibold text-lg">Flexibility</h3>
                        <p className="text-p">
                            We adapt to your needs and scale your team effortlessly.
                        </p>
                    </div>
                </div>

                <div className="border border-[#EEEEEE] rounded-2xl p-4 flex flex-col justify-between">
                    <Image src="/images/icon/accordionIcon.svg" alt="ico" width={45} height={45} />
                    <div>
                        <h3 className="font-semibold text-lg">Flexibility</h3>
                        <p className="text-p">
                            We adapt to your needs and scale your team effortlessly.
                        </p>
                    </div>
                </div>


                <div className="border bg-[#53B36F24]/70 backdrop-blur-sm border-[#39932C4A] rounded-2xl p-4 flex flex-col justify-between">
                    <Image src="/images/icon/accordionIcon.svg" alt="ico" width={45} height={45} />
                    <div>
                        <h3 className="font-semibold text-lg">Flexibility</h3>
                        <p className="text-p">
                            We adapt to your needs and scale your team effortlessly.
                        </p>
                    </div>
                </div>

                <div className="border border-[#EEEEEE] rounded-2xl p-4 flex flex-col justify-between">
                    <Image src="/images/icon/accordionIcon.svg" alt="ico" width={45} height={45} />
                    <div>
                        <h3 className="font-semibold text-lg">Flexibility</h3>
                        <p className="text-p">
                            We adapt to your needs and scale your team effortlessly.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}