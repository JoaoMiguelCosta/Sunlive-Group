import styles from "./EducationLevelsCard.module.css";

function hasItems(value) {
  return Array.isArray(value) && value.length > 0;
}

export default function EducationLevelsCard({
  item,
  index,
  sectionId,
  onOpenBook,
}) {
  const stepLabel = item.step || String(index + 1).padStart(2, "0");
  const hasHighlights = hasItems(item.highlights);
  const hasBook = Boolean(item.book?.label);

  function handleOpenBook() {
    if (typeof onOpenBook === "function" && item.book?.bookKey) {
      onOpenBook(item.book.bookKey);
    }
  }

  return (
    <article className={styles.card}>
      <div className={styles.cardTop}>
        <span className={styles.stepBadge}>{stepLabel}</span>

        {item.ageRange ? (
          <span className={styles.agePill}>{item.ageRange}</span>
        ) : null}
      </div>

      <div className={styles.cardBody}>
        <div className={styles.cardHeader}>
          {item.title ? (
            <h3 className={styles.cardTitle}>{item.title}</h3>
          ) : null}

          {item.subtitle ? (
            <p className={styles.cardSubtitle}>{item.subtitle}</p>
          ) : null}
        </div>

        {item.description ? (
          <p className={styles.cardDescription}>{item.description}</p>
        ) : null}

        {hasHighlights ? (
          <div className={styles.group}>
            <p className={styles.groupLabel}>
              {item.highlightsLabel || "Pontos-chave:"}
            </p>

            <ul className={styles.featureList}>
              {item.highlights.map((feature) => (
                <li key={feature} className={styles.featureItem}>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {item.outcome ? (
          <div className={styles.outcomeBox}>
            <span className={styles.outcomeLabel}>
              {item.outcomeLabel || "Resultado"}
            </span>
            <p className={styles.outcomeText}>{item.outcome}</p>
          </div>
        ) : null}
      </div>

      {hasBook ? (
        <div className={styles.cardFooter}>
          <button
            type="button"
            className={styles.bookButton}
            onClick={handleOpenBook}
            aria-label={item.book?.ariaLabel || item.book?.label}
          >
            <span>{item.book.label}</span>
            <span className={styles.buttonArrow} aria-hidden="true">
              →
            </span>
          </button>
        </div>
      ) : null}
    </article>
  );
}
