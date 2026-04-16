import styles from "../../layouts/SportsPageLayout.module.css";

import sportsBrand from "../../config/index.js";

import HeadlineBlock from "../../../../shared/components/HeadlineBlock/index.jsx";
import OverviewSection from "./sections/OverviewSection.jsx";
import AcademiesCardsSection from "./sections/AcademiesCardsSection.jsx";
import AcademiesClosingPanel from "./sections/AcademiesClosingPanel.jsx";

export default function AcademiesPage() {
  const data = sportsBrand.sections?.academies;
  if (!data) return null;

  return (
    <div className={styles.pageWrap} data-brand="sports">
      <main
        id="sports-academies"
        className={styles.inner}
        role="region"
        aria-label="Sunlive Sports — Academias"
      >
        <div className={styles.contentFlow}>
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
            <AcademiesCardsSection data={data} />
            <AcademiesClosingPanel data={data} />
          </div>
        </div>
      </main>
    </div>
  );
}
