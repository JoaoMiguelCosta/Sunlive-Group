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
        className={styles.inner}
        role="region"
        aria-label="Estalagem de Sangalhos — Sobre"
      >
        {/* Secção 1: Sobre a Estalagem */}
        <AboutTheHotel />

        {/* Secção 2: A nossa História */}
        <OurStoryMilestonesSection />

        {/* Secção 3: Compromisso com a Qualidade */}
        <OurQualityCommitmentSection />

        {/* Secção 4: A Região da Bairrada */}
        <TheBairradaRegion />

        {/* Secção 5: Envolvente Natural Única (pill final) */}
        <UniqueNaturalSetting />
      </main>
    </div>
  );
}
