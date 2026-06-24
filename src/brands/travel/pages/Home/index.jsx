import home from "../../config/pages/home.js";
import styles from "../../layouts/TravelPageLayout.module.css";

import {
  HomeHeroSection,
  SolutionPathsSection,
  OperationFlowSection,
} from "./sections/index.jsx";

export default function HomePage() {
  return (
    <div className={styles.pageWrap} data-brand="travel">
      <main
        id={home.id}
        className={styles.inner}
        aria-label={home.ui.pageAriaLabel}
      >
        <div className={styles.contentFlow}>
          <HomeHeroSection />
          <SolutionPathsSection />
          <OperationFlowSection />
        </div>
      </main>
    </div>
  );
}
