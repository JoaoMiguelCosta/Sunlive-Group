// src/brands/sports/pages/Consultancy/index.jsx
import styles from "./Consultancy.module.css";

import sportsBrand from "../../configSports.jsx";

import HeadlineBlock from "../../../../shared/components/HeadlineBlock/index.jsx";
import OverviewSection from "./OverviewSection.jsx";
import ConsultancyClosingPanel from "./ConsultancyClosingPanel.jsx";

/**
 * Página Consultoria — Sunlive Sports
 * Usa o mesmo layout base das restantes páginas Sports.
 */
export default function ConsultancyPage() {
  const data = sportsBrand.sections?.consultancy;
  if (!data) return null;

  return (
    <div className={styles.pageWrap} data-brand="sports">
      <main className={styles.inner} aria-label="Sunlive Sports — Consultoria">
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
          <ConsultancyClosingPanel data={data} />
        </div>
      </main>
    </div>
  );
}
