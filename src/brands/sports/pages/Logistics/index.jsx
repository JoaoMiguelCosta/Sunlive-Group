import styles from "../../layouts/SportsPageLayout.module.css";

import sportsBrand from "../../config/index.js";

import SportsHeroIntro from "../../shared/ui/SportsHeroIntro/index.jsx";
import HeadlineBlock from "../../shared/ui/HeadlineBlock/index.jsx";
import OverviewSection from "./sections/OverviewSection.jsx";
import LogisticsServicesSection from "./sections/LogisticsServicesSection.jsx";


export default function LogisticsPage() {
  const data = sportsBrand.sections?.logistics;
  if (!data) return null;

  return (
    <div className={styles.pageWrap} data-brand="sports">
      <main
        id="sports-logistics"
        className={styles.inner}
        role="region"
        aria-label="Sunlive Sports — Logística"
      >
        <div className={styles.contentFlow}>
          <header className={styles.heroSection}>
            <SportsHeroIntro
              id="logistics-hero"
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

            {data.servicesIntro ? (
              <section
                className={styles.heroSection}
                aria-label={data.servicesIntro?.title}
              >
                <HeadlineBlock
                  theme="sports"
                  variant="banded"
                  align="center"
                  max="lg"
                  title={data.servicesIntro?.title}
                  lead={data.servicesIntro?.lead}
                />
              </section>
            ) : null}

            <LogisticsServicesSection data={data} iconSet={sportsBrand.icons} />
            
          </div>
        </div>
      </main>
    </div>
  );
}
