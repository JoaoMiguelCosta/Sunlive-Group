// src/brands/sports/pages/SpecialisedServices/index.jsx
import styles from "./SpecialisedServices.module.css";

import sportsBrand from "../../configSports.jsx";

import HeadlineBlock from "../../../../shared/components/HeadlineBlock/index.jsx";
import OverviewSection from "./OverviewSection.jsx";
import AreasSection from "./AreasSection.jsx";
import SpecialisedServicesClosingPanel from "./SpecialisedServicesClosingPanel.jsx";

/**
 * Página Serviços Especializados — Sunlive Sports
 */
export default function SpecialisedServicesPage() {
  const data = sportsBrand.sections?.specialisedServices;
  if (!data) return null;

  return (
    <div className={styles.pageWrap} data-brand="sports">
      <main
        className={styles.inner}
        aria-label="Sunlive Sports — Serviços Especializados"
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
          {/* 1) Bloco texto + imagem */}
          <OverviewSection data={data} />

          {/* 2) Headline intermédio — Áreas de Especialização */}
          {data.areasIntro && (
            <section
              className={styles.heroSection}
              aria-label="Áreas de Especialização"
            >
              <HeadlineBlock
                theme="sports"
                variant="banded"
                align="center"
                max="lg"
                title={data.areasIntro.title}
                lead={data.areasIntro.lead}
              />
            </section>
          )}

          {/* 3) Grid de cards — Áreas de Especialização */}
          <AreasSection data={data} />

          {/* 4) Painel de fecho */}
          <SpecialisedServicesClosingPanel data={data} />
        </div>
      </main>
    </div>
  );
}
