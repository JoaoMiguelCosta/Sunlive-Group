import styles from "../../layouts/SportsPageLayout.module.css";

import sportsBrand from "../../config/index.js";

import SportsHeroIntro from "../../shared/ui/SportsHeroIntro/index.jsx";
import HeadlineBlock from "../../shared/ui/HeadlineBlock/index.jsx";

import OverviewSection from "./sections/OverviewSection.jsx";
import EducationLevelsSection from "./sections/EducationLevelsSection.jsx";
import EducationBilingualSection from "./sections/EducationBilingualSection.jsx";
import EducationBilingualCertification from "./sections/EducationBilingualCertification.jsx";
import EducationCareersSection from "./sections/EducationCareersSection.jsx";
import EducationClosingPanel from "./sections/EducationClosingPanel.jsx";

export default function EducationPage() {
  const data = sportsBrand.sections?.education;
  if (!data) return null;

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
              id="education-hero"
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

            {data.levelsIntro ? (
              <>
                <section
                  className={styles.heroSection}
                  aria-label={data.levelsIntro?.title}
                >
                  <HeadlineBlock
                    theme="sports"
                    variant="banded"
                    align="center"
                    max="lg"
                    title={data.levelsIntro?.title}
                    lead={data.levelsIntro?.lead}
                  />
                </section>

                <EducationLevelsSection data={data} />
              </>
            ) : null}

            {data.bilingualIntro ? (
              <>
                <section
                  className={styles.heroSection}
                  aria-label={data.bilingualIntro?.title}
                >
                  <HeadlineBlock
                    theme="sports"
                    variant="banded"
                    align="center"
                    max="lg"
                    title={data.bilingualIntro?.title}
                    lead={data.bilingualIntro?.lead}
                  />
                </section>

                <EducationBilingualSection data={data} />
                <EducationBilingualCertification data={data} />
              </>
            ) : null}

            {data.careersIntro ? (
              <>
                <section
                  className={styles.heroSection}
                  aria-label={data.careersIntro?.title}
                >
                  <HeadlineBlock
                    theme="sports"
                    variant="banded"
                    align="center"
                    max="lg"
                    title={data.careersIntro?.title}
                    lead={data.careersIntro?.lead}
                  />
                </section>

                <EducationCareersSection data={data} />
              </>
            ) : null}

            <EducationClosingPanel data={data} />
          </div>
        </div>
      </main>
    </div>
  );
}
