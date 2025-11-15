// src/brands/sports/pages/Logistics/index.jsx
import styles from "./Logistics.module.css";

import sportsBrand from "../../configSports.jsx";

import HeadlineBlock from "../../../../shared/components/HeadlineBlock/index.jsx";
import OverviewSection from "./OverviewSection.jsx";
import LogisticsClosingPanel from "./LogisticsClosingPanel.jsx";

/**
 * Página Logística — Sunlive Sports
 */
export default function LogisticsPage() {
  const data = sportsBrand.sections?.logistics;
  if (!data) return null;

  return (
    <div className={styles.pageWrap} data-brand="sports">
      <main className={styles.inner} aria-label="Sunlive Sports — Logística">
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
          <LogisticsClosingPanel data={data} />
        </div>
      </main>
    </div>
  );
}
