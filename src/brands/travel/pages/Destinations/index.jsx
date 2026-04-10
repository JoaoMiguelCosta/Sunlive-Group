import styles from "../../layouts/TravelPageLayout.module.css";

import DomesticDestinationsSection from "./sections/DomesticDestinations/index.jsx";
import InternationalDestinationsSection from "./sections/InternationalDestinations/index.jsx";

export default function DestinationsPage() {
  return (
    <div className={styles.pageWrap} data-brand="travel">
      <main
        id="destinations"
        className={styles.inner}
        role="region"
        aria-label="Sunlive Travel — Destinos"
      >
        <div className={styles.contentFlow}>
          <DomesticDestinationsSection />
          <InternationalDestinationsSection />
        </div>
      </main>
    </div>
  );
}
