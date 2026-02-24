// src/brands/sports/pages/TrainingCamps/index.jsx
import styles from "./TrainingCamps.module.css";

import sportsBrand from "../../brand/configSports.js";

import HeadlineBlock from "../../../../shared/components/HeadlineBlock/index.jsx";
import OverviewSection from "./sections/OverviewSection.jsx";
import ProgramsSection from "./sections/ProgramsSection.jsx";
import TrainingCampsClosingPanel from "./sections/TrainingCampsClosingPanel.jsx";

/**
 * Página Training Camps — Sunlive Sports
 */
export default function TrainingCampsPage() {
  const data = sportsBrand.sections?.trainingCamps;
  if (!data) return null;

  return (
    <div className={styles.pageWrap} data-brand="sports">
      <main
        className={styles.inner}
        aria-label="Sunlive Sports — Training Camps"
      >
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
          <ProgramsSection data={data} />
          <TrainingCampsClosingPanel data={data} />
        </div>
      </main>
    </div>
  );
}
