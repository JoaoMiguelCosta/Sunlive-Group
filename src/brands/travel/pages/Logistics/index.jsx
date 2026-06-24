import styles from "../../layouts/TravelPageLayout.module.css";

import LogisticsSolutionsSection from "./sections/LogisticsSolutions/index.jsx";

export default function LogisticsPage() {
  return (
    <div className={styles.pageWrap} data-brand="travel">
      <main
        id="logistics"
        className={styles.inner}
        aria-label="Sunlive Travel — Logística"
      >
        <div className={styles.contentFlow}>
          <LogisticsSolutionsSection />
        </div>
      </main>
    </div>
  );
}
