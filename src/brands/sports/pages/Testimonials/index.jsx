import testimonials from "../../config/pages/testimonials.js";
import styles from "../../layouts/SportsPageLayout.module.css";
import TestimonialsSection from "./sections/TestimonialsSection/index.jsx";
function isValidText(value) {
  return typeof value === "string" && value.trim().length > 0;
}
export default function TestimonialsPage() {
  const pageData = testimonials;
  const sections = pageData?.sections || pageData;
  const testimonialsSection = sections?.testimonialsSection;
  if (!testimonialsSection) return null;
  const pageId = isValidText(pageData?.ui?.pageId)
    ? pageData.ui.pageId
    : pageData?.id || "testemunhos-sunlive-sports";
  const pageAriaLabel = isValidText(pageData?.ui?.pageAriaLabel)
    ? pageData.ui.pageAriaLabel
    : "Sunlive Sports — Testemunhos";
  return (
    <div className={styles.pageWrap} data-brand="sports">
      {" "}
      <main id={pageId} className={styles.inner} aria-label={pageAriaLabel}>
        {" "}
        <div className={styles.contentFlow}>
          {" "}
          <div className={styles.sections}>
            {" "}
            <TestimonialsSection data={testimonialsSection} />{" "}
          </div>{" "}
        </div>{" "}
      </main>{" "}
    </div>
  );
}
