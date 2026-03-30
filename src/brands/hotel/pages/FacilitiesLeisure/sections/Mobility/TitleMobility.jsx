import hotelBrand from "../../../../config/index.js";
import HotelSectionHeader from "../../../../shared/ui/HotelSectionHeader/HotelSectionHeader.jsx";

import styles from "./TitleMobility.module.css";

export default function TitleMobility({ titleId }) {
  const mobility = hotelBrand?.pages?.facilities?.sections?.mobility ?? null;

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
