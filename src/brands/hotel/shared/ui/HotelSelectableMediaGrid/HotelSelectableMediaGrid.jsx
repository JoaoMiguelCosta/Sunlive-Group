import styles from "./HotelSelectableMediaGrid.module.css";

function getDefaultCategoryLabel(item) {
  return item?.category === "fruit" ? "Fruta" : "Doce";
}

export default function HotelSelectableMediaGrid({
  items = [],
  activeItemId = null,
  onSelect,
  ariaLabel = "Selecionar item",
  className = "",
  categoryLabelResolver = getDefaultCategoryLabel,
}) {
  const safeItems = Array.isArray(items) ? items.filter(Boolean) : [];

  if (!safeItems.length) return null;

  const rootClassName = [styles.panel, className].filter(Boolean).join(" ");

  return (
    <aside className={rootClassName} aria-label={ariaLabel}>
      <div className={styles.grid}>
        {safeItems.map((item) => {
          const isActive = item.id === activeItemId;
          const categoryLabel = categoryLabelResolver(item);

          return (
            <button
              key={item.id}
              type="button"
              className={`${styles.card} ${isActive ? styles.cardActive : ""}`}
              onClick={() => onSelect?.(item.id)}
              aria-pressed={isActive}
            >
              <div className={styles.media}>
                <img
                  src={item.src}
                  alt={item.alt}
                  className={styles.image}
                  style={{
                    objectPosition: item.imagePosition ?? "center center",
                  }}
                  loading="lazy"
                />
                <div className={styles.overlay} aria-hidden="true" />
              </div>

              <div className={styles.content}>
                <span className={styles.category}>{categoryLabel}</span>
                <span className={styles.title}>{item.title}</span>
              </div>
            </button>
          );
        })}
      </div>
    </aside>
  );
}
