import facilitiesLeisurePage from "../../../../config/pages/facilitiesLeisure.js";
const mobility = facilitiesLeisurePage.sections.mobility;
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
