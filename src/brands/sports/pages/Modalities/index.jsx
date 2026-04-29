import styles from "../../layouts/SportsPageLayout.module.css";

import sportsBrand from "../../config/index.js";

import SportsHeroIntro from "../../shared/ui/SportsHeroIntro/index.jsx";
import SportsClosingCTA from "../../shared/ui/SportsClosingCTA/index.jsx";

import ModalitiesOverviewSection from "./sections/ModalitiesOverviewSection/index.jsx";
import CyclingSection from "./sections/CyclingSection/index.jsx";
import GymnasticsSection from "./sections/GymnasticsSection/index.jsx";
import BasketSection from "./sections/BasketSection/index.jsx";
import FootballSection from "./sections/FootballSection/index.jsx";
import KarateSection from "./sections/KarateSection/index.jsx";
import ModalitiesOtherSportsSection from "./sections/ModalitiesOtherSportsSection/index.jsx";

import useScrollToHash from "../../../../shared/hooks/useScrollToHash.js";

export default function ModalitiesPage() {
  useScrollToHash(96);

  const data =
    sportsBrand.pages?.modalities || sportsBrand.sections?.modalities;

  const sections = data?.sections || data;

  if (!sections) return null;

  return (
    <div className={styles.pageWrap} data-brand="sports">
      <main
        id={data?.id || "sports-modalities"}
        className={styles.inner}
        role="region"
        aria-label="Sunlive Sports — Modalidades"
      >
        <div className={styles.contentFlow}>
          <header className={styles.heroSection}>
            <SportsHeroIntro
              id={sections.hero?.id}
              eyebrow={sections.hero?.eyebrow}
              secondaryLine={sections.hero?.secondaryLine}
              title={sections.hero?.title}
              description={sections.hero?.description}
              supportingText={sections.hero?.supportingText}
              proofPoints={sections.hero?.proofPoints}
              stats={sections.hero?.stats}
              ui={sections.hero?.ui}
            />
          </header>

          <ModalitiesOverviewSection data={sections.modalitiesOverview} />

          <div
            className={styles.sections}
            aria-label="Detalhe técnico das modalidades Sunlive Sports"
          >
            <CyclingSection data={sections.cycling} />
            <GymnasticsSection data={sections.gymnastics} />
            <BasketSection data={sections.basket} />
            <FootballSection data={sections.football} />
            <KarateSection data={sections.karate} />
          </div>

          <ModalitiesOtherSportsSection data={sections.modalitiesOtherSports} />

          <SportsClosingCTA data={sections.cta} />
        </div>
      </main>
    </div>
  );
}
