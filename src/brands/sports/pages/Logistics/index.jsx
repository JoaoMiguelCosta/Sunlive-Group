// src/brands/sports/pages/Logistics/index.jsx
import styles from "./Logistics.module.css";

import sportsBrand from "../../config/registry/index.js";

import HeadlineBlock from "../../../../shared/components/HeadlineBlock/index.jsx";
import OverviewSection from "./sections/OverviewSection.jsx";
import LogisticsServicesSection from "./sections/LogisticsServicesSection.jsx";
import LogisticsClosingPanel from "./sections/LogisticsClosingPanel.jsx";

/**
 * Página Logística — Sunlive Sports
 */
export default function LogisticsPage() {
  const data = sportsBrand.sections?.logistics;
  if (!data) return null;

  return (
    <div className={styles.pageWrap} data-brand="sports">
      <main className={styles.inner} aria-label="Sunlive Sports — Logística">
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

          {data.servicesIntro && (
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
          )}

          <LogisticsServicesSection data={data} iconSet={sportsBrand.icons} />
          <LogisticsClosingPanel data={data} />
        </div>
      </main>
    </div>
  );
}
