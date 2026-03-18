import { useMemo } from "react";

import hotelBrand, { resolveHotelIcon } from "../../../../config/index.js";

import styles from "./AccessibilitySupport.module.css";

function IconSlot({ icon = null, iconLabel = "", size = "md" }) {
  const sizeClass = size === "sm" ? styles.iconSlotSm : styles.iconSlotMd;

  if (icon) {
    return (
      <span
        className={`${styles.iconSlot} ${sizeClass} ${styles.iconSlotDefault}`}
        aria-label={iconLabel}
      >
        {icon}
      </span>
    );
  }

  return (
    <span
      className={`${styles.iconSlot} ${sizeClass} ${styles.iconSlotDefault}`}
      aria-hidden="true"
    >
      <span className={styles.iconPlaceholder} />
    </span>
  );
}

export default function AccessibilitySupport() {
  const support =
    hotelBrand?.pages?.facilities?.sections?.accessibility?.support ?? null;

  const resolvedSupport = useMemo(() => {
    if (!support) return null;

    const supportIconKey = support?.icon?.key ?? null;
    const SupportIcon = supportIconKey
      ? resolveHotelIcon(hotelBrand?.icons, supportIconKey)
      : null;

    const features = Array.isArray(support.features) ? support.features : [];

    return {
      ...support,
      icon: {
        ...support.icon,
        component: SupportIcon ? <SupportIcon /> : null,
      },
      features,
    };
  }, [support]);

  if (!resolvedSupport) return null;

  const features = Array.isArray(resolvedSupport.features)
    ? resolvedSupport.features
    : [];

  return (
    <div id={resolvedSupport.id} className={styles.block}>
      <div className={styles.grid}>
        <div className={styles.leftColumn}>
          {resolvedSupport.highlightText ? (
            <div className={styles.highlightBanner}>
              <p className={styles.highlightText}>
                {resolvedSupport.highlightText}
              </p>
            </div>
          ) : null}

          <div className={styles.supportCard}>
            <header className={styles.supportHeader}>
              <IconSlot
                icon={resolvedSupport.icon?.component ?? null}
                iconLabel={
                  resolvedSupport.icon?.ariaLabel ??
                  resolvedSupport.title ??
                  ""
                }
                size="md"
              />

              {resolvedSupport.title ? (
                <h3 className={styles.supportTitle}>
                  {resolvedSupport.title}
                </h3>
              ) : null}
            </header>

            {resolvedSupport.description ? (
              <div className={styles.supportBody}>
                <p className={styles.supportDescription}>
                  {resolvedSupport.description}
                </p>
              </div>
            ) : null}
          </div>
        </div>

        <div className={styles.featuresCard}>
          {resolvedSupport.featuresTitle ? (
            <header className={styles.featuresHeader}>
              <h3 className={styles.featuresTitle}>
                {resolvedSupport.featuresTitle}
              </h3>
            </header>
          ) : null}

          {features.length ? (
            <ul className={styles.featuresList}>
              {features.map((feature) => (
                <li key={feature.key} className={styles.featureItem}>
                  <span className={styles.check} aria-hidden="true">
                    ✓
                  </span>

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