import specialisedServices from "../../config/pages/specialisedServices.js";
import styles from "../../layouts/SportsPageLayout.module.css";
import SportsHeroIntro from "../../shared/ui/SportsHeroIntro/index.jsx";
import SportsClosingCTA from "../../shared/ui/SportsClosingCTA/index.jsx";
import AreasSection from "./sections/SpecialisedServicesAreasSection/index.jsx";
export default function SpecialisedServicesPage() {
  const data = specialisedServices;
  const sections = data?.sections;
  if (!sections) return null;
  return (
    <div className={styles.pageWrap} data-brand="sports">
      {" "}
      <main
        id={data.ui?.pageId || data.id}
        className={styles.inner}
        role="region"
        aria-label={
          data.ui?.pageAriaLabel || "Sunlive Sports — Serviços Especializados"
        }
      >
        {" "}
        <div className={styles.contentFlow}>
          {" "}
          <header className={styles.heroSection}>
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
          <AreasSection data={sections.areas} />{" "}
          {sections.cta ? <SportsClosingCTA data={sections.cta} /> : null}{" "}
        </div>{" "}
      </main>{" "}
    </div>
  );
}
