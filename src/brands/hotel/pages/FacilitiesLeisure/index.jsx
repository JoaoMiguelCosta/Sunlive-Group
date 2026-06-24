// src/brands/hotel/pages/FacilitiesLeisure/index.jsx
// Estalagem de Sangalhos — Facilities & Leisure

import styles from "../../layouts/HotelPageLayout.module.css";

import FacilitiesLeisureSection from "./sections/FacilitiesLeisure/index.jsx";
import WellBeingSection from "./sections/WellBeing/index.jsx";
import MobilitySection from "./sections/Mobility/index.jsx";
import AccessibilitySection from "./sections/accessibility/index.jsx";
import ComplementaryServicesSection from "./sections/ComplementaryServices/index.jsx";
import ReceptionSupportSection from "./sections/ReceptionSupport/index.jsx";

export default function FacilitiesLeisurePageHotel() {
  return (
    <div className={styles.pageWrap} data-brand="hotel">
      <section
        id="facilities-page"
        className={styles.inner}
        aria-label="Estalagem de Sangalhos — Facilities & Leisure"
      >
        <div className={styles.contentFlow}>
          <FacilitiesLeisureSection />
          <WellBeingSection />
          <MobilitySection />
          <AccessibilitySection />
          <ComplementaryServicesSection />
          <ReceptionSupportSection />
        </div>
      </section>
    </div>
  );
}
