// src/brands/sports/pages/Infrastructures/index.jsx
import styles from "./Infrastructures.module.css";

import sportsBrand from "../../configSports.jsx";

import HeadlineBlock from "../../../../shared/components/HeadlineBlock/index.jsx";
import OverviewSection from "./OverviewSection.jsx";
import InfrastructuresClosingPanel from "./InfrastructuresClosingPanel.jsx";

/**
 * Página Infraestruturas — Sunlive Sports
 */
export default function InfrastructuresPage() {
  const data = sportsBrand.sections?.infrastructures;
  if (!data) return null;

  return (
    <div className={styles.pageWrap} data-brand="sports">
      <main
        className={styles.inner}
        aria-label="Sunlive Sports — Infraestruturas"
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
          <OverviewSection data={data} />
          <InfrastructuresClosingPanel data={data} />
        </div>
      </main>
    </div>
  );
}
