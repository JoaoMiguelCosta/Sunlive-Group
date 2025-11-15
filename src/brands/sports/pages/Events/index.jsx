// src/brands/sports/pages/Events/index.jsx
import styles from "./Events.module.css";

import sportsBrand from "../../configSports.jsx";

import HeadlineBlock from "../../../../shared/components/HeadlineBlock/index.jsx";
import OverviewSection from "./OverviewSection.jsx";
import EventsClosingPanel from "./EventsClosingPanel.jsx";

/**
 * Página Eventos — Sunlive Sports
 * Layout alinhado ao sistema Prestige Noir + Liquid Gold + Sports verde-vital.
 */
export default function EventsPage() {
  const data = sportsBrand.sections?.events;
  if (!data) return null;

  return (
    <div className={styles.pageWrap} data-brand="sports">
      <main className={styles.inner} aria-label="Sunlive Sports — Eventos">
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

          {/* 2) Painel de fecho (3 CTAs: voltar / contactar / atletas) */}
          <EventsClosingPanel data={data} />
        </div>
      </main>
    </div>
  );
}
