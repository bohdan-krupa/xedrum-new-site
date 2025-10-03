import RoundedArrowButton from "@/components/ui/buttons/arrowButton/RoundedArrowButton";
import FolderIcon from "@/components/ui/icons/folder-icon";
import RightArrow from "@/components/ui/icons/right-arrow";
import { Label } from "@/components/ui/Label";
import Image from "next/image"

export default function WhoWeAre() {
    return (
        <div className="w-full lg:mx-auto py-9 lg:py-24">
            <div className='flex flex-col-reverse md:flex-row gap-12 lg:gap-26
                justify-center rounded-2xl lg:pt-26 lg:rounded-3xl border-2 border-[#E9E9E9]'>
                <div className='flex flex-row min-w-max justify-center relative'>
                    <Image src={"/images/phone2.png"} alt='phone2' width={350} height={0} className="md:w-full overflow-clip" />
                    <button className='flex absolute left-2 bottom-2/4 p-2 rounded-4xl font-bold text-[10px] bg-green-light items-center'>
                        <span className="mr-1">Watch Our Story </span>
                        <RightArrow />
                    </button>
                    <div className="absolute bottom-0 md:bottom-0 lg:bottom-16 bg-white inset-shadow-sm w-2xs lg:left-6/8 p-1 flex flex-row rounded-2xl">
                        <span className='px-2 py-3'><FolderIcon /></span>
                        <div className='flex flex-col gap-1 p-2'>
                            <span className='font-bold font-inter'>60+ projects</span>
                            <span className='text-p'>successfully delivered for clients across Europe and the US.</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-between">
                    <div className='flex flex-col gap-1.5 pt-6 px-8'>
                        <Label>About Us</Label>
                        <h2 className='h2-text'>Who We Are</h2>
                        <p className="text-p">
                            At Xedrum, we don’t just build software — we build long-term partnerships.
                            With years of experience, dozens of successful projects, and a team of
                            skilled engineers, we help startups and enterprises grow with confidence. We believe in transparency, quality,
                            and bold ideas — that's why over <span className="text-green-primary font-bold">98%</span> of our clients stay with us.</p>
                    </div>
                    <div className="mx-8 py-8 flex justify-center lg:justify-end">
                        <RoundedArrowButton title="Learn more" />
                    </div>
                </div>
            </div>
            <div className="flex flex-row gap-4 justify-center text-center text-[10px]">
                <div className="bg-white inset-shadow-sm rounded-2xl py-1 px-2 lg:px-4 mt-4">GDPR Data Protection</div>
                <div className="bg-white inset-shadow-sm rounded-2xl py-1 px-2 lg:px-4 mt-4">ISO/IEC 27001:2019</div>
                <div className="bg-white inset-shadow-sm rounded-2xl py-1 px-2 lg:px-4 mt-4">ISO/IEC 27001:2022</div>
            </div>
        </div>
    )
}