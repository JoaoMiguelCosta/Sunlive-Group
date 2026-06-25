import facilitiesLeisurePage from "../../../../config/pages/facilitiesLeisure.js";
const mobility = facilitiesLeisurePage.sections.mobility;
import HotelSectionDescription from "../../../../shared/ui/HotelSectionDescription/HotelSectionDescription.jsx";

import styles from "./DescriptionMobility.module.css";

export default function DescriptionMobility() {
  if (!mobility?.description) return null;

  return (
    <div className={styles.card}>
      <div className={styles.inner}>
        <HotelSectionDescription>
          {mobility.description}
        </HotelSectionDescription>
      </div>
    </div>
  );
}
