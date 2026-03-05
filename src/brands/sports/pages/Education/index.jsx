// src/brands/sports/pages/Education/index.jsx
import styles from "./Education.module.css";

import sportsBrand from "../../config/registry/index.js";

import HeadlineBlock from "../../../../shared/components/HeadlineBlock/index.jsx";

import OverviewSection from "./sections/OverviewSection.jsx";
import EducationLevelsSection from "./sections/EducationLevelsSection.jsx";
import EducationBilingualSection from "./sections/EducationBilingualSection.jsx";
import EducationBilingualCertification from "./sections/EducationBilingualCertification.jsx";
import EducationCareersSection from "./sections/EducationCareersSection.jsx";
import EducationClosingPanel from "./sections/EducationClosingPanel.jsx";

/**
 * Página Educação — Sunlive Sports
 * Layout alinhado ao sistema Prestige Noir + Liquid Gold + Sports verde-vital.
 */
export default function EducationPage() {
  const data = sportsBrand.sections?.education;
  if (!data) return null;

  return (
    <div className={styles.pageWrap} data-brand="sports">
      <main className={styles.inner} aria-label="Sunlive Sports — Educação">
        <header className={styles.heroSection}>
          <HeadlineBlock
            theme="sports"
            variant="banded"
            align="center"
            max="lg"
            title={data.hero?.title}
            lead={data.hero?.description}
          />
        </header>

        <div className={styles.sections}>
          <OverviewSection data={data} />

          {/* 2) Níveis de Ensino */}
          {data.levelsIntro && (
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
          )}

          {/* 3) Ensino Bilingue */}
          {data.bilingualIntro && (
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
          )}

          {/* 4) Percursos Profissionais */}
          {data.careersIntro && (
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
          )}

          <EducationClosingPanel data={data} />
        </div>
      </main>
    </div>
  );
}
