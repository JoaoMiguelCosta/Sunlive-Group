import styles from "../../layouts/SportsPageLayout.module.css";

import sportsBrand from "../../config/index.js";

import HeadlineBlock from "../../../../shared/components/HeadlineBlock/index.jsx";

import OverviewSection from "./sections/OverviewSection.jsx";
import LeisureExperiencesGrid from "./sections/LeisureExperiencesGrid.jsx";
import LeisureDestinationsGrid from "./sections/LeisureDestinationsGrid.jsx";
import LeisureBenefitsGrid from "./sections/LeisureBenefitsGrid.jsx";
import LeisureSportsTourismClosingPanel from "./sections/LeisureSportsTourismClosingPanel.jsx";

export default function LeisureSportsTourismPage() {
  const data = sportsBrand.sections?.leisureSportsTourism;
  if (!data) return null;

  return (
    <div className={styles.pageWrap} data-brand="sports">
      <main
        id="sports-leisure-sports-tourism"
        className={styles.inner}
        role="region"
        aria-label="Sunlive Sports — Turismo Desportivo Lúdico"
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

            {data.experiencesIntro ? (
              <>
                <section
                  className={styles.heroSection}
                  aria-label={data.experiencesIntro?.title}
                >
                  <HeadlineBlock
                    theme="sports"
                    variant="banded"
                    align="center"
                    max="lg"
                    title={data.experiencesIntro?.title}
                    lead={data.experiencesIntro?.lead}
                  />
                </section>

                {data.leisureExperiences ? (
                  <LeisureExperiencesGrid data={data.leisureExperiences} />
                ) : null}
              </>
            ) : null}

            {data.destinationsIntro ? (
              <>
                <section
                  className={styles.heroSection}
                  aria-label={data.destinationsIntro?.title}
                >
                  <HeadlineBlock
                    theme="sports"
                    variant="banded"
                    align="center"
                    max="lg"
                    title={data.destinationsIntro?.title}
                    lead={data.destinationsIntro?.lead}
                  />
                </section>

                {data.leisureDestinations ? (
                  <LeisureDestinationsGrid data={data.leisureDestinations} />
                ) : null}
              </>
            ) : null}

            {data.benefitsIntro ? (
              <>
                <section
                  id={data.benefitsIntro?.id}
                  className={styles.heroSection}
                  aria-label={data.benefitsIntro?.title}
                >
                  <HeadlineBlock
                    theme="sports"
                    variant="banded"
                    align="center"
                    max="lg"
                    title={data.benefitsIntro?.title}
                    lead={data.benefitsIntro?.lead}
                  />
                </section>

                <LeisureBenefitsGrid
                  data={data.benefitsIntro}
                  iconSet={sportsBrand.icons}
                />
              </>
            ) : null}

            <LeisureSportsTourismClosingPanel data={data} />
          </div>
        </div>
      </main>
    </div>
  );
}
