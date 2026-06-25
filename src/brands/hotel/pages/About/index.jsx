import about from "../../config/pages/about.js";
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
        id={about.id}
        className={styles.inner}
        aria-label={about.ui.pageAriaLabel}
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
