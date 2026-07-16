import destinations from "../../config/pages/destinations.js";
import styles from "../../layouts/TravelPageLayout.module.css";

import DestinationsHighlightSection from "./sections/DestinationsHighlight/index.jsx";
import DomesticDestinationsSection from "./sections/DomesticDestinations/index.jsx";
import InternationalDestinationsSection from "./sections/InternationalDestinations/index.jsx";
import DestinationsActionPanelSection from "./sections/DestinationsActionPanel/index.jsx";

export default function DestinationsPage() {
  return (
    <div className={styles.pageWrap} data-brand="travel">
      <main
        id={destinations.id}
        className={styles.inner}
        aria-label={destinations.ui.pageAriaLabel}
      >
        <div className={styles.contentFlow}>
          <DestinationsHighlightSection />
          <DomesticDestinationsSection />
          <InternationalDestinationsSection />
          <DestinationsActionPanelSection />
        </div>
      </main>
    </div>
  );
}
