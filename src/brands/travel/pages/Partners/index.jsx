import { useEffect } from "react";

import partners from "../../config/pages/partners.js";
import styles from "../../layouts/TravelPageLayout.module.css";

import PartnerHotelsSection from "./sections/PartnerHotels/index.jsx";
import TravelPartnersSection from "./sections/TravelPartners/index.jsx";
import PartnersActionPanelSection from "./sections/PartnersActionPanel/index.jsx";

export default function PartnersPage() {
  useEffect(() => {
    document.documentElement.setAttribute("data-page-theme", "light-forest");

    return () => {
      document.documentElement.removeAttribute("data-page-theme");
    };
  }, []);

  return (
    <div className={styles.pageWrap} data-brand="travel">
      <main
        id={partners.id}
        className={styles.inner}
        aria-label={partners.ui.pageAriaLabel}
      >
        <div className={styles.contentFlow}>
          <PartnerHotelsSection />
          <TravelPartnersSection />
          <PartnersActionPanelSection />
        </div>
      </main>
    </div>
  );
}
