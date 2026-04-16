import styles from "../../layouts/SportsPageLayout.module.css";

import sportsBrand from "../../config/index.js";

import HeadlineBlock from "../../../../shared/components/HeadlineBlock/index.jsx";
import OverviewSection from "./sections/OverviewSection.jsx";
import AreasSection from "./sections/AreasSection.jsx";
import SpecialisedServicesClosingPanel from "./sections/SpecialisedServicesClosingPanel.jsx";

export default function SpecialisedServicesPage() {
  const data = sportsBrand.sections?.specialisedServices;
  if (!data) return null;

  return (
    <div className={styles.pageWrap} data-brand="sports">
      <main
        id="sports-specialised-services"
        className={styles.inner}
        role="region"
        aria-label="Sunlive Sports — Serviços Especializados"
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

            {data.areasIntro ? (
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
            ) : null}

            <AreasSection data={data} />
            <SpecialisedServicesClosingPanel data={data} />
          </div>
        </div>
      </main>
    </div>
  );
}
