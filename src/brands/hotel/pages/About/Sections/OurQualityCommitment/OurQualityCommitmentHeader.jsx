import ourQualityCommitment from "../../../../config/sections/about/qualityCommitment.js";
import HotelSectionHeader from "../../../../shared/ui/HotelSectionHeader/HotelSectionHeader.jsx";

import styles from "./OurQualityCommitmentHeader.module.css";

export default function OurQualityCommitmentHeader({ titleId }) {
  const section = ourQualityCommitment;

  if (!section?.headerLabel) return null;

  return (
    <div className={styles.headerWrap}>
      <HotelSectionHeader
        id={titleId}
        label={section.headerLabel}
        as="h2"
        align="center"
      />
    </div>
  );
}
