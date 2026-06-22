import ourQualityCommitment from "../../../../config/sections/about/qualityCommitment.js";
import OurQualityCommitmentHeader from "./OurQualityCommitmentHeader.jsx";
import OurQualityCommitmentContent from "./OurQualityCommitmentContent.jsx";

import styles from "./OurQualityCommitment.module.css";

export default function OurQualityCommitmentSection() {
  const section = ourQualityCommitment;

  if (!section) return null;

  const sectionId = section.id ?? "our-quality-commitment";
  const titleId = `${sectionId}-title`;

  return (
    <section
      id={sectionId}
      className={styles.section}
      aria-labelledby={titleId}
    >
      <div className={styles.inner}>
        <OurQualityCommitmentHeader titleId={titleId} />
        <OurQualityCommitmentContent />
      </div>
    </section>
  );
}
