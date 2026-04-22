import styles from "../../layouts/SportsPageLayout.module.css";
import sportsBrand, { SPORTS_BOOKS } from "../../config/index.js";

import SportsHeroIntro from "../../shared/ui/SportsHeroIntro/index.jsx";
import EducationLevelsSection from "./sections/EducationLevelsSection/index.jsx";
import EducationBilingualSection from "./sections/EducationBilingualSection/index.jsx";
import EducationCareersSection from "./sections/EducationCareersSection/index.jsx";
import SportsClosingCTA from "../../shared/ui/SportsClosingCTA/index.jsx";

export default function EducationPage() {
  const data = sportsBrand.sections?.education;
  if (!data) return null;

  function handleOpenEducationBook(bookKey) {
    const book = SPORTS_BOOKS?.[bookKey];

    if (!book?.href) {
      console.error(`Book não encontrado para a key: ${bookKey}`);
      return;
    }

    window.open(book.href, "_blank", "noopener,noreferrer");
  }

  return (
    <div className={styles.pageWrap} data-brand="sports">
      <main
        id="sports-education"
        className={styles.inner}
        role="region"
        aria-label="Sunlive Sports — Educação"
      >
        <div className={styles.contentFlow}>
          <header className={styles.heroSection}>
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
              onOpenBook={handleOpenEducationBook}
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
