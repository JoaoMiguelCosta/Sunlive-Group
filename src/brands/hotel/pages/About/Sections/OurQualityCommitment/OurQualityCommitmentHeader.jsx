import hotelBrand from "../../../../config/index.js";
import HotelSectionHeader from "../../../../shared/ui/HotelSectionHeader/HotelSectionHeader.jsx";
import styles from "./OurQualityCommitmentHeader.module.css";

/**
 * OurQualityCommitmentHeader
 * Header da secção "Compromisso com a Qualidade".
 */
export default function OurQualityCommitmentHeader({ titleId }) {
  const section =
    hotelBrand?.pages?.about?.sections?.ourQualityCommitment ?? null;

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
