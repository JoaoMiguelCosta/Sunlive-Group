// src/brands/hotel/components/About/OurQualityCommitment/index.jsx

import hotelBrand from "../../../configHotel.jsx";
import OurQualityCommitmentHeader from "./OurQualityCommitmentHeader.jsx";
import OurQualityCommitmentContent from "./OurQualityCommitmentContent.jsx";
import styles from "./OurQualityCommitment.module.css";

/**
 * OurQualityCommitmentSection
 * Wrapper da secção "Compromisso com a Qualidade".
 */
export default function OurQualityCommitmentSection() {
  const section =
    hotelBrand?.pages?.sobre?.sections?.ourQualityCommitment ?? null;

  if (!section) return null;

  const { id, headerLabel } = section;

  return (
    <section id={id} className={styles.section} aria-label={headerLabel}>
      <div className={styles.inner}>
        <OurQualityCommitmentHeader />
        <OurQualityCommitmentContent />
      </div>
    </section>
  );
}
