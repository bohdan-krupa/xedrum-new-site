import styles from './About.module.scss';
import { ABOUT_TEXT } from './constants';
import Image from 'next/image';
import WhiteArrowButton from '@/components/ui/buttons/arrowButton/WhiteArrowButton';
import { Progress } from "@/components/ui/progress";
import Accordion from '@/components/ui/accordion/Accordion';
import { accordionData, progressData, ourStoryTitle, ourStoryData, videoPlayerData } from './constants';
import VideoPlayer from '@/components/videoPlayer/VideoPlayer';
import { Label } from '@/components/ui/Label';

const About = () => {
  return (
    <div className={styles.aboutBg}>
      <div className={styles.container}>
        <div className={styles.main}>
          <Label>About Us</Label>
          <h1 className={styles.title}>About Us</h1>
          <h3>{ABOUT_TEXT}</h3>
          <WhiteArrowButton
            title='Let&apos;s talk'
            buttonColor="#ffffffff"
            textColor="#53b36f"
            boldText
            padding="18px 40px"
            fontSize="16px"
          />
        </div>
        <div className={styles.secondBlock}>
          <div className={styles.firstBlock}>
            <Label>Our Values</Label>
            <h1 className={styles.title}>Built on Values. </h1>
            <h1 className={styles.title}>Driven by Purpose.  </h1>
            <Image
              src="/images/team/team.png"
              alt="Team"
              width={564}
              height={204}
              className={styles.image}
            />
            <Progress items={progressData} />
          </div>
          <div className={styles.accordionBlock}>
            <Accordion items={accordionData} />
          </div>
        </div>
        <div className={styles.storyBlock}>
          <div className={styles.storyTitleBlock}>
            <p className={styles.badgeAlternative}>
              <span>•</span>
              <span>{ourStoryTitle.badge}</span>
            </p>
            <h1>{ourStoryTitle.title}</h1>
            <p className={styles.ourStoryP}>{ourStoryTitle.text}</p>
          </div>
          <div className={styles.ourStoryMain}>
            <div className={styles.leftSide}>
              <div className={styles.sideItem}>
                <h1>{ourStoryData.completedProjects}+</h1>
                <p><strong>Projects</strong> Completed</p>
              </div>
              <div className={styles.sideItem}>
                <p>Happy Clients</p>
                <h1>{ourStoryData.happyClients}+</h1>
              </div>
            </div>
            <Image
              src="/images/ourStoryMain.png"
              alt="Divider"
              width={393}
              height={464}
              className={styles.divider}
            />
            <div className={styles.rightSide}>
              <div className={styles.sideItem}>
                <h1>{ourStoryData.expertTeam}+</h1>
                <p>Expert <strong>Team</strong></p>
              </div>
              <div className={styles.sideItem}>
                <h1>{ourStoryData.yearsOfExperience}+</h1>
                <p>Years of <strong>Experience</strong></p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <VideoPlayer src={videoPlayerData.src} previewImage={videoPlayerData.previewImage} />
        </div>
      </div>
    </div>
  );
}

export default About;
