import styles from "../../layouts/SportsPageLayout.module.css";

import sportsBrand from "../../config/index.js";

import SportsHeroIntro from "../../shared/ui/SportsHeroIntro/index.jsx";
import SportsClosingCTA from "../../shared/ui/SportsClosingCTA/index.jsx";

import ConsultancyAreasSection from "./sections/ConsultancyAreasSection/index.jsx";
import ConsultancyEntitiesSection from "./sections/ConsultancyEntitiesSection/index.jsx";

import useScrollToHash from "../../../../shared/hooks/useScrollToHash.js";

export default function ConsultancyPage() {
  useScrollToHash(96);

  const data = sportsBrand.pages?.consultancy;
  const sections = data?.sections;

  if (!sections) return null;

  return (
    <div className={styles.pageWrap} data-brand="sports">
      <main
        id="sports-consultancy"
        className={styles.inner}
        role="region"
        aria-label="Sunlive Sports — Consultoria"
      >
        <div className={styles.contentFlow}>
          <header className={styles.heroSection}>
            <SportsHeroIntro
              id={sections.hero?.id}
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
            <ConsultancyEntitiesSection data={sections.consultancyEntities} />
            <ConsultancyAreasSection data={sections.consultancyAreas} />
            <SportsClosingCTA data={sections.cta} />
          </div>
        </div>
      </main>
    </div>
  );
}
