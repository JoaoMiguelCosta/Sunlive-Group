// src/brands/hotel/pages/About/index.jsx
// Estalagem de Sangalhos — AboutPage (reutiliza Home.module.css como layout)

import styles from "../Home/Home.module.css";

import AboutTheHotel from "./sections/AboutTheHotel";
import OurStoryMilestonesSection from "./sections/OurStoryMilestones";
import OurQualityCommitmentSection from "./sections/OurQualityCommitment";
import TheBairradaRegion from "./sections/TheBairradaRegion";
import UniqueNaturalSetting from "./sections/UniqueNaturalSetting";

export default function AboutPageHotel() {
  return (
    <div className={styles.pageWrap} data-brand="hotel">
      <main
        id="about-page"
        className={styles.inner}
        role="region"
        aria-label="Estalagem de Sangalhos — About"
      >
        <AboutTheHotel />
        <OurStoryMilestonesSection />
        <OurQualityCommitmentSection />
        <TheBairradaRegion />
        <UniqueNaturalSetting />
      </main>
    </div>
  );
}
