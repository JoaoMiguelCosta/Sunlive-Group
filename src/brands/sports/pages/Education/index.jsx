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
          <OverviewSection data={data} />
          <EducationClosingPanel data={data} />
        </div>
      </main>
    </div>
  );
}
