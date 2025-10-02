import About from "@/components/layout/about/About";
import Hero from "./_components/hero";
import Values from "./_components/values";
import VideoPlayer from "@/components/videoPlayer/VideoPlayer";
import { videoPlayerData } from "@/components/layout/about/constants";
import Story from "./_components/story";
import Team from "./_components/team";
import Mission from "./_components/mission";
import PartnerWithUs from "./_components/partner-with-us";

const AboutPage = () => {
	// return <About />;
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
			<section>
				<div className="container">
					<Values />
				</div>
			</section>
			<section className="container">
				<Story />
				<VideoPlayer
					src={videoPlayerData.src}
					previewImage={videoPlayerData.previewImage}
				/>
			</section>
			<section>
				<Mission />
			</section>
			<section className="container">
				<Team />
			</section>
			<section className="bg-off-white">
				<PartnerWithUs />
			</section>
		</main>

	)
}

export default AboutPage;