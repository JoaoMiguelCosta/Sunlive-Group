import hotelBrand from "../../../../config/index.js";
import HotelSectionHeader from "../../../../shared/ui/HotelSectionHeader/HotelSectionHeader.jsx";

import styles from "./MobilityParkingIntro.module.css";

export default function MobilityParkingIntro() {
  const parking =
    hotelBrand?.pages?.facilities?.sections?.mobility?.parking ?? null;

  if (!parking) return null;

  return (
    <div className={styles.block}>
      <HotelSectionHeader label={parking.headerLabel} />

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
