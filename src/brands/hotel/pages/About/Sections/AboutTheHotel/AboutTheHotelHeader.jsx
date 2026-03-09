// src/brands/hotel/components/About/AboutTheHotel/AboutTheHotelHeader.jsx
import hotelBrand from "../../../../config/index.js";
import HotelSectionHeader from "../../../../shared/ui/HotelSectionHeader/HotelSectionHeader.jsx";
import styles from "./AboutTheHotelHeader.module.css";

/**
 * AboutTheHotelHeader
 * Barra de título "Sobre a Estalagem".
 */
export default function AboutTheHotelHeader() {
  const aboutSection =
    hotelBrand?.pages?.about?.sections?.aboutTheHotel ?? null;

  if (!aboutSection) return null;

  const { headerLabel } = aboutSection;

  return (
    <div className={styles.wrap}>
      <HotelSectionHeader label={headerLabel} as="h2" align="center" />
    </div>
  );
}
