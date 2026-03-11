import hotelBrand from "../../../../config/index.js";

import styles from "./AccessibilitySupport.module.css";

function IconSlot({
  icon = null,
  iconLabel = "",
  size = "md",
  variant = "default",
}) {
  const sizeClass = size === "sm" ? styles.iconSlotSm : styles.iconSlotMd;
  const variantClass =
    variant === "check" ? styles.iconSlotCheck : styles.iconSlotDefault;

  if (icon) {
    return (
      <span
        className={`${styles.iconSlot} ${sizeClass} ${variantClass}`}
        aria-label={iconLabel}
      >
        {icon}
      </span>
    );
  }

  return (
    <span
      className={`${styles.iconSlot} ${sizeClass} ${variantClass}`}
      aria-hidden="true"
    >
      <span className={styles.iconPlaceholder} />
    </span>
  );
}

export default function AccessibilitySupport() {
  const support =
    hotelBrand?.pages?.facilities?.sections?.accessibility?.support ?? null;

  if (!support) return null;

  const features = Array.isArray(support.features) ? support.features : [];

  return (
    <div id={support.id} className={styles.block}>
      <div className={styles.grid}>
        <div className={styles.leftColumn}>
          {support.highlightText ? (
            <div className={styles.highlightBanner}>
              <p className={styles.highlightText}>{support.highlightText}</p>
            </div>
          ) : null}

          <div className={styles.supportCard}>
            <header className={styles.supportHeader}>
              <IconSlot
                icon={support.icon?.component ?? null}
                iconLabel={support.icon?.ariaLabel ?? support.title ?? ""}
                size="md"
              />

              {support.title ? (
                <h3 className={styles.supportTitle}>{support.title}</h3>
              ) : null}
            </header>

            {support.description ? (
              <div className={styles.supportBody}>
                <p className={styles.supportDescription}>
                  {support.description}
                </p>
              </div>
            ) : null}
          </div>
        </div>

        <div className={styles.featuresCard}>
          {support.featuresTitle ? (
            <header className={styles.featuresHeader}>
              <h3 className={styles.featuresTitle}>{support.featuresTitle}</h3>
            </header>
          ) : null}

          {features.length ? (
            <ul className={styles.featuresList}>
              {features.map((feature) => (
                <li key={feature.key} className={styles.featureItem}>
                  <IconSlot
                    icon={feature.icon?.component ?? null}
                    iconLabel={feature.icon?.ariaLabel ?? feature.label ?? ""}
                    size="sm"
                    variant="check"
                  />

                  <span className={styles.featureLabel}>{feature.label}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </div>
  );
}
