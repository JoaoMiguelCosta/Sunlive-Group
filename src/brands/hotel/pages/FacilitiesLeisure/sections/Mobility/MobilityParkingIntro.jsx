import facilitiesLeisurePage from "../../../../config/pages/facilitiesLeisure.js";
const mobility = facilitiesLeisurePage.sections.mobility;
import HotelSectionHeader from "../../../../shared/ui/HotelSectionHeader/HotelSectionHeader.jsx";

import styles from "./MobilityParkingIntro.module.css";

export default function MobilityParkingIntro({ titleId }) {
  const parking = mobility?.parking ?? null;

  if (!parking) return null;

  return (
    <div className={styles.block}>
      <HotelSectionHeader
        id={titleId}
        label={parking.headerLabel}
        as="h3"
        align="center"
      />

      <div className={styles.infoCard}>
        <div className={styles.topRow}>
          <p className={styles.line}>
            {parking.badge ? (
              <span className={styles.badge}>{parking.badge}</span>
            ) : null}

            {parking.badgeSuffix ? (
              <>
                <span className={styles.separator}>•</span>
                <span className={styles.textStrong}>{parking.badgeSuffix}</span>
              </>
            ) : null}
          </p>
        </div>

        <div className={styles.middleRow}>
          <p className={styles.line}>
            {parking.meta ? <span>{parking.meta}</span> : null}

            {parking.meta && parking.metaHighlight ? (
              <span className={styles.separator}>•</span>
            ) : null}

            {parking.metaHighlight ? (
              <span className={styles.textStrong}>{parking.metaHighlight}</span>
            ) : null}
          </p>
        </div>

        {parking.description ? (
          <div className={styles.bottomRow}>
            <p className={styles.description}>{parking.description}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
}
