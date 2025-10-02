import { ourStoryData } from '@/components/layout/about/constants'
import { Label } from '@/components/ui/Label'
import Image from 'next/image'
import React from 'react'
import { StatCard } from './StatCard'

export default function Story() {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col gap-8 items-center justify-center max-w-2xl">
                <Label>Our Values</Label>
                <h2 className="h2-text">Our Story</h2>
                <p className="text-center text-p">
                    Founded by a team of technology enthusiasts, Xedrum has been delivering
                    high-quality web and mobile development services for over X years.
                    From startups to global companies, we’ve helped clients turn ideas into robust products
                    with stunning UX/UI design and seamless functionality.
                </p>
            </div>

            <div className="flex flex-col md:flex-row items-stretch justify-center w-full max-w-[1180px] mx-auto my-[60px] gap-5 relative">
                <div className="flex flex-col gap-5 md:flex-1 relative z-10">
                    <StatCard
                        value={ourStoryData.completedProjects}
                        label={<><strong>Projects</strong> Completed</>}
                        className="bg-white flex-none"
                    />
                    <StatCard
                        value={ourStoryData.happyClients}
                        label="Happy Clients"
                        className="flex-1 bg-[url('/images/background.png')] bg-center bg-no-repeat flex-col-reverse bg-cover text-white -mt-10 md:mt-0"
                    />
                </div>
                <div className="flex-shrink-0 flex justify-center items-center relative z-20 -mt-10 md:mt-0">
                    <Image
                        src="/images/ourStoryMain.png"
                        alt="Divider"
                        width={393}
                        height={464}
                        className="object-contain"
                    />
                </div>
                <div className="flex flex-col gap-5 md:flex-1 relative z-30">
                    <StatCard
                        value={ourStoryData.expertTeam}
                        label={<>Expert <strong>Team</strong></>}
                        className="flex-1 bg-white/70 backdrop-blur-sm -mt-16 md:mt-0"
                    />
                    <StatCard
                        value={ourStoryData.yearsOfExperience}
                        label={<>Years of <strong>Experience</strong></>}
                        className="bg-[#EEF7F1] z-30 -mt-10 md:mt-0"
                    />
                </div>
            </div>
        </div>
    )
}
