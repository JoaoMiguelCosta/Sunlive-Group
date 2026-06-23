import trainingCamps from "../../config/pages/trainingCamps.js";
import styles from "../../layouts/SportsPageLayout.module.css";
import SportsHeroIntro from "../../shared/ui/SportsHeroIntro/index.jsx";
import SportsClosingCTA from "../../shared/ui/SportsClosingCTA/index.jsx";
import ProgramsSection from "./sections/ProgramsSection/index.jsx";

export default function TrainingCampsPage() {
  const sections = trainingCamps.sections;
  if (!sections) return null;

  return (
    <div className={styles.pageWrap} data-brand="sports">
      <main
        id={trainingCamps.ui?.pageId || "sports-training-camps"}
        className={styles.inner}
        aria-label={trainingCamps.ui?.pageAriaLabel || "Sunlive Sports — Training Camps"}
      >
        <div className={styles.contentFlow}>
          <header>
            <SportsHeroIntro
              id={sections.hero?.id || "training-camps-hero"}
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

          <div className={styles.sections}>
            <ProgramsSection data={sections.programs} />
            <SportsClosingCTA data={sections.cta} />
          </div>
        </div>
      </main>
    </div>
  );
}
