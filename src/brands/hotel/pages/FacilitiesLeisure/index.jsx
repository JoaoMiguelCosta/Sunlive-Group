// src/brands/hotel/pages/FacilitiesLeisure/index.jsx
// Estalagem de Sangalhos — Facilities & Leisure

import facilitiesLeisurePage from "../../config/pages/facilitiesLeisure.js";
import styles from "../../layouts/HotelPageLayout.module.css";

import FacilitiesLeisureSection from "./sections/FacilitiesLeisure/index.jsx";
import WellBeingSection from "./sections/WellBeing/index.jsx";
import MobilitySection from "./sections/Mobility/index.jsx";
import AccessibilitySection from "./sections/Accessibility/index.jsx";
import ComplementaryServicesSection from "./sections/ComplementaryServices/index.jsx";
import ReceptionSupportSection from "./sections/ReceptionSupport/index.jsx";

export default function FacilitiesLeisurePageHotel() {
  return (
    <div className={styles.pageWrap} data-brand="hotel">
      <section
        id={facilitiesLeisurePage.id}
        className={styles.inner}
        aria-label={facilitiesLeisurePage.ui.pageAriaLabel}
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
