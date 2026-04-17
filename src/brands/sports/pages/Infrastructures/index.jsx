import styles from "../../layouts/SportsPageLayout.module.css";

import sportsBrand from "../../config/index.js";

import HeadlineBlock from "../../shared/ui/HeadlineBlock/index.jsx";
import OverviewSection from "./sections/OverviewSection.jsx";
import FacilitiesSection from "./sections/FacilitiesSection.jsx";
import InfrastructuresClosingPanel from "./sections/InfrastructuresClosingPanel.jsx";

export default function InfrastructuresPage() {
  const data = sportsBrand.sections?.infrastructures;
  if (!data) return null;

  return (
    <div className={styles.pageWrap} data-brand="sports">
      <main
        id="sports-infrastructures"
        className={styles.inner}
        role="region"
        aria-label="Sunlive Sports — Infraestruturas"
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
            <FacilitiesSection data={data} />
            <InfrastructuresClosingPanel data={data} />
          </div>
        </div>
      </main>
    </div>
  );
}
