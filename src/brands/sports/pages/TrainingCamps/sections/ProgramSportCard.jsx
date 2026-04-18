import { useMemo, useState } from "react";
import styles from "./ProgramSportCard.module.css";
import sportsBrand, { resolveSportsIcon } from "../../../config/index.js";
import useInView from "../../../shared/hooks/useInView.js";

function getThemeClass(theme) {
  const themeMap = {
    endurance: styles.themeEndurance,
    precision: styles.themePrecision,
    collective: styles.themeCollective,
    intensity: styles.themeIntensity,
  };

  return themeMap[theme] || styles.themeDefault;
}

function getInitial(text = "") {
  return String(text).trim().charAt(0).toUpperCase();
}

function shouldEnableExpansion(item) {
  return Boolean(
    item?.expandAction?.moreLabel && item?.expandAction?.lessLabel,
  );
}

export default function ProgramSportCard({ item, index = 0 }) {
  if (!item) return null;

  const icons = sportsBrand.icons;
  const Icon = resolveSportsIcon(icons, item.iconKey);

  const focusItems = Array.isArray(item.focusItems) ? item.focusItems : [];
  const pillars = Array.isArray(item.pillars) ? item.pillars : [];
  const hasImage = Boolean(item.image?.src);

  const expandable = shouldEnableExpansion(item);
  const collapsedCount =
    typeof item?.expandAction?.collapsedCount === "number"
      ? item.expandAction.collapsedCount
      : 6;

  const [isExpanded, setIsExpanded] = useState(false);

  const visibleFocusItems = useMemo(() => {
    if (!expandable || isExpanded) return focusItems;
    return focusItems.slice(0, collapsedCount);
  }, [collapsedCount, expandable, focusItems, isExpanded]);

  const hiddenItemsCount = Math.max(focusItems.length - collapsedCount, 0);

  const { ref, inView } = useInView({
    threshold: 0.18,
    once: true,
  });

  const cardClasses = [
    styles.card,
    item.mediaAlign === "left" ? styles.mediaLeft : styles.mediaRight,
    getThemeClass(item.theme),
    styles.reveal,
    inView ? styles.isVisible : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <article
      ref={ref}
      className={cardClasses}
      aria-labelledby={`${item.key}-title`}
      tabIndex={0}
      style={{ "--card-delay": `${index * 70}ms` }}
    >
      <div className={styles.content}>
        <div className={styles.topRow}>
          <div className={styles.identity}>
            <span className={styles.iconBox} aria-hidden="true">
              {Icon ? (
                <Icon />
              ) : (
                <span className={styles.initialFallback}>
                  {getInitial(item.sport)}
                </span>
              )}
            </span>

            <div className={styles.identityText}>
              {item.eyebrow ? (
                <p className={styles.eyebrow}>{item.eyebrow}</p>
              ) : null}

              {item.sport ? (
                <h3 id={`${item.key}-title`} className={styles.title}>
                  {item.sport}
                </h3>
              ) : null}
            </div>
          </div>

          <span className={styles.indexTag} aria-hidden="true">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {item.summary ? <p className={styles.summary}>{item.summary}</p> : null}

        {focusItems.length ? (
          <div className={styles.block} aria-label={item.focusLabel}>
            {item.focusLabel ? (
              <h4 className={styles.blockTitle}>{item.focusLabel}</h4>
            ) : null}

            <div
              id={`${item.key}-focus-items`}
              className={styles.chips}
              role="list"
            >
              {visibleFocusItems.map((focusItem) => (
                <span
                  key={focusItem}
                  className={styles.chip}
                  tabIndex={0}
                  role="listitem"
                >
                  {focusItem}
                </span>
              ))}
            </div>

            {expandable && hiddenItemsCount > 0 ? (
              <button
                type="button"
                className={styles.moreButton}
                onClick={() => setIsExpanded((prev) => !prev)}
                aria-expanded={isExpanded}
                aria-controls={`${item.key}-focus-items`}
              >
                {isExpanded
                  ? item.expandAction.lessLabel
                  : `${item.expandAction.moreLabel} (${hiddenItemsCount})`}
              </button>
            ) : null}
          </div>
        ) : null}

        {item.audienceLabel || item.audience ? (
          <div className={styles.block}>
            {item.audienceLabel ? (
              <h4 className={styles.blockTitle}>{item.audienceLabel}</h4>
            ) : null}

            {item.audience ? (
              <p className={styles.audience}>{item.audience}</p>
            ) : null}
          </div>
        ) : null}

        {pillars.length ? (
          <div className={styles.block}>
            {item.pillarsLabel ? (
              <h4 className={styles.blockTitle}>{item.pillarsLabel}</h4>
            ) : null}

            <ul className={styles.pillarsList}>
              {pillars.map((pillar) => (
                <li key={pillar} className={styles.pillarItem}>
                  {pillar}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>

      <div
        className={styles.mediaPanel}
        aria-hidden={hasImage ? undefined : "true"}
      >
        {hasImage ? (
          <figure className={styles.figure}>
            <img
              src={item.image.src}
              alt={item.image.alt || ""}
              className={styles.image}
              loading="lazy"
            />
            <span className={styles.mediaOverlay} />
            <span className={styles.mediaBadge}>{item.sport}</span>
          </figure>
        ) : (
          <div className={styles.placeholder}>
            <div className={styles.placeholderGlow} />
            <span className={styles.placeholderSport}>{item.sport}</span>
            <span className={styles.placeholderMeta}>{item.focusLabel}</span>
          </div>
        )}
      </div>
    </article>
  );
}
