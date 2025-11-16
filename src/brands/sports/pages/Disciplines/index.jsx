// src/brands/sports/pages/Disciplines/index.jsx
import styles from "./Disciplines.module.css";

import sportsBrand from "../../configSports.jsx";

import HeadlineBlock from "../../../../shared/components/HeadlineBlock/index.jsx";
import OverviewSection from "./OverviewSection.jsx";
import DisciplinesClosingPanel from "./DisciplinesClosingPanel.jsx";

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
          )}

          {/* 3) Ginástica */}
          {data.gymnasticsIntro && (
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
          )}

          {/* 4) Futebol */}
          {data.footballIntro && (
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
          )}

          {/* 5) Karaté */}
          {data.karateIntro && (
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
          )}

          {/* 6) Basquetebol */}
          {data.basketballIntro && (
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
          )}

          {/* 7) Outras Modalidades */}
          {data.otherDisciplinesIntro && (
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
          )}

          {/* 8) Painel de fecho / transição para Infraestruturas */}
          <DisciplinesClosingPanel data={data} />
        </div>
      </main>
    </div>
  );
}
