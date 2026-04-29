import styles from "../../layouts/SportsPageLayout.module.css";

import sportsBrand from "../../config/index.js";

import SportsHeroIntro from "../../shared/ui/SportsHeroIntro/index.jsx";
import SportsClosingCTA from "../../shared/ui/SportsClosingCTA/index.jsx";

import AthletesRosterSection from "./sections/AthletesRosterSection/index.jsx";

export default function AthletesPage() {
  const pageData =
    sportsBrand.pages?.athletes || sportsBrand.sections?.athletes;

  const sections = pageData?.sections || pageData;

  if (!sections) return null;

  const heroData = sections.hero;
  const athletesRosterData = sections.athletesRoster;
  const ctaData = sections.cta || sections.athletesCTA;

  return (
    <div className={styles.pageWrap} data-brand="sports">
      <main
        id={pageData?.id || "atletas-sunlive"}
        className={styles.inner}
        aria-label={
          pageData?.ui?.ariaLabel ||
          sections.ui?.ariaLabel ||
          "Sunlive Sports — Atletas Sunlive"
        }
      >
        <div className={styles.contentFlow}>
          {heroData ? (
            <header className={styles.heroSection}>
              <SportsHeroIntro
                id={heroData.id || "atletas-sunlive-hero"}
                eyebrow={heroData.eyebrow}
                secondaryLine={heroData.secondaryLine}
                title={heroData.title}
                description={heroData.description}
                supportingText={heroData.supportingText}
                proofPoints={heroData.proofPoints}
                stats={heroData.stats}
                ui={heroData.ui}
              />
            </header>
          ) : null}

          <div className={styles.sections}>
            <AthletesRosterSection data={athletesRosterData} />

            {ctaData ? <SportsClosingCTA data={ctaData} /> : null}
          </div>
        </div>
      </main>
    </div>
  );
}
