import testimonials from "../../config/pages/testimonials.js";
import styles from "../../layouts/TravelPageLayout.module.css";

import TestimonialsAndMetricsSection from "./sections/TestimonialsAndMetrics/index.jsx";

export default function TestimonialsPage() {
  return (
    <div className={styles.pageWrap} data-brand="travel">
      <main
        id={testimonials.id}
        className={styles.inner}
        aria-label={testimonials.ui.pageAriaLabel}
      >
        <div className={styles.contentFlow}>
          <TestimonialsAndMetricsSection />
        </div>
      </main>
    </div>
  );
}
