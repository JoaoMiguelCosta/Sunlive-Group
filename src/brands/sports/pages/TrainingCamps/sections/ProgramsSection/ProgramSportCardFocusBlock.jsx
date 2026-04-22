import styles from "./ProgramSportCardFocusBlock.module.css";

export default function ProgramSportCardFocusBlock({
  itemKey,
  focusLabel,
  focusItems,
  expandable,
  hiddenItemsCount,
  isExpanded,
  expandAction,
  onToggleExpand,
}) {
  const items = Array.isArray(focusItems) ? focusItems : [];
  if (!items.length) return null;

  return (
    <div className={styles.block} aria-label={focusLabel}>
      {focusLabel ? <h4 className={styles.blockTitle}>{focusLabel}</h4> : null}

      <div id={`${itemKey}-focus-items`} className={styles.chips} role="list">
        {items.map((focusItem) => (
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
          onClick={onToggleExpand}
          aria-expanded={isExpanded}
          aria-controls={`${itemKey}-focus-items`}
        >
          {isExpanded
            ? expandAction?.lessLabel
            : `${expandAction?.moreLabel} (${hiddenItemsCount})`}
        </button>
      ) : null}
    </div>
  );
}
