import styles from "../../layouts/SportsPageLayout.module.css";
import sportsBrand from "../../config/index.js";

import HeadlineBlock from "../../../../shared/components/HeadlineBlock/index.jsx";
import OverviewSection from "./sections/OverviewSection.jsx";
import EventsClosingPanel from "./sections/EventsClosingPanel.jsx";

export default function EventsPage() {
  const data = sportsBrand.sections?.events;
  if (!data) return null;

  return (
    <div className={styles.pageWrap} data-brand="sports">
      <main
        id="sports-events"
        className={styles.inner}
        role="region"
        aria-label="Sunlive Sports — Eventos"
      >
        <div className={styles.contentFlow}>
          <header className={styles.heroSection}>
            <HeadlineBlock
              theme="sports"
              variant="banded"
              align="center"
              max="lg"
              title={data.hero?.title}
              lead={data.hero?.description}
            />
          </header>

          <div className={styles.sections}>
            <OverviewSection data={data} />
            <EventsClosingPanel data={data} />
          </div>
        </div>
      </main>
    </div>
  );
}
