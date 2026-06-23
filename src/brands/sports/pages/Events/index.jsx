import events from "../../config/pages/events.js";

import styles from "../../layouts/SportsPageLayout.module.css";

import SportsHeroIntro from "../../shared/ui/SportsHeroIntro/index.jsx";
import SportsClosingCTA from "../../shared/ui/SportsClosingCTA/index.jsx";

import EventsOverviewSection from "./sections/EventsOverviewSection/index.jsx";
import EventsOperatingModelSection from "./sections/EventsOperatingModelSection/index.jsx";
import EventsModalitiesSection from "./sections/EventsModalitiesSection/index.jsx";

export default function EventsPage() {
  const data = events;
  const sections = data?.sections;

  if (!sections) return null;

  return (
    <div className={styles.pageWrap} data-brand="sports">
      <main
        id={data?.id || "sports-events"}
        className={styles.inner}
        aria-label={data?.ui?.pageAriaLabel || "Sunlive Sports — Eventos"}
      >
        <div className={styles.contentFlow}>
          <header>
            <SportsHeroIntro
              id={sections.hero?.id || "events-hero"}
              eyebrow={sections.hero?.eyebrow}
              secondaryLine={sections.hero?.secondaryLine}
              title={sections.hero?.title}
              description={sections.hero?.description}
              supportingText={sections.hero?.supportingText}
              proofPoints={sections.hero?.proofPoints}
              stats={sections.hero?.stats}
              ui={sections.hero?.ui}
            />
          </header>

          <div className={styles.sections}>
            <EventsOverviewSection data={sections.operationalOverview} />

            <EventsOperatingModelSection data={sections.operatingModel} />

            <EventsModalitiesSection data={sections.featuredModalities} />

            <SportsClosingCTA data={sections.cta} />
          </div>
        </div>
      </main>
    </div>
  );
}
