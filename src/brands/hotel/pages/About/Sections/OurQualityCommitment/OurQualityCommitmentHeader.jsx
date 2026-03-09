// src/brands/hotel/components/About/OurQualityCommitment/OurQualityCommitmentHeader.jsx
import hotelBrand from "../../../../config/index.js";
import HotelSectionHeader from "../../../../shared/ui/HotelSectionHeader/HotelSectionHeader.jsx";
import styles from "./OurQualityCommitmentHeader.module.css";

/**
 * OurQualityCommitmentHeader
 * Barra de título "Compromisso com a Qualidade".
 */
export default function OurQualityCommitmentHeader() {
  const section =
    hotelBrand?.pages?.about?.sections?.ourQualityCommitment ?? null;

  if (!section) return null;

  const { headerLabel } = section;

  return (
    <div className={styles.headerWrap}>
      <HotelSectionHeader label={headerLabel} as="h2" align="center" />
    </div>
  );
}
