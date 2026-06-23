import testimonials from "../../config/pages/testimonials.js";
import styles from "../../layouts/SportsPageLayout.module.css";
import TestimonialsSection from "./sections/TestimonialsSection/index.jsx";

export default function TestimonialsPage() {
  const pageData = testimonials;
  const sections = pageData?.sections;
  const testimonialsSection = sections?.testimonialsSection;

  if (!testimonialsSection) return null;

  const pageId = pageData?.id || "testemunhos-sunlive-sports";
  const pageAriaLabel = pageData?.ui?.pageAriaLabel || "Sunlive Sports — Testemunhos";

  return (
    <div className={styles.pageWrap} data-brand="sports">
      <main id={pageId} className={styles.inner} aria-label={pageAriaLabel}>
        <div className={styles.contentFlow}>
          <div className={styles.sections}>
            <TestimonialsSection data={testimonialsSection} />
          </div>
        </div>
      </main>
    </div>
  );
}
