// src/brands/sports/pages/Disciplines/index.jsx
import styles from "./Disciplines.module.css";

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

import OtherDisciplinesSection from "./sections/OtherDisciplinesSection.jsx";

/**
 * Página Modalidades — Sunlive Sports
 * Mesmo layout base das outras páginas Sports.
 */
export default function DisciplinesPage() {
  const data = sportsBrand.sections?.disciplines;
  if (!data) return null;

  return (
    <div className={styles.pageWrap} data-brand="sports">
      <main className={styles.inner} aria-label="Sunlive Sports — Modalidades">
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

          {/* 2) Ciclismo */}
          {data.cyclingIntro && (
            <>
              <section
                className={styles.heroSection}
                aria-label={data.cyclingIntro?.title}
              >
                <HeadlineBlock
                  theme="sports"
                  variant="banded"
                  align="center"
                  max="lg"
                  title={data.cyclingIntro?.title}
                  lead={data.cyclingIntro?.lead}
                />
              </section>

              <CyclingHighlightSection data={data} />
              <CyclingDisciplinesSection data={data} />
              <CyclingProjectsSection data={data} />
            </>
          )}

          {/* 3) Ginástica */}
          {data.gymnasticsIntro && (
            <>
              <section
                className={styles.heroSection}
                aria-label={data.gymnasticsIntro?.title}
              >
                <HeadlineBlock
                  theme="sports"
                  variant="banded"
                  align="center"
                  max="lg"
                  title={data.gymnasticsIntro?.title}
                  lead={data.gymnasticsIntro?.lead}
                />
              </section>

              <GymnasticsDisciplinesSection data={data} />
              <GymnasticsProjectsSection data={data} />
            </>
          )}

          {/* 4) Futebol */}
          {data.footballIntro && (
            <>
              <section
                className={styles.heroSection}
                aria-label={data.footballIntro?.title}
              >
                <HeadlineBlock
                  theme="sports"
                  variant="banded"
                  align="center"
                  max="lg"
                  title={data.footballIntro?.title}
                  lead={data.footballIntro?.lead}
                />
              </section>

              <FootballProjectsSection />
            </>
          )}

          {/* 5) Karaté */}
          {data.karateIntro && (
            <>
              <section
                className={styles.heroSection}
                aria-label={data.karateIntro?.title}
              >
                <HeadlineBlock
                  theme="sports"
                  variant="banded"
                  align="center"
                  max="lg"
                  title={data.karateIntro?.title}
                  lead={data.karateIntro?.lead}
                />
              </section>

              <KarateProjectsSection />
            </>
          )}

          {/* 6) Basquetebol */}
          {data.basketballIntro && (
            <>
              <section
                className={styles.heroSection}
                aria-label={data.basketballIntro?.title}
              >
                <HeadlineBlock
                  theme="sports"
                  variant="banded"
                  align="center"
                  max="lg"
                  title={data.basketballIntro?.title}
                  lead={data.basketballIntro?.lead}
                />
              </section>

              <BasketballProjectsSection />
            </>
          )}

          {/* 7) Outras Modalidades */}
          {data.otherDisciplinesIntro && (
            <>
              <section
                className={styles.heroSection}
                aria-label={data.otherDisciplinesIntro?.title}
              >
                <HeadlineBlock
                  theme="sports"
                  variant="banded"
                  align="center"
                  max="lg"
                  title={data.otherDisciplinesIntro?.title}
                  lead={data.otherDisciplinesIntro?.lead}
                />
              </section>

              <OtherDisciplinesSection />
            </>
          )}

          <DisciplinesClosingPanel data={data} />
        </div>
      </main>
    </div>
  );
}
