// src/brands/sports/pages/TrainingCampsPage.jsx
import styles from "./TrainingCamps.module.css";

import sportsBrand from "../../configSports.jsx";

import HeadlineBlock from "../../../../shared/components/HeadlineBlock/index.jsx";
import OverviewSection from "./OverviewSection.jsx";
import ProgramsSection from "./ProgramsSection.jsx";
import TrainingCampsClosingPanel from "./TrainingCampsClosingPanel.jsx";



/**
 * Página Training Camps — Sunlive Sports
 * Layout alinhado ao sistema Prestige Noir + Liquid Gold + Sports verde-vital.
 */
export default function TrainingCampsPage() {
  const data = sportsBrand.sections?.trainingCamps;
  if (!data) return null;

  return (
    <div className={styles.pageWrap} data-brand="sports">
      <main
        className={styles.inner}
        aria-label="Sunlive Sports — Training Camps"
      >
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
          {/* 1) Soluções + foto + barra de pilares */}
          <OverviewSection data={data} />

          {/* 2) Programas (4 blocos) */}
          <ProgramsSection data={data} />
          <TrainingCampsClosingPanel data={data} />
        </div>
      </main>
    </div>
  );
}
