import styles from "../../layouts/SportsPageLayout.module.css";

import sportsBrand from "../../config/index.js";

import HeadlineBlock from "../../../../shared/components/HeadlineBlock/index.jsx";
import OverviewSection from "./sections/OverviewSection.jsx";
import LogisticsServicesSection from "./sections/LogisticsServicesSection.jsx";
import LogisticsClosingPanel from "./sections/LogisticsClosingPanel.jsx";

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
            <LogisticsClosingPanel data={data} />
          </div>
        </div>
      </main>
    </div>
  );
}
