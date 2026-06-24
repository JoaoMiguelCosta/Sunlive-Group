import styles from "../../layouts/TravelPageLayout.module.css";

import TestimonialsAndMetricsSection from "./sections/TestimonialsAndMetrics/index.jsx";

export default function TestimonialsPage() {
  return (
    <div className={styles.pageWrap} data-brand="travel">
      <main
        id="testimonials"
        className={styles.inner}
        aria-label="Sunlive Travel — Testemunhos"
      >
        <div className={styles.contentFlow}>
          <TestimonialsAndMetricsSection />
        </div>
      </main>
    </div>
  );
}
