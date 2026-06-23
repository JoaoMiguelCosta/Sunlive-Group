import education from "../../config/pages/education.js";
import { openEducationBook } from "./educationBook.actions.js";
import styles from "../../layouts/SportsPageLayout.module.css";
import SportsHeroIntro from "../../shared/ui/SportsHeroIntro/index.jsx";
import EducationLevelsSection from "./sections/EducationLevelsSection/index.jsx";
import EducationBilingualSection from "./sections/EducationBilingualSection/index.jsx";
import EducationCareersSection from "./sections/EducationCareersSection/index.jsx";
import SportsClosingCTA from "../../shared/ui/SportsClosingCTA/index.jsx";

export default function EducationPage() {
  const data = education;
  if (!data) return null;

  return (
    <div className={styles.pageWrap} data-brand="sports">
      <main
        id={data.ui?.pageId || "sports-education"}
        className={styles.inner}
        aria-label={data.ui?.pageAriaLabel || "Sunlive Sports — Educação"}
      >
        <div className={styles.contentFlow}>
          <header>
            <SportsHeroIntro
              id={data.hero?.id || "education-hero"}
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
            <EducationLevelsSection
              data={data.levelsSection}
              onOpenBook={openEducationBook}
            />
            <EducationBilingualSection data={data.bilingualSection} />
            <EducationCareersSection data={data.careersSection} />
            <SportsClosingCTA data={data.cta} />
          </div>
        </div>
      </main>
    </div>
  );
}
