import styles from "../../layouts/SportsPageLayout.module.css";

import sportsBrand from "../../config/index.js";

import SportsHeroIntro from "../../shared/ui/SportsHeroIntro/index.jsx";
import SportsClosingCTA from "../../shared/ui/SportsClosingCTA/index.jsx";
import ProgramsSection from "./sections/ProgramsSection.jsx";

export default function TrainingCampsPage() {
  const data = sportsBrand.sections?.trainingCamps;
  if (!data) return null;

  return (
    <div className={styles.pageWrap} data-brand="sports">
      <main
        id="sports-training-camps"
        className={styles.inner}
        role="region"
        aria-label="Sunlive Sports — Training Camps"
      >
        <div className={styles.contentFlow}>
          <header className={styles.heroSection}>
            <SportsHeroIntro
              id="training-camps-hero"
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
            <ProgramsSection data={data.programs} />
            <SportsClosingCTA data={data.cta} />
          </div>
        </div>
      </main>
    </div>
  );
}
