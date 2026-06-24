import styles from "../../layouts/HotelPageLayout.module.css";

import AboutTheHotel from "./Sections/AboutTheHotel";
import OurStoryMilestonesSection from "./Sections/OurStoryMilestones";
import OurQualityCommitmentSection from "./Sections/OurQualityCommitment";
import TheBairradaRegion from "./Sections/TheBairradaRegion";
import UniqueNaturalSetting from "./Sections/UniqueNaturalSetting";

export default function AboutPageHotel() {
  return (
    <div className={styles.pageWrap} data-brand="hotel">
      <section
        id="about-page"
        className={styles.inner}
        aria-label="Estalagem de Sangalhos — Sobre"
      >
        <div className={styles.contentFlow}>
          <AboutTheHotel />
          <OurStoryMilestonesSection />
          <OurQualityCommitmentSection />
          <TheBairradaRegion />
          <UniqueNaturalSetting />
        </div>
      </section>
    </div>
  );
}
