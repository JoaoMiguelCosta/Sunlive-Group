import styles from "../../layouts/SportsPageLayout.module.css";

import sportsBrand from "../../config/index.js";

import SportsHeroIntro from "../../shared/ui/SportsHeroIntro/index.jsx";
import AcademiesCardsSection from "./sections/AcademiesCardsSection.jsx";
import SportsClosingCTA from "../../shared/ui/SportsClosingCTA/index.jsx";


export default function AcademiesPage() {
  const data = sportsBrand.sections?.academies;
  if (!data) return null;

  return (
    <div className={styles.pageWrap} data-brand="sports">
      <main
        id="sports-academies"
        className={styles.inner}
        role="region"
        aria-label="Sunlive Sports — Academias"
      >
        <div className={styles.contentFlow}>
          <header className={styles.heroSection}>
            <SportsHeroIntro
              id="academies-hero"
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
           
            <AcademiesCardsSection data={data} />
            <SportsClosingCTA data={data.cta} />
            
          </div>
        </div>
      </main>
    </div>
  );
}
