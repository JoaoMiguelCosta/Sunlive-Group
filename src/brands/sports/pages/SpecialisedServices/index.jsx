import styles from "../../layouts/SportsPageLayout.module.css";
import sportsBrand from "../../config/index.js";
import SportsHeroIntro from "../../shared/ui/SportsHeroIntro/index.jsx";
import AreasSection from "./sections/AreasSection.jsx";
import SportsClosingCTA from "../../shared/ui/SportsClosingCTA/index.jsx";

export default function SpecialisedServicesPage() {
  const data = sportsBrand.sections?.specialisedServices;
  if (!data) return null;

  return (
    <div className={styles.pageWrap} data-brand="sports">
      <main
        id="sports-specialised-services"
        className={styles.inner}
        role="region"
        aria-label="Sunlive Sports — Serviços Especializados"
      >
        <div className={styles.contentFlow}>
          <header className={styles.heroSection}>
            <SportsHeroIntro
              id="specialised-services-hero"
              eyebrow={data.hero?.eyebrow}
              secondaryLine={data.hero?.secondaryLine}
              title={data.hero?.title}
              description={data.hero?.description}
              supportingText={data.hero?.supportingText}
              proofPoints={data.hero?.proofPoints}
              stats={data.hero?.stats}
              ui={data.hero?.ui}
            />
          </header>

          <div className={styles.sections}>
            <AreasSection data={data} />
            <SportsClosingCTA data={data.cta} />
          </div>
        </div>
      </main>
    </div>
  );
}
