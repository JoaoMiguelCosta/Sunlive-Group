import styles from "./EducationCareersSelector.module.css";

function hasItems(value) {
  return Array.isArray(value) && value.length > 0;
}

export default function EducationCareersSelector({
  selector,
  items,
  activeItem,
  onSelect,
}) {
  if (!hasItems(items) || !activeItem) return null;

  return (
    <aside
      className={styles.selector}
      aria-label={selector?.ariaLabel || "Selecionar percurso profissional"}
    >
      {selector?.label ? (
        <p className={styles.selectorLabel}>{selector.label}</p>
      ) : null}

      <div className={styles.selectorList}>
        {items.map((item) => {
          const isActive = item.id === activeItem.id;

          return (
            <button
              key={item.id}
              type="button"
              className={`${styles.selectorButton} ${
                isActive ? styles.selectorButtonActive : ""
              }`}
              aria-pressed={isActive}
              onClick={() => onSelect(item.id)}
            >
              <span className={styles.selectorButtonInner}>
                <span className={styles.selectorTextWrap}>
                  <span className={styles.selectorTitle}>
                    {item.tabLabel || item.title}
                  </span>

                  {item.duration ? (
                    <span className={styles.selectorMeta}>{item.duration}</span>
                  ) : null}
                </span>

                <span className={styles.selectorArrow} aria-hidden="true">
                  →
                </span>
              </span>
            </button>
          );
        })}
      </div>
    </aside>
  );
}
