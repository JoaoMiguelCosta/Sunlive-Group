// src/brands/hotel/pages/About/index.jsx
// Estalagem de Sangalhos — AboutPage (reutiliza Home.module.css como layout)

import styles from "../Home/Home.module.css";

import AboutTheHotel from "../../components/About/AboutTheHotel";
import OurStoryMilestonesSection from "../../components/About/OurStoryMilestones";
import OurQualityCommitmentSection from "../../components/About/OurQualityCommitment";
import TheBairradaRegion from "../../components/About/TheBairradaRegion";
import UniqueNaturalSetting from "../../components/About/UniqueNaturalSetting";

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
