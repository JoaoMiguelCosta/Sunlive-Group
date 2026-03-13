// src/brands/hotel/pages/About/index.jsx
// Estalagem de Sangalhos — AboutPage (reutiliza Home.module.css como layout)

import styles from "../../layouts/HotelPageLayout.module.css";

import AboutTheHotel from "./Sections/AboutTheHotel";
import OurStoryMilestonesSection from "./Sections/OurStoryMilestones";
import OurQualityCommitmentSection from "./Sections/OurQualityCommitment";
import TheBairradaRegion from "./Sections/TheBairradaRegion";
import UniqueNaturalSetting from "./Sections/UniqueNaturalSetting";

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
