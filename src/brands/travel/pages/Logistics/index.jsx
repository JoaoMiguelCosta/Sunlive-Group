import { useEffect } from "react";

import logistics from "../../config/pages/logistics.js";
import styles from "../../layouts/TravelPageLayout.module.css";
import pageStyles from "./Logistics.module.css";

import LogisticsSolutionsSection from "./sections/LogisticsSolutions/index.jsx";

export default function LogisticsPage() {
  useEffect(() => {
    document.documentElement.setAttribute("data-page-theme", "light-forest");

    return () => {
      document.documentElement.removeAttribute("data-page-theme");
    };
  }, []);

  return (
    <div className={pageStyles.page}>
      <div className={styles.pageWrap} data-brand="travel">
        <main
          id={logistics.id}
          className={styles.inner}
          aria-label={logistics.ui.pageAriaLabel}
        >
          <div className={styles.contentFlow}>
            <LogisticsSolutionsSection />
          </div>
        </main>
      </div>
    </div>
  );
}
