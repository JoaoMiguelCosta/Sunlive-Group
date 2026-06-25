import about from "../../../../config/pages/about.js";
const ourQualityCommitment = about.sections.qualityCommitment;
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
