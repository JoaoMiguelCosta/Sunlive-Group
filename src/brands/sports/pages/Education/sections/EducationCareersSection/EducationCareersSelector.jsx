import styles from "./EducationCareersSelector.module.css";

function getNextIndex(key, currentIndex, lastIndex) {
  switch (key) {
    case "ArrowRight":
    case "ArrowDown":
      return currentIndex === lastIndex ? 0 : currentIndex + 1;

    case "ArrowLeft":
    case "ArrowUp":
      return currentIndex === 0 ? lastIndex : currentIndex - 1;

    case "Home":
      return 0;

    case "End":
      return lastIndex;

    default:
      return -1;
  }
}

export default function EducationCareersSelector({
  sectionId,
  selector,
  items,
  activeItem,
  onSelect,
}) {
  if (!Array.isArray(items) || items.length === 0 || !activeItem) return null;

  const handleKeyDown = (event, index) => {
    const nextIndex = getNextIndex(event.key, index, items.length - 1);

    if (nextIndex === -1) return;

    event.preventDefault();
    onSelect(items[nextIndex].id);
  };

  return (
    <aside className={styles.selector} aria-label={selector?.ariaLabel}>
      {selector?.label ? (
        <p className={styles.selectorLabel}>{selector.label}</p>
      ) : null}

      <div className={styles.selectorList} role="tablist">
        {items.map((item, index) => {
          const isActive = item.id === activeItem.id;
          const tabId = `${sectionId}-tab-${item.id}`;
          const panelId = `${sectionId}-panel-${item.id}`;

          return (
            <button
              key={item.id}
              id={tabId}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={panelId}
              tabIndex={isActive ? 0 : -1}
              className={`${styles.selectorButton} ${
                isActive ? styles.selectorButtonActive : ""
              }`}
              onClick={() => onSelect(item.id)}
              onKeyDown={(event) => handleKeyDown(event, index)}
            >
              <span className={styles.selectorButtonEdge} aria-hidden="true" />

              <span className={styles.selectorButtonInner}>
                <span className={styles.selectorTextWrap}>
                  {(item.tabLabel || item.title) && (
                    <span className={styles.selectorTitle}>
                      {item.tabLabel || item.title}
                    </span>
                  )}

                  {item.duration ? (
                    <span className={styles.selectorMeta}>{item.duration}</span>
                  ) : null}
                </span>

                <span className={styles.selectorArrowWrap} aria-hidden="true">
                  <span className={styles.selectorArrow}>→</span>
                </span>
              </span>
            </button>
          );
        })}
      </div>
    </aside>
  );
}
