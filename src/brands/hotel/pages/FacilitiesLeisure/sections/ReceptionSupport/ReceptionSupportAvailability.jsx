import hotelBrand from "../../../../config/index.js";

import styles from "./ReceptionSupportAvailability.module.css";

function PlaceholderImage() {
  return (
    <div className={styles.imagePlaceholder} aria-hidden="true">
      Foto
    </div>
  );
}

export default function ReceptionSupportAvailability() {
  const availability =
    hotelBrand?.pages?.facilities?.sections?.receptionSupport?.availability ??
    null;

  if (!availability) return null;

  return (
    <div id={availability.id} className={styles.block}>
      <div className={styles.card}>
        <div className={styles.media}>
          {availability.image ? (
            <img
              className={styles.image}
              src={availability.image}
              alt={availability.imageAlt ?? ""}
              loading="lazy"
            />
          ) : (
            <PlaceholderImage />
          )}
        </div>

        {availability.caption ? (
          <div className={styles.captionBar}>
            <p className={styles.caption}>{availability.caption}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
}
