import hotelBrand from "../../../../config/index.js";
import HotelSectionHeader from "../../../../shared/ui/HotelSectionHeader/HotelSectionHeader.jsx";
import styles from "./AboutTheHotelHeader.module.css";

/**
 * AboutTheHotelHeader
 * Cabeçalho da secção "Sobre a Estalagem".
 */
export default function AboutTheHotelHeader({ titleId }) {
  const aboutSection =
    hotelBrand?.pages?.about?.sections?.aboutTheHotel ?? null;

  if (!aboutSection?.headerLabel) return null;

  return (
    <div className={styles.wrap}>
      <HotelSectionHeader
        id={titleId}
        label={aboutSection.headerLabel}
        as="h2"
        align="center"
      />
    </div>
  );
}
