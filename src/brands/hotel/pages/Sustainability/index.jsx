// src/brands/hotel/pages/Sustainability/index.jsx
// Estalagem de Sangalhos — SustainabilityPage (reutiliza Home.module.css como layout)

import styles from "../../layouts/HotelPageLayout.module.css";

import SustainabilityCommitmentSection from "./sections/SustainabilityCommitment/index.jsx";
import HowToParticipateSection from "./sections/HowToParticipate/index.jsx";
import EnvironmentalImpactSection from "./sections/EnvironmentalImpact/index.jsx";
import FutureGoalsSection from "./sections/FutureGoals/index.jsx";

export default function SustainabilityPageHotel() {
  return (
    <div className={styles.pageWrap} data-brand="hotel">
      <main
        id="sustainability-page"
        className={styles.inner}
        role="region"
        aria-label="Estalagem de Sangalhos — Sustentabilidade"
      >
        <SustainabilityCommitmentSection />
        <HowToParticipateSection />
        <EnvironmentalImpactSection />
        <FutureGoalsSection />
      </main>
    </div>
  );
}
