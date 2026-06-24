// src/brands/hotel/pages/Sustainability/index.jsx
// Estalagem de Sangalhos — SustainabilityPage

import styles from "../../layouts/HotelPageLayout.module.css";

import SustainabilityCommitmentSection from "./sections/SustainabilityCommitment/index.jsx";
import HowToParticipateSection from "./sections/HowToParticipate/index.jsx";
import EnvironmentalImpactSection from "./sections/EnvironmentalImpact/index.jsx";
import FutureGoalsSection from "./sections/FutureGoals/index.jsx";

export default function SustainabilityPageHotel() {
  return (
    <div className={styles.pageWrap} data-brand="hotel">
      <section
        id="sustainability-page"
        className={styles.inner}
        aria-label="Estalagem de Sangalhos — Sustentabilidade"
      >
        <div className={styles.contentFlow}>
          <SustainabilityCommitmentSection />
          <HowToParticipateSection />
          <EnvironmentalImpactSection />
          <FutureGoalsSection />
        </div>
      </section>
    </div>
  );
}
