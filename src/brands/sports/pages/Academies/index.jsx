// src/brands/sports/pages/Academies/index.jsx
import styles from "./Academies.module.css";

import sportsBrand from "../../configSports.jsx";

import HeadlineBlock from "../../../../shared/components/HeadlineBlock/index.jsx";
import OverviewSection from "./OverviewSection.jsx";
import AcademiesClosingPanel from "./AcademiesClosingPanel.jsx";
import AcademiesCardsSection from "./AcademiesCardsSection.jsx";


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
            title={data.hero.title}
            lead={data.hero.description}
          />
        </header>

        {/* Conteúdo principal */}
        <div className={styles.sections}>
          {/* 1) Bloco texto + imagem + pilares */}
          <OverviewSection data={data} />
          <AcademiesCardsSection data={data} />

          {/* 2) Painel de fecho (3 CTAs: voltar / contactar / eventos) */}
          <AcademiesClosingPanel data={data} />
        </div>
      </main>
    </div>
  );
}
