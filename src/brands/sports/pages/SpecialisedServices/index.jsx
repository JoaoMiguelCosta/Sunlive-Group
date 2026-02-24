// src/brands/sports/pages/SpecialisedServices/index.jsx
import styles from "./SpecialisedServices.module.css";

import sportsBrand from "../../brand/configSports.js";

import HeadlineBlock from "../../../../shared/components/HeadlineBlock/index.jsx";
import OverviewSection from "./sections/OverviewSection.jsx";
import AreasSection from "./sections/AreasSection.jsx";
import SpecialisedServicesClosingPanel from "./sections/SpecialisedServicesClosingPanel.jsx";

/**
 * Página Serviços Especializados — Sunlive Sports
 */
export default function SpecialisedServicesPage() {
  const data = sportsBrand.sections?.specialisedServices;
  if (!data) return null;

  return (
    <div className={styles.pageWrap} data-brand="sports">
      <main
        className={styles.inner}
        aria-label="Sunlive Sports — Serviços Especializados"
      >
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

          {data.areasIntro && (
            <section
              className={styles.heroSection}
              aria-label={data.areasIntro?.title || "Áreas de Especialização"}
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
          )}

          <AreasSection data={data} />
          <SpecialisedServicesClosingPanel data={data} />
        </div>
      </main>
    </div>
  );
}
