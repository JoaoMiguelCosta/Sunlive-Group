import { useMemo } from "react";

import hotelBrand, { resolveHotelIcon } from "../../../../config/index.js";
import useAccordion from "../../../../../../shared/hooks/useAccordion.js";

import styles from "./AccessibilitySupport.module.css";

function SupportIconSlot({ icon = null, iconLabel = "" }) {
  if (icon) {
    return (
      <span
        className={`${styles.supportIcon} ${styles.supportIconDefault}`}
        aria-label={iconLabel}
      >
        {icon}
      </span>
    );
  }

  return (
    <span
      className={`${styles.supportIcon} ${styles.supportIconDefault}`}
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

    const features = Array.isArray(support.features)
      ? support.features.filter(Boolean)
      : [];

    return {
      ...support,
      icon: {
        ...support.icon,
        component: SupportIcon ? <SupportIcon /> : null,
      },
      features,
    };
  }, [support]);

  const features = resolvedSupport?.features ?? [];
  const { isOpen, toggle } = useAccordion(features, { allowMultiple: false });

  if (!resolvedSupport) return null;

  return (
    <div id={resolvedSupport.id} className={styles.block}>
      <div className={styles.grid}>
        <article className={styles.leftColumn}>
          {resolvedSupport.highlightText ? (
            <div className={styles.highlightBanner}>
              <p className={styles.highlightText}>
                {resolvedSupport.highlightText}
              </p>
            </div>
          ) : null}

          <div className={styles.supportCard}>
            <header className={styles.supportHeader}>
              <div className={styles.supportHeaderInner}>
                <SupportIconSlot
                  icon={resolvedSupport.icon?.component ?? null}
                  iconLabel={
                    resolvedSupport.icon?.ariaLabel ??
                    resolvedSupport.title ??
                    ""
                  }
                />

                {resolvedSupport.title ? (
                  <h3 className={styles.supportTitle}>
                    {resolvedSupport.title}
                  </h3>
                ) : null}
              </div>
            </header>

            <div className={styles.supportBody}>
              {resolvedSupport.description ? (
                <div className={styles.supportBodyInner}>
                  <p className={styles.supportDescription}>
                    {resolvedSupport.description}
                  </p>

                  {resolvedSupport?.cta?.label && resolvedSupport?.cta?.href ? (
                    <a
                      className={styles.supportCta}
                      href={resolvedSupport.cta.href}
                      aria-label={
                        resolvedSupport.cta.ariaLabel ??
                        resolvedSupport.cta.label
                      }
                    >
                      {resolvedSupport.cta.label}
                    </a>
                  ) : null}
                </div>
              ) : null}
            </div>
          </div>
        </article>

        <article className={styles.featuresCard}>
          {resolvedSupport.featuresTitle ? (
            <header className={styles.featuresHeader}>
              <h3 className={styles.featuresTitle}>
                {resolvedSupport.featuresTitle}
              </h3>
            </header>
          ) : null}

          {features.length ? (
            <ul className={styles.featuresList}>
              {features.map((feature) => {
                const open = isOpen(feature.key);
                const buttonId = `${resolvedSupport.id}-${feature.key}-button`;
                const panelId = `${resolvedSupport.id}-${feature.key}-panel`;

                return (
                  <li
                    key={feature.key}
                    className={`${styles.featureItem} ${
                      open ? styles.featureItemOpen : ""
                    }`}
                  >
                    <button
                      type="button"
                      id={buttonId}
                      className={styles.featureTrigger}
                      onClick={() => toggle(feature.key)}
                      aria-expanded={open}
                      aria-controls={panelId}
                    >
                      <span className={styles.check} aria-hidden="true">
                        ✓
                      </span>

                      <span className={styles.featureMain}>
                        <span className={styles.featureLabel}>
                          {feature.label}
                        </span>

                        <span
                          className={`${styles.chevron} ${
                            open ? styles.chevronOpen : ""
                          }`}
                          aria-hidden="true"
                        >
                          ▾
                        </span>
                      </span>
                    </button>

                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      className={`${styles.featurePanel} ${
                        open ? styles.featurePanelOpen : ""
                      }`}
                    >
                      <div className={styles.featurePanelInner}>
                        <p className={styles.featureDetail}>{feature.detail}</p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          ) : null}
        </article>
      </div>
    </div>
  );
}
