// src/brands/sports/pages/Disciplines/index.jsx
import styles from "./Disciplines.module.css";

import sportsBrand from "../../configSports.jsx";

import HeadlineBlock from "../../../../shared/components/HeadlineBlock/index.jsx";
import OverviewSection from "./OverviewSection.jsx";
import DisciplinesClosingPanel from "./DisciplinesClosingPanel.jsx";
import CyclingHighlightSection from "./CyclingHighlightSection.jsx";
import CyclingDisciplinesSection from "./CyclingDisciplinesSection.jsx";
import CyclingProjectsSection from "./CyclingProjectsSection.jsx";
import GymnasticsDisciplinesSection from "./GymnasticsDisciplinesSection.jsx";
import GymnasticsProjectsSection from "./GymnasticsProjectsSection.jsx";
import FootballProjectsSection from "./FootballProjectsSection.jsx";
import KarateProjectsSection from "./KarateProjectsSection.jsx";
import BasketballProjectsSection from "./BasketballProjectsSection.jsx";
import OtherDisciplinesSection from "./OtherDisciplinesSection.jsx";

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
        {/* Hero / faixa inicial */}
        <header className={styles.heroSection}>
          <HeadlineBlock
            theme="sports"
            variant="banded"
            align="center"
            max="lg"
            title={data.hero.title}
            lead={data.hero.description}
          />
        </header>

        {/* Conteúdo principal */}
        <div className={styles.sections}>
          {/* 1) Bloco texto + imagem */}
          <OverviewSection data={data} />

          {/* 2) Ciclismo */}
          {data.cyclingIntro && (
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

              {/* Card “Explore o Universo Ciclismo Sunlive” */}
              <CyclingHighlightSection data={data} />

              {/* Grelha das disciplinas de Ciclismo (Estrada, BTT, BMX, Pista, Trial) */}
              <CyclingDisciplinesSection data={data} />

              {/* Projetos de Ciclismo (ACA, Aero Edge, TFP) */}
              <CyclingProjectsSection data={data} />
            </>
          )}

          {/* 3) Ginástica */}
          {data.gymnasticsIntro && (
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

              {/* Disciplinas de Ginástica (9 cards em grelha) */}
              <GymnasticsDisciplinesSection data={data} />

              {/* Projetos de Ginástica (Academias ligadas à ginástica) */}
              <GymnasticsProjectsSection />
            </>
          )}

          {/* 4) Futebol */}
          {data.footballIntro && (
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

              {/* Projetos de Futebol (Pro Football Academy, etc.) */}
              <FootballProjectsSection />
            </>
          )}

          {/* 5) Karaté */}
          {data.karateIntro && (
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

              {/* Projetos de Karaté (Sunlive Karate Academy) */}
              <KarateProjectsSection />
            </>
          )}

          {/* 6) Basquetebol */}
          {data.basketballIntro && (
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

              {/* Projetos de Basquetebol (Academia Basquetebol Sunlive) */}
              <BasketballProjectsSection />
            </>
          )}

          {/* 7) Outras Modalidades */}
          {data.otherDisciplinesIntro && (
            <>
              <section
                className={styles.heroSection}
                aria-label={data.otherDisciplinesIntro.title}
              >
                <HeadlineBlock
                  theme="sports"
                  variant="banded"
                  align="center"
                  max="lg"
                  title={data.otherDisciplinesIntro.title}
                  lead={data.otherDisciplinesIntro.lead}
                />
              </section>

              <OtherDisciplinesSection />
            </>
          )}

          {/* 8) Painel de fecho / transição para Infraestruturas */}
          <DisciplinesClosingPanel data={data} />
        </div>
      </main>
    </div>
  );
}
