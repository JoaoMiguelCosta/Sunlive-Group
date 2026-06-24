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
        id="travel-home"
        className={styles.inner}
        aria-label="Sunlive Travel — Página Inicial"
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
