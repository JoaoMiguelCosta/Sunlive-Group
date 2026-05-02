import {
  getImageStyle,
  getItemKey,
  isValidText,
} from "./testimonialsSection.utils.js";

import styles from "./TestimonialsSelector.module.css";

export default function TestimonialsSelector({
  items,
  sectionId,
  panelId,
  activeItemKey,
  cardActionLabel,
  listAriaLabel,
  onSelect,
}) {
  if (!items?.length) return null;

  return (
    <aside className={styles.selectorPanel} aria-label={listAriaLabel}>
      <div className={styles.selectorGrid} role="tablist">
        {items.map((item, index) => {
          const itemKey = getItemKey(item, index);
          const isActive = itemKey === activeItemKey;
          const tabId = `${sectionId}-tab-${itemKey}`;

          return (
            <button
              key={itemKey}
              id={tabId}
              type="button"
              className={`${styles.selectorCard} ${
                isActive ? styles.selectorCardActive : ""
              }`}
              role="tab"
              aria-selected={isActive}
              aria-controls={panelId}
              onClick={() => onSelect(itemKey)}
            >
              <span className={styles.selectorIndex}>
                {String(index + 1).padStart(2, "0")}
              </span>

              <span
                className={styles.selectorMedia}
                style={getImageStyle(item.image, "thumb")}
                aria-hidden="true"
              >
                <img
                  src={item.image.src}
                  alt=""
                  className={styles.selectorImage}
                  loading="lazy"
                  decoding="async"
                />
              </span>

              <span className={styles.selectorContent}>
                {isValidText(item.category) && (
                  <span className={styles.selectorCategory}>
                    {item.category}
                  </span>
                )}

                <span className={styles.selectorName}>{item.name}</span>

                {isValidText(cardActionLabel) && (
                  <span className={styles.selectorAction}>
                    {cardActionLabel}
                  </span>
                )}
              </span>
            </button>
          );
        })}
      </div>
    </aside>
  );
}
