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
          <OverviewSection data={data} />

          {/* Painel de fecho / transição para Infraestruturas */}
          <DisciplinesClosingPanel data={data} />
        </div>
      </main>
    </div>
  );
}
