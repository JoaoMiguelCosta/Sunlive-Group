// src/brands/sports/pages/Education/index.jsx
import styles from "./Education.module.css";

import sportsBrand from "../../configSports.jsx";

import HeadlineBlock from "../../../../shared/components/HeadlineBlock/index.jsx";
import OverviewSection from "./OverviewSection.jsx";
import EducationClosingPanel from "./EducationClosingPanel.jsx";

/**
 * Página Educação — Sunlive Sports
 * Layout alinhado ao sistema Prestige Noir + Liquid Gold + Sports verde-vital.
 */
export default function EducationPage() {
  const data = sportsBrand.sections?.education;
  if (!data) return null;

  return (
    <div className={styles.pageWrap} data-brand="sports">
      <main className={styles.inner} aria-label="Sunlive Sports — Educação">
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

          {/* 2) Níveis de Ensino */}
          {data.levelsIntro && (
            <section
              className={styles.heroSection}
              aria-label={data.levelsIntro.title}
            >
              <HeadlineBlock
                theme="sports"
                variant="banded"
                align="center"
                max="lg"
                title={data.levelsIntro.title}
                lead={data.levelsIntro.lead}
              />
            </section>
          )}

          {/* 3) Ensino Bilingue */}
          {data.bilingualIntro && (
            <section
              className={styles.heroSection}
              aria-label={data.bilingualIntro.title}
            >
              <HeadlineBlock
                theme="sports"
                variant="banded"
                align="center"
                max="lg"
                title={data.bilingualIntro.title}
                lead={data.bilingualIntro.lead}
              />
            </section>
          )}

          {/* 4) Percursos Profissionais */}
          {data.careersIntro && (
            <section
              className={styles.heroSection}
              aria-label={data.careersIntro.title}
            >
              <HeadlineBlock
                theme="sports"
                variant="banded"
                align="center"
                max="lg"
                title={data.careersIntro.title}
                lead={data.careersIntro.lead}
              />
            </section>
          )}

          {/* 5) Painel de fecho */}
          <EducationClosingPanel data={data} />
        </div>
      </main>
    </div>
  );
}
