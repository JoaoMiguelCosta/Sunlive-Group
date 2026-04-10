import styles from "../../layouts/TravelPageLayout.module.css";

import PartnerHotelsSection from "./sections/PartnerHotels/index.jsx";
import TravelPartnersSection from "./sections/TravelPartners/index.jsx";

export default function PartnersPage() {
  return (
    <div className={styles.pageWrap} data-brand="travel">
      <main
        id="partners"
        className={styles.inner}
        role="region"
        aria-label="Sunlive Travel — Parceiros"
      >
        <div className={styles.contentFlow}>
          <PartnerHotelsSection />
          <TravelPartnersSection />
        </div>
      </main>
    </div>
  );
}
