import academies from "../../config/pages/academies.js";
import styles from "../../layouts/SportsPageLayout.module.css";
import SportsHeroIntro from "../../shared/ui/SportsHeroIntro/index.jsx";
import SportsClosingCTA from "../../shared/ui/SportsClosingCTA/index.jsx";
import AcademiesCardsSection from "./sections/AcademiesCardsSection/index.jsx";

export default function AcademiesPage() {
  const sections = academies.sections;
  if (!sections) return null;

  const pageId = academies.ui?.pageId || "sports-academies";
  const pageAriaLabel = academies.ui?.pageAriaLabel || "Sunlive Sports — Academias";
  const heroId = sections.hero?.id || "academies-hero";

  return (
    <div className={styles.pageWrap} data-brand="sports">
      <main id={pageId} className={styles.inner} aria-label={pageAriaLabel}>
        <div className={styles.contentFlow}>
          <header>
            <SportsHeroIntro
              id={heroId}
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
            <AcademiesCardsSection data={sections.academiesCards} />
            <SportsClosingCTA data={sections.cta} />
          </div>
        </div>
      </main>
    </div>
  );
}
