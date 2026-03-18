import styles from "./HotelFacilityDetailPanel.module.css";

function IconSlot({ icon: Icon = null, iconLabel = "" }) {
  if (Icon) {
    return (
      <span className={styles.iconCircle} aria-label={iconLabel}>
        <Icon />
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

export default function HotelFacilityDetailPanel({
  id,
  labelledBy,
  title,
  icon = null,
  iconLabel = "",
  features = [],
  image = null,
  imageAlt = "",
}) {
  return (
    <div
      id={id}
      className={styles.panel}
      role="region"
      aria-labelledby={labelledBy}
    >
      <div className={styles.infoCard}>
        <header className={styles.header}>
          <IconSlot icon={icon} iconLabel={iconLabel} />
          <h3 className={styles.title}>{title}</h3>
        </header>

        <ul className={styles.featureList}>
          {features.map((feature) => (
            <li key={feature} className={styles.featureItem}>
              <span className={styles.check} aria-hidden="true">
                ✓
              </span>
              <span>{feature}</span>
            </li>
          ))}
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