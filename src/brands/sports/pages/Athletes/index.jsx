import styles from "../../layouts/SportsPageLayout.module.css";
import sportsBrand from "../../config/index.js";

import SportsHeroIntro from "../../shared/ui/SportsHeroIntro/index.jsx";
import HeadlineBlock from "../../shared/ui/HeadlineBlock/index.jsx";
import OverviewSection from "./sections/OverviewSection.jsx";
import ProfilesSection from "./sections/ProfilesSection.jsx";
import AthletesClosingPanel from "./sections/AthletesClosingPanel.jsx";

export default function AthletesPage() {
  const data = sportsBrand.sections?.athletes;
  if (!data) return null;

  return (
    <div className={styles.pageWrap} data-brand="sports">
      <main
        id="sports-athletes"
        className={styles.inner}
        role="region"
        aria-label="Sunlive Sports — Atletas Sunlive"
      >
        <div className={styles.contentFlow}>
          <header className={styles.heroSection}>
            <SportsHeroIntro
              id="athletes-hero"
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
            <OverviewSection data={data} />

            {data.profilesIntro ? (
              <section
                className={styles.heroSection}
                aria-label="Conhece os Nossos Atletas"
              >
                <HeadlineBlock
                  theme="sports"
                  variant="banded"
                  align="center"
                  max="lg"
                  title={data.profilesIntro?.title}
                  lead={data.profilesIntro?.lead}
                />
              </section>
            ) : null}

            <ProfilesSection data={data} />
            <AthletesClosingPanel data={data} />
          </div>
        </div>
      </main>
    </div>
  );
}
