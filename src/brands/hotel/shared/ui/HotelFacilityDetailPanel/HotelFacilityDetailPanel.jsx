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

function PlaceholderImage({ label = "Imagem ilustrativa indisponível" }) {
  return (
    <div className={styles.imagePlaceholder} aria-label={label} role="img">
      <span className={styles.placeholderBadge}>Bem-estar</span>
      <span className={styles.placeholderText}>Sem fotografia disponível</span>
    </div>
  );
}

export default function HotelFacilityDetailPanel({
  id,
  labelledBy,
  badge = "",
  eyebrow = "",
  title,
  description = "",
  icon = null,
  iconLabel = "",
  features = [],
  image = null,
  imageAlt = "",
  imagePosition = "center center",
  fallbackLabel = "Imagem ilustrativa indisponível",
}) {
  const safeFeatures = Array.isArray(features) ? features.filter(Boolean) : [];

  if (!title && !description && !safeFeatures.length && !image) return null;

  return (
    <div
      id={id}
      className={styles.panel}
      role="region"
      aria-labelledby={labelledBy}
    >
      <article className={styles.infoCard}>
        <header className={styles.header}>
          <div className={styles.headerTop}>
            {badge ? <span className={styles.badge}>{badge}</span> : null}
            {eyebrow ? <span className={styles.eyebrow}>{eyebrow}</span> : null}
          </div>

          <div className={styles.headerMain}>
            <IconSlot icon={icon} iconLabel={iconLabel} />
            {title ? <h3 className={styles.title}>{title}</h3> : null}
          </div>

          {description ? (
            <p className={styles.description}>{description}</p>
          ) : null}
        </header>

        {safeFeatures.length ? (
          <ul className={styles.featureList}>
            {safeFeatures.map((feature) => (
              <li key={feature} className={styles.featureItem}>
                <span className={styles.check} aria-hidden="true">
                  ✓
                </span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </article>

      <div className={styles.media}>
        {image ? (
          <img
            className={styles.image}
            src={image}
            alt={imageAlt}
            loading="lazy"
            style={{ objectPosition: imagePosition }}
          />
        ) : (
          <PlaceholderImage label={fallbackLabel} />
        )}
      </div>
    </div>
  );
}
