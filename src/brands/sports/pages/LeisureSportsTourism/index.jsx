import leisureSportsTourism from "../../config/pages/leisureSportsTourism.js";
import styles from "../../layouts/SportsPageLayout.module.css";
import SportsHeroIntro from "../../shared/ui/SportsHeroIntro/index.jsx";
import SportsClosingCTA from "../../shared/ui/SportsClosingCTA/index.jsx";
import LeisureDestinationsSection from "./sections/LeisureDestinationsSection/index.jsx";
import LeisureExperiencesSection from "./sections/LeisureExperiencesSection/index.jsx";
import LeisureBenefitsSection from "./sections/LeisureBenefitsSection/index.jsx";
export default function LeisureSportsTourismPage() {
  const data = leisureSportsTourism;
  if (!data) return null;
  return (
    <div className={styles.pageWrap} data-brand="sports">
      {" "}
      <main
        id="sports-leisure-tourism"
        className={styles.inner}
        aria-label="Sunlive Sports — Turismo Desportivo Lúdico"
      >
        {" "}
        <div className={styles.contentFlow}>
          {" "}
          <header>{" "}
            <SportsHeroIntro
              id={data.hero?.id}
              eyebrow={data.hero?.eyebrow}
              secondaryLine={data.hero?.secondaryLine}
              title={data.hero?.title}
              description={data.hero?.description}
              supportingText={data.hero?.supportingText}
              proofPoints={data.hero?.proofPoints}
              stats={data.hero?.stats}
              ui={data.hero?.ui}
            />{" "}
          </header>{" "}
          <LeisureExperiencesSection data={data.experiences} />{" "}
          <LeisureDestinationsSection data={data.destinations} />{" "}
          <LeisureBenefitsSection data={data.benefits} />{" "}
          <SportsClosingCTA data={data.cta} />{" "}
        </div>{" "}
      </main>{" "}
    </div>
  );
}
