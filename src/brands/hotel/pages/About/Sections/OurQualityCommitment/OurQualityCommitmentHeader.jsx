// src/brands/hotel/components/About/OurQualityCommitment/OurQualityCommitmentHeader.jsx

import hotelBrand from "../../../../configHotel.jsx";
import HotelSectionHeader from "../../../../shared/ui//HotelSectionHeader/HotelSectionHeader.jsx";
import styles from "./OurQualityCommitmentHeader.module.css";

/**
 * OurQualityCommitmentHeader
 * Barra de título "Compromisso com a Qualidade".
 */
export default function OurQualityCommitmentHeader() {
  const section =
    hotelBrand?.pages?.sobre?.sections?.ourQualityCommitment ?? null;

  if (!section) return null;

  const { id, headerLabel } = section;

  return (
    <div className={styles.headerWrap}>
      <HotelSectionHeader id={id} label={headerLabel} as="h2" />
    </div>
  );
}
