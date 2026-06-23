import infrastructures from "../../config/pages/infrastructures.js";
import styles from "../../layouts/SportsPageLayout.module.css";
import SportsHeroIntro from "../../shared/ui/SportsHeroIntro/index.jsx";
import SportsClosingCTA from "../../shared/ui/SportsClosingCTA/index.jsx";
import FacilitiesShowcaseSection from "./sections/FacilitiesShowcaseSection/index.jsx";
export default function InfrastructuresPage() {
  const data = infrastructures;
  if (!data) return null;
  return (
    <div className={styles.pageWrap} data-brand="sports">
      {" "}
      <main
        id="sports-infrastructures"
        className={styles.inner}
        aria-label="Sunlive Sports — Infraestruturas"
      >
        {" "}
        <div className={styles.contentFlow}>
          {" "}
          <header>
            {" "}
            <SportsHeroIntro
              id="infrastructures-hero"
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
          <div className={styles.sections}>
            {" "}
            <FacilitiesShowcaseSection data={data.facilitiesGrid} />{" "}
            <SportsClosingCTA data={data.cta} />{" "}
          </div>{" "}
        </div>{" "}
      </main>{" "}
    </div>
  );
}
