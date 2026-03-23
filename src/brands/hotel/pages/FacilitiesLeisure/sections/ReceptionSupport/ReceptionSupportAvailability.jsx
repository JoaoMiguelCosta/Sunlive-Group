import hotelBrand from "../../../../config/index.js";

import styles from "./ReceptionSupportAvailability.module.css";

function PlaceholderImage({ label = "Foto" }) {
  return (
    <div className={styles.imagePlaceholder} aria-hidden="true">
      <span className={styles.placeholderLabel}>{label}</span>
    </div>
  );
}

function MediaSlot({ image, fallbackLabel }) {
  if (image?.src) {
    return (
      <img
        className={styles.image}
        src={image.src}
        alt={image.alt ?? ""}
        loading="lazy"
      />
    );
  }

  return <PlaceholderImage label={fallbackLabel} />;
}

export default function ReceptionSupportAvailability() {
  const availability =
    hotelBrand?.pages?.facilities?.sections?.receptionSupport?.availability ??
    null;

  if (!availability) return null;

  const images = Array.isArray(availability.images)
    ? availability.images.slice(0, 2)
    : [];

  const firstImage = images[0] ?? null;
  const secondImage = images[1] ?? null;

  return (
    <div id={availability.id} className={styles.block}>
      <div className={styles.card}>
        <div className={styles.mediaGrid}>
          <div className={styles.mediaItem}>
            <MediaSlot image={firstImage} fallbackLabel="Foto 1" />
          </div>

          <div className={styles.mediaItem}>
            <MediaSlot image={secondImage} fallbackLabel="Foto 2" />
          </div>
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
