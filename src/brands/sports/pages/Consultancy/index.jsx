import styles from "../../layouts/SportsPageLayout.module.css";

import sportsBrand from "../../config/index.js";

import SportsHeroIntro from "../../shared/ui/SportsHeroIntro/index.jsx";
import HeadlineBlock from "../../shared/ui/HeadlineBlock/index.jsx";
import OverviewSection from "./sections/OverviewSection.jsx";
import ConsultancyEntitiesSection from "./sections/ConsultancyEntitiesSection.jsx";
import ConsultancyAreasSection from "./sections/ConsultancyAreasSection.jsx";

import useScrollToHash from "../../../../shared/hooks/useScrollToHash.js";

export default function ConsultancyPage() {
  useScrollToHash(96);

  const data = sportsBrand.sections?.consultancy;
  if (!data) return null;

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
              id="consultancy-hero"
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
            <OverviewSection data={data} />

            {data.entities ? <ConsultancyEntitiesSection data={data} /> : null}

            {data.areasIntro ? (
              <section
                className={styles.heroSection}
                aria-label={data.areasIntro?.title}
              >
                <HeadlineBlock
                  theme="sports"
                  variant="banded"
                  align="center"
                  max="lg"
                  title={data.areasIntro?.title}
                  lead={data.areasIntro?.lead}
                />
              </section>
            ) : null}

            <ConsultancyAreasSection data={data} />
           
          </div>
        </div>
      </main>
    </div>
  );
}
