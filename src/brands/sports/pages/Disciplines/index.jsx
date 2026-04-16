import styles from "../../layouts/SportsPageLayout.module.css";

import sportsBrand from "../../config/index.js";

import HeadlineBlock from "../../../../shared/components/HeadlineBlock/index.jsx";

import OverviewSection from "./sections/OverviewSection.jsx";
import DisciplinesClosingPanel from "./sections/DisciplinesClosingPanel.jsx";

import CyclingHighlightSection from "./sections/CyclingHighlightSection.jsx";
import CyclingDisciplinesSection from "./sections/CyclingDisciplinesSection.jsx";
import CyclingProjectsSection from "./sections/CyclingProjectsSection.jsx";

import GymnasticsDisciplinesSection from "./sections/GymnasticsDisciplinesSection.jsx";
import GymnasticsProjectsSection from "./sections/GymnasticsProjectsSection.jsx";

import FootballProjectsSection from "./sections/FootballProjectsSection.jsx";
import KarateProjectsSection from "./sections/KarateProjectsSection.jsx";
import BasketballProjectsSection from "./sections/BasketballProjectsSection.jsx";

export default function DisciplinesPage() {
  const data = sportsBrand.sections?.disciplines;
  if (!data) return null;

  const academiesData = sportsBrand.sections?.academies;

  return (
    <div className={styles.pageWrap} data-brand="sports">
      <main
        id="sports-disciplines"
        className={styles.inner}
        role="region"
        aria-label="Sunlive Sports — Modalidades"
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

            {data.cyclingIntro ? (
              <>
                <section
                  className={styles.heroSection}
                  aria-label={data.cyclingIntro.title}
                >
                  <HeadlineBlock
                    theme="sports"
                    variant="banded"
                    align="center"
                    max="lg"
                    title={data.cyclingIntro.title}
                    lead={data.cyclingIntro.lead}
                  />
                </section>

                <CyclingHighlightSection data={data.cyclingHighlight} />
                <CyclingDisciplinesSection data={data.cyclingDisciplines} />
                <CyclingProjectsSection data={data.cyclingProjects} />
              </>
            ) : null}

            {data.gymnasticsIntro ? (
              <>
                <section
                  className={styles.heroSection}
                  aria-label={data.gymnasticsIntro.title}
                >
                  <HeadlineBlock
                    theme="sports"
                    variant="banded"
                    align="center"
                    max="lg"
                    title={data.gymnasticsIntro.title}
                    lead={data.gymnasticsIntro.lead}
                  />
                </section>

                <GymnasticsDisciplinesSection
                  data={data.gymnasticsDisciplines}
                />
                <GymnasticsProjectsSection
                  cardsData={academiesData}
                  sectionData={data.gymnasticsIntro}
                />
              </>
            ) : null}

            {data.footballIntro ? (
              <>
                <section
                  className={styles.heroSection}
                  aria-label={data.footballIntro.title}
                >
                  <HeadlineBlock
                    theme="sports"
                    variant="banded"
                    align="center"
                    max="lg"
                    title={data.footballIntro.title}
                    lead={data.footballIntro.lead}
                  />
                </section>

                <FootballProjectsSection
                  cardsData={academiesData}
                  sectionData={data.footballIntro}
                />
              </>
            ) : null}

            {data.karateIntro ? (
              <>
                <section
                  className={styles.heroSection}
                  aria-label={data.karateIntro.title}
                >
                  <HeadlineBlock
                    theme="sports"
                    variant="banded"
                    align="center"
                    max="lg"
                    title={data.karateIntro.title}
                    lead={data.karateIntro.lead}
                  />
                </section>

                <KarateProjectsSection
                  cardsData={academiesData}
                  sectionData={data.karateIntro}
                />
              </>
            ) : null}

            {data.basketballIntro ? (
              <>
                <section
                  className={styles.heroSection}
                  aria-label={data.basketballIntro.title}
                >
                  <HeadlineBlock
                    theme="sports"
                    variant="banded"
                    align="center"
                    max="lg"
                    title={data.basketballIntro.title}
                    lead={data.basketballIntro.lead}
                  />
                </section>

                <BasketballProjectsSection
                  cardsData={academiesData}
                  sectionData={data.basketballIntro}
                />
              </>
            ) : null}

            <DisciplinesClosingPanel data={data} />
          </div>
        </div>
      </main>
    </div>
  );
}
