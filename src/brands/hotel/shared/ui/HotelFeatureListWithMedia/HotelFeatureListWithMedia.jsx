import styles from "./HotelFeatureListWithMedia.module.css";

function IconSlot({ icon = null, iconLabel = "" }) {
  if (icon) {
    return (
      <span className={styles.iconCircle} aria-label={iconLabel}>
        {icon}
      </span>
    );
  }

  return (
    <span className={styles.iconCircle} aria-hidden="true">
      <span className={styles.iconPlaceholder} />
    </span>
  );
}

function PlaceholderImage() {
  return (
    <div className={styles.imagePlaceholder} aria-hidden="true">
      Foto
    </div>
  );
}

export default function HotelFeatureListWithMedia({
  items = [],
  image = null,
  imageAlt = "",
  mediaPosition = "right",
  className = "",
}) {
  if (!items.length) return null;

  const isMediaLeft = mediaPosition === "left";

  const rootClassName = [
    styles.wrapper,
    isMediaLeft ? styles.mediaLeft : styles.mediaRight,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={rootClassName}>
      <div className={styles.listCard}>
        <ul className={styles.list}>
          {items.map((item) => {
            const hasTwoLines = Boolean(item.title || item.description);
            const primaryText = item.title ?? item.label ?? "";
            const secondaryText = item.description ?? "";

            return (
              <li
                key={item.key}
                className={`${styles.item} ${
                  hasTwoLines ? styles.itemTwoLines : ""
                }`}
              >
                <IconSlot
                  icon={item.icon?.component ?? null}
                  iconLabel={item.icon?.ariaLabel ?? primaryText}
                />

                <div className={styles.textContent}>
                  <span className={styles.label}>{primaryText}</span>

                  {secondaryText ? (
                    <span className={styles.description}>{secondaryText}</span>
                  ) : null}
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <div className={styles.media}>
        {image ? (
          <img
            className={styles.image}
            src={image}
            alt={imageAlt}
            loading="lazy"
          />
        ) : (
          <PlaceholderImage />
        )}
      </div>
    </div>
  );
}