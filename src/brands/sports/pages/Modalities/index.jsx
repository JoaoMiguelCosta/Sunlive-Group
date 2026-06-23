import modalities from "../../config/pages/modalities.js";
import styles from "../../layouts/SportsPageLayout.module.css";
import SportsHeroIntro from "../../shared/ui/SportsHeroIntro/index.jsx";
import SportsClosingCTA from "../../shared/ui/SportsClosingCTA/index.jsx";
import ModalitiesOverviewSection from "./sections/ModalitiesOverviewSection/index.jsx";
import ModalityDetailSection from "./sections/_shared/ModalityDetailSection/index.jsx";
import ModalitiesOtherSportsSection from "./sections/ModalitiesOtherSportsSection/index.jsx";
import useScrollToHash from "../../../../shared/hooks/useScrollToHash.js";
export default function ModalitiesPage() {
  useScrollToHash(96);
  const data = modalities;
  const sections = data?.sections || data;
  if (!sections) return null;
  return (
    <div className={styles.pageWrap} data-brand="sports">
      {" "}
      <main
        id={data?.id || "sports-modalities"}
        className={styles.inner}
        aria-label="Sunlive Sports — Modalidades"
      >
        {" "}
        <div className={styles.contentFlow}>
          {" "}
          <header>
            {" "}
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
            />{" "}
          </header>{" "}
          <ModalitiesOverviewSection data={sections.modalitiesOverview} />{" "}
          <div
            className={styles.sections}
            aria-label="Detalhe técnico das modalidades Sunlive Sports"
          >
            {" "}
            <ModalityDetailSection data={sections.cycling} />{" "}
            <ModalityDetailSection data={sections.gymnastics} />{" "}
            <ModalityDetailSection data={sections.basket} />{" "}
            <ModalityDetailSection data={sections.football} />{" "}
            <ModalityDetailSection data={sections.karate} />{" "}
          </div>{" "}
          <ModalitiesOtherSportsSection data={sections.modalitiesOtherSports} />{" "}
          <SportsClosingCTA data={sections.cta} />{" "}
        </div>{" "}
      </main>{" "}
    </div>
  );
}
