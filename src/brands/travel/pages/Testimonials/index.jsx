import { useEffect } from "react";

import testimonials from "../../config/pages/testimonials.js";
import styles from "../../layouts/TravelPageLayout.module.css";

import TestimonialsAndMetricsSection from "./sections/TestimonialsAndMetrics/index.jsx";

export default function TestimonialsPage() {
  useEffect(() => {
    document.documentElement.setAttribute("data-page-theme", "light-forest");

    return () => {
      document.documentElement.removeAttribute("data-page-theme");
    };
  }, []);

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
