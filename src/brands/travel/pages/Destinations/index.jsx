import styles from "../../layouts/TravelPageLayout.module.css";

import DomesticDestinationsSection from "./sections/DomesticDestinations/index.jsx";
import InternationalDestinationsSection from "./sections/InternationalDestinations/index.jsx";
import DestinationsActionPanelSection from "./sections/DestinationsActionPanel/index.jsx";

export default function DestinationsPage() {
  return (
    <div className={styles.pageWrap} data-brand="travel">
      <main
        id="destinations"
        className={styles.inner}
        aria-label="Sunlive Travel — Destinos"
      >
        <div className={styles.contentFlow}>
          <DomesticDestinationsSection />
          <InternationalDestinationsSection />
          <DestinationsActionPanelSection />
        </div>
      </main>
    </div>
  );
}
