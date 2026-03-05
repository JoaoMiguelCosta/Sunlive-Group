// src/brands/sports/pages/Consultancy/index.jsx
import styles from "./Consultancy.module.css";

import sportsBrand from "../../config/registry/index.js";

import HeadlineBlock from "../../../../shared/components/HeadlineBlock/index.jsx";
import OverviewSection from "./sections/OverviewSection.jsx";
import ConsultancyEntitiesSection from "./sections/ConsultancyEntitiesSection.jsx";
import ConsultancyAreasSection from "./sections/ConsultancyAreasSection.jsx";
import ConsultancyClosingPanel from "./sections/ConsultancyClosingPanel.jsx";
import useScrollToHash from "../../../../shared/hooks/useScrollToHash.js";

/**
 * Página Consultoria — Sunlive Sports
 * Usa o mesmo layout base das restantes páginas Sports.
 */
export default function ConsultancyPage() {
  // Scroll suave para âncoras, compensando o header fixo (~96px)
  useScrollToHash(96);

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
            title={data.hero?.title}
            lead={data.hero?.description}
          />
        </header>

        {/* Conteúdo principal */}
        <div className={styles.sections}>
          {/* 1) Bloco texto + imagem */}
          <OverviewSection data={data} />

          {/* 1.x) Entidades com quem colaboramos */}
          {data.entities && <ConsultancyEntitiesSection data={data} />}

          {/* 2) Headline intermédio — Áreas de Consultoria */}
          {data.areasIntro && (
            <section
              className={styles.heroSection}
              aria-label={data.areasIntro?.title}
            >
              <HeadlineBlock
                theme="sports"
                variant="banded"
                align="center"
                max="lg"
                title={data.areasIntro?.title}
                lead={data.areasIntro?.lead}
              />
            </section>
          )}

          {/* 3) Áreas de Consultoria (acordeão) */}
          <ConsultancyAreasSection data={data} />

          {/* 4) Painel de fecho */}
          <ConsultancyClosingPanel data={data} />
        </div>
      </main>
    </div>
  );
}
