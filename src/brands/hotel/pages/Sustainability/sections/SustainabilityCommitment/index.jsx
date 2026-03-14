import SustainabilityTitle from "./SustainabilityTitle.jsx";
import SustainabilityDescription from "./SustainabilityDescription.jsx";
import SustainabilityHighlightBanner from "./SustainabilityHighlightBanner.jsx";
import SustainabilityPracticesGrid from "./SustainabilityPracticesGrid.jsx";

import styles from "./SustainabilityCommitment.module.css";

export default function SustainabilityCommitmentSection() {
  const titleId = "sustainability-commitment-title";

  return (
    <section
      id="sustainability-commitment"
      className={styles.section}
      aria-labelledby={titleId}
    >
      <div className={styles.inner}>
        <SustainabilityTitle titleId={titleId} />
        <SustainabilityDescription />
        <SustainabilityHighlightBanner />
        <SustainabilityPracticesGrid />
      </div>
    </section>
  );
}
