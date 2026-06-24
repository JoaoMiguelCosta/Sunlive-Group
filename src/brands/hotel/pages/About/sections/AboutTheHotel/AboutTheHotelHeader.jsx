import aboutTheHotel from "../../../../config/sections/about/aboutTheHotel.js";
import HotelSectionHeader from "../../../../shared/ui/HotelSectionHeader/HotelSectionHeader.jsx";

import styles from "./AboutTheHotelHeader.module.css";

export default function AboutTheHotelHeader({ titleId }) {
  const aboutSection = aboutTheHotel;

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
