import styles from "../../layouts/SportsPageLayout.module.css";
import sportsBrand from "../../config/index.js";

import SportsHeroIntro from "../../shared/ui/SportsHeroIntro/index.jsx";
import EventsOverviewSection from "./sections/EventsOverviewSection/index.jsx";
import EventsModalitiesSection from "./sections/EventsModalitiesSection/index.jsx";
import EventsOperatingModelSection from "./sections/EventsOperatingModelSection/index.jsx";
import SportsClosingCTA from "../../shared/ui/SportsClosingCTA/index.jsx";

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
            <SportsHeroIntro
              id="events-hero"
              eyebrow={data.hero?.eyebrow}
              secondaryLine={data.hero?.secondaryLine}
              title={data.hero?.title}
              description={data.hero?.description}
              supportingText={data.hero?.supportingText}
              proofPoints={data.hero?.proofPoints}
              stats={data.hero?.stats}
              ui={data.hero?.ui}
            />
          </header>

          <div className={styles.sections}>
            <EventsOverviewSection data={data.operationalOverview} />
            <EventsModalitiesSection data={data.featuredModalities} />
            <EventsOperatingModelSection data={data.operatingModel} />
            <SportsClosingCTA data={data.cta} />
          </div>
        </div>
      </main>
    </div>
  );
}
