import facilitiesLeisurePage from "../../../../config/pages/facilitiesLeisure.js";
const mobility = facilitiesLeisurePage.sections.mobility;
import HotelSectionHeader from "../../../../shared/ui/HotelSectionHeader/HotelSectionHeader.jsx";
import HotelSectionDescription from "../../../../shared/ui/HotelSectionDescription/HotelSectionDescription.jsx";

import styles from "./MobilityBikesIntro.module.css";

export default function MobilityBikesIntro({ titleId }) {
  const bikes = mobility?.bikes ?? null;

  if (!bikes) return null;

  return (
    <div className={styles.block}>
      <HotelSectionHeader
        id={titleId}
        label={bikes.headerLabel}
        as="h3"
        align="center"
      />

      {bikes.description ? (
        <div className={styles.descriptionWrap}>
          <HotelSectionDescription>{bikes.description}</HotelSectionDescription>
        </div>
      ) : null}
    </div>
  );
}
