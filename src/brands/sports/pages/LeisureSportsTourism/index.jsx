// src/brands/sports/pages/LeisureSportsTourism/index.jsx
import styles from "./LeisureSportsTourism.module.css";

import sportsBrand from "../../configSports.jsx";

import HeadlineBlock from "../../../../shared/components/HeadlineBlock/index.jsx";
import OverviewSection from "./OverviewSection.jsx";
import LeisureSportsTourismClosingPanel from "./LeisureSportsTourismClosingPanel.jsx";

/**
 * Página Turismo Desportivo Lúdico — Sunlive Sports
 * Layout alinhado ao sistema Prestige Noir + Liquid Gold + Sports verde-vital.
 */
export default function LeisureSportsTourismPage() {
  const data = sportsBrand.sections?.leisureSportsTourism;
  if (!data) return null;

  return (
    <div className={styles.pageWrap} data-brand="sports">
      <main
        className={styles.inner}
        aria-label="Sunlive Sports — Turismo Desportivo Lúdico"
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
          {/* 1) Bloco texto + foto + pills */}
          <OverviewSection data={data} />

          {/* 2) Painel de fecho / próximo passo */}
          <LeisureSportsTourismClosingPanel data={data} />
        </div>
      </main>
    </div>
  );
}
