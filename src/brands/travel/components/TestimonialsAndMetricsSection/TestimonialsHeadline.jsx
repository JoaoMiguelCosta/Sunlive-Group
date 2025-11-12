// src/brands/travel/components/TestimonialsAndMetricsSection/TestimonialsHeadline.jsx
import styles from "./TestimonialsHeadline.module.css";
import HeadlineBlock from "../../../../shared/components/HeadlineBlock/index.jsx"
import travelBrand from "../../ConfigTravel.jsx";

export default function TestimonialsHeadline() {
  const headline = travelBrand?.sections?.testimonialsAndMetrics?.headline;
  if (!headline) return null;

  return (
    <div className={styles.wrap}>
      <HeadlineBlock
        title={headline.title}
        lead={headline.lead}
        align="center"
        variant="banded"
        as="h2"
        max="lg"
      />
    </div>
  );
}
