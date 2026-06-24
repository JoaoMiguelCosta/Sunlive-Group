import styles from "../../layouts/HotelPageLayout.module.css";

import AboutTheHotel from "./sections/AboutTheHotel";
import OurStoryMilestonesSection from "./sections/OurStoryMilestones";
import OurQualityCommitmentSection from "./sections/OurQualityCommitment";
import TheBairradaRegion from "./sections/TheBairradaRegion";
import UniqueNaturalSetting from "./sections/UniqueNaturalSetting";

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
