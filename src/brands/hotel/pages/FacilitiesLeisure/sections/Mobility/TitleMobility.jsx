import mobility from "../../../../config/sections/facilities/mobility.js";
import HotelSectionHeader from "../../../../shared/ui/HotelSectionHeader/HotelSectionHeader.jsx";

import styles from "./TitleMobility.module.css";

export default function TitleMobility({ titleId }) {
  if (!mobility?.headerLabel) return null;

  return (
    <div className={styles.wrap}>
      <HotelSectionHeader
        id={titleId}
        label={mobility.headerLabel}
        as="h2"
        align="center"
      />
    </div>
  );
}
