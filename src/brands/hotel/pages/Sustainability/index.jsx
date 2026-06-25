// src/brands/hotel/pages/Sustainability/index.jsx
// Estalagem de Sangalhos — SustainabilityPage

import sustainability from "../../config/pages/sustainability.js";
import styles from "../../layouts/HotelPageLayout.module.css";

import SustainabilityCommitmentSection from "./sections/SustainabilityCommitment/index.jsx";
import HowToParticipateSection from "./sections/HowToParticipate/index.jsx";
import EnvironmentalImpactSection from "./sections/EnvironmentalImpact/index.jsx";
import FutureGoalsSection from "./sections/FutureGoals/index.jsx";

export default function SustainabilityPageHotel() {
  return (
    <div className={styles.pageWrap} data-brand="hotel">
      <section
        id={sustainability.id}
        className={styles.inner}
        aria-label={sustainability.ui.pageAriaLabel}
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
