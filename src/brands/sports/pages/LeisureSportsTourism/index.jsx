import styles from "../../layouts/SportsPageLayout.module.css";

import sportsBrand from "../../config/index.js";

import SportsHeroIntro from "../../shared/ui/SportsHeroIntro/index.jsx";

import LeisureExperiencesSection from "./sections/LeisureExperiencesSection/index.jsx";
import LeisureDestinationsSection from "./sections/LeisureDestinationsSection/index.jsx";
import LeisureBenefitsSection from "./sections/LeisureBenefitsSection/index.jsx";

export default function LeisureSportsTourismPage() {
  const data = sportsBrand.sections?.leisureSportsTourism;

  if (!data) return null;

  return (
    <div className={styles.pageWrap} data-brand="sports">
      <main
        id="sports-leisure-sports-tourism"
        className={styles.inner}
        role="region"
        aria-label="Sunlive Sports — Turismo Desportivo Lúdico"
      >
        <div className={styles.contentFlow}>
          <header className={styles.heroSection}>
            <SportsHeroIntro
              id={data.hero?.id || "leisure-sports-tourism-hero"}
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

          <LeisureExperiencesSection data={data.experiences} />
          <LeisureDestinationsSection data={data.destinations} />
          <LeisureBenefitsSection data={data.benefits} />
        </div>
      </main>
    </div>
  );
}
