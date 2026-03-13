import hotelBrand from "../../../../config/index.js";
import OurQualityCommitmentHeader from "./OurQualityCommitmentHeader.jsx";
import OurQualityCommitmentContent from "./OurQualityCommitmentContent.jsx";
import styles from "./OurQualityCommitment.module.css";

/**
 * OurQualityCommitmentSection
 * Secção "Compromisso com a Qualidade".
 */
export default function OurQualityCommitmentSection() {
  const section =
    hotelBrand?.pages?.about?.sections?.ourQualityCommitment ?? null;

  if (!section) return null;

  const sectionId = section?.id ?? "our-quality-commitment";
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
