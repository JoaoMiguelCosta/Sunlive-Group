import athletes from "../../config/pages/athletes.js";

import styles from "../../layouts/SportsPageLayout.module.css";

import SportsHeroIntro from "../../shared/ui/SportsHeroIntro/index.jsx";
import SportsClosingCTA from "../../shared/ui/SportsClosingCTA/index.jsx";

import AthletesRosterSection from "./sections/AthletesRosterSection/index.jsx";

export default function AthletesPage() {
  const sections = athletes?.sections;

  if (!sections) return null;

  const heroData = sections.hero;
  const athletesRosterData = sections.athletesRoster;
  const ctaData = sections.cta;

  return (
    <div className={styles.pageWrap} data-brand="sports">
      <main
        id={athletes?.id || "atletas-sunlive"}
        className={styles.inner}
        aria-label={
          athletes?.ui?.pageAriaLabel || "Sunlive Sports — Atletas Sunlive"
        }
      >
        <div className={styles.contentFlow}>
          {heroData ? (
            <header>
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
