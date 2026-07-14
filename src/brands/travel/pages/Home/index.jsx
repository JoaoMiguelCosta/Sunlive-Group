import { useEffect } from "react";

import home from "../../config/pages/home.js";
import styles from "../../layouts/TravelPageLayout.module.css";

import {
  HomeHeroSection,
  SolutionPathsSection,
  OperationFlowSection,
} from "./sections/index.jsx";

export default function HomePage() {
  useEffect(() => {
    document.documentElement.setAttribute("data-page-theme", "light-forest");

    return () => {
      document.documentElement.removeAttribute("data-page-theme");
    };
  }, []);

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
