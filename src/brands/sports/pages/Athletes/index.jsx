// src/brands/sports/pages/Athletes/index.jsx
import styles from "./Athletes.module.css";

import sportsBrand from "../../configSports.jsx";

import HeadlineBlock from "../../../../shared/components/HeadlineBlock/index.jsx";
import OverviewSection from "./OverviewSection.jsx";
import AthletesClosingPanel from "./AthletesClosingPanel.jsx";

/**
 * Página Atletas Sunlive — Sunlive Sports
 * Layout alinhado ao sistema Prestige Noir + Liquid Gold + Sports verde-vital.
 */
export default function AthletesPage() {
  const data = sportsBrand.sections?.athletes;
  if (!data) return null;

  return (
    <div className={styles.pageWrap} data-brand="sports">
      <main
        className={styles.inner}
        aria-label="Sunlive Sports — Atletas Sunlive"
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
          {/* 1) Bloco de valores / texto longo + pilares Sonhar/Ousar/Realizar */}
          <OverviewSection data={data} />

          {/* 2) Painel de fecho (Voltar / Contactar / Serviços Especializados) */}
          <AthletesClosingPanel data={data} />
        </div>
      </main>
    </div>
  );
}
