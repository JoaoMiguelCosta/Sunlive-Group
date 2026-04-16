import styles from "../../layouts/SportsPageLayout.module.css";

import sportsBrand from "../../config/index.js";

import HeadlineBlock from "../../../../shared/components/HeadlineBlock/index.jsx";
import OverviewSection from "./sections/OverviewSection.jsx";
import ProgramsSection from "./sections/ProgramsSection.jsx";
import TrainingCampsClosingPanel from "./sections/TrainingCampsClosingPanel.jsx";

export default function TrainingCampsPage() {
  const data = sportsBrand.sections?.trainingCamps;
  if (!data) return null;

  return (
    <div className={styles.pageWrap} data-brand="sports">
      <main
        id="sports-training-camps"
        className={styles.inner}
        role="region"
        aria-label="Sunlive Sports — Training Camps"
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
            <ProgramsSection data={data} />
            <TrainingCampsClosingPanel data={data} />
          </div>
        </div>
      </main>
    </div>
  );
}
