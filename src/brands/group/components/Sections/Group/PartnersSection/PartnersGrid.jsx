import styles from "./PartnersGrid.module.css";

import useSmartAnchorNav from "../../../../../../shared/hooks/useSmartAnchorNav.js";

function isValidText(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function getValidItems(items) {
  return Array.isArray(items)
    ? items.filter((item) => item && typeof item === "object" && item.key)
    : [];
}

function getGridCountClass(count) {
  if (count === 1) return styles.countOne;
  if (count === 2) return styles.countTwo;
  if (count === 4) return styles.countFour;
  if (count === 5) return styles.countFive;

  return "";
}

export default function PartnersGrid({ items = [] }) {
  const validItems = getValidItems(items);

  const { handleSmartAnchorClick: toLogos } = useSmartAnchorNav({
    targetPath: "/sunlive-group/logos",
    offset: 24,
  });

  if (!validItems.length) return null;

  const gridClassName = [styles.grid, getGridCountClass(validItems.length)]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={gridClassName} role="list" data-count={validItems.length}>
      {validItems.map((item) => {
        const isDisabled = Boolean(item.disabled) || !isValidText(item.href);
        const label = isValidText(item.label) ? item.label : item.key;

        if (isDisabled) {
          return (
            <div
              key={item.key}
              role="listitem"
              className={`${styles.card} ${styles.disabled}`}
              aria-disabled="true"
            >
              <span className={styles.label}>{label}</span>
            </div>
          );
        }

        return (
          <a
            key={item.key}
            role="listitem"
            href={item.href}
            className={styles.card}
            onClick={(event) => toLogos(event, item.href, false)}
          >
            <span className={styles.label}>{label}</span>

            <span className={styles.arrow} aria-hidden="true">
              →
            </span>
          </a>
        );
      })}
    </div>
  );
}
