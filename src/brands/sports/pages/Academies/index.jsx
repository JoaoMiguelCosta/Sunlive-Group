// src/brands/sports/pages/Academies/index.jsx
import styles from "./Academies.module.css";

import sportsBrand from "../../brand/configSports.js";

import HeadlineBlock from "../../../../shared/components/HeadlineBlock/index.jsx";
import OverviewSection from "./sections/OverviewSection.jsx";
import AcademiesCardsSection from "./sections/AcademiesCardsSection.jsx";
import AcademiesClosingPanel from "./sections/AcademiesClosingPanel.jsx";

/**
 * Página Academias — Sunlive Sports
 * Layout alinhado ao sistema Prestige Noir + Liquid Gold + Sports verde-vital.
 */
export default function AcademiesPage() {
  const data = sportsBrand.sections?.academies;
  if (!data) return null;

  return (
    <div className={styles.pageWrap} data-brand="sports">
      <main className={styles.inner} aria-label="Sunlive Sports — Academias">
        {/* Hero / faixa inicial */}
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

        {/* Conteúdo principal */}
        <div className={styles.sections}>
          <OverviewSection data={data} />
          <AcademiesCardsSection data={data} />
          <AcademiesClosingPanel data={data} />
        </div>
      </main>
    </div>
  );
}
