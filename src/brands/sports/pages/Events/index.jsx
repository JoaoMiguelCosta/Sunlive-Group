// src/brands/sports/pages/Events/index.jsx
import styles from "./Events.module.css";

import sportsBrand from "../../brand/configSports.js";

import HeadlineBlock from "../../../../shared/components/HeadlineBlock/index.jsx";
import OverviewSection from "./sections/OverviewSection.jsx";
import EventsClosingPanel from "./sections/EventsClosingPanel.jsx";

/**
 * Página Eventos — Sunlive Sports
 * Layout alinhado ao sistema Prestige Noir + Liquid Gold + Sports verde-vital.
 */
export default function EventsPage() {
  const data = sportsBrand.sections?.events;
  if (!data) return null;

  return (
    <div className={styles.pageWrap} data-brand="sports">
      <main className={styles.inner} aria-label="Sunlive Sports — Eventos">
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
      </main>
    </div>
  );
}
