import academies from "../../config/pages/academies.js";
import styles from "../../layouts/SportsPageLayout.module.css";
import SportsHeroIntro from "../../shared/ui/SportsHeroIntro/index.jsx";
import SportsClosingCTA from "../../shared/ui/SportsClosingCTA/index.jsx";
import AcademiesCardsSection from "./sections/AcademiesCardsSection/index.jsx";
export default function AcademiesPage() {
  const data = academies.sections || academies;
  if (!data) return null;
  const pageId = data.ui?.pageId || "sports-academies";
  const pageAriaLabel = data.ui?.pageAriaLabel || "Sunlive Sports — Academias";
  const heroId = data.hero?.id || "academies-hero";
  return (
    <div className={styles.pageWrap} data-brand="sports">
      {" "}
      <main
        id={pageId}
        className={styles.inner}
        aria-label={pageAriaLabel}
      >
        {" "}
        <div className={styles.contentFlow}>
          {" "}
          <header>
            {" "}
            <SportsHeroIntro
              id={heroId}
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
            <AcademiesCardsSection data={data.academiesCards} />{" "}
            <SportsClosingCTA data={data.cta} />{" "}
          </div>{" "}
        </div>{" "}
      </main>{" "}
    </div>
  );
}
