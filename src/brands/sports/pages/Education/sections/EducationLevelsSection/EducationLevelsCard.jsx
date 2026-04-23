import styles from "./EducationLevelsCard.module.css";
import {
  buildHighlightKey,
  getStepLabel,
  hasItems,
} from "./educationLevelsSection.utils.js";

export default function EducationLevelsCard({
  item,
  index,
  sectionId,
  onOpenBook,
}) {
  const stepLabel = getStepLabel(item, index);
  const highlights = hasItems(item?.highlights) ? item.highlights : [];
  const hasBookAction = Boolean(
    item?.book?.label &&
      item?.book?.bookKey &&
      typeof onOpenBook === "function",
  );

  const cardTitleId = item?.title
    ? `${sectionId}-card-title-${stepLabel}`
    : undefined;

  function handleOpenBook() {
    if (!hasBookAction) return;
    onOpenBook(item.book.bookKey);
  }

  return (
    <article className={styles.card} aria-labelledby={cardTitleId}>
      <div className={styles.cardTop}>
        <span className={styles.stepBadge}>{stepLabel}</span>

        {item.ageRange ? (
          <span className={styles.agePill}>{item.ageRange}</span>
        ) : null}
      </div>

      <div className={styles.cardBody}>
        <div className={styles.cardHeader}>
          {item.title ? (
            <h3 id={cardTitleId} className={styles.cardTitle}>
              {item.title}
            </h3>
          ) : null}

          {item.subtitle ? (
            <p className={styles.cardSubtitle}>{item.subtitle}</p>
          ) : null}
        </div>

        {item.description ? (
          <p className={styles.cardDescription}>{item.description}</p>
        ) : null}

        {highlights.length > 0 ? (
          <div className={styles.group}>
            <p className={styles.groupLabel}>
              {item.highlightsLabel || "Pontos-chave:"}
            </p>

            <ul className={styles.featureList}>
              {highlights.map((feature, featureIndex) => (
                <li
                  key={buildHighlightKey(feature, featureIndex)}
                  className={styles.featureItem}
                >
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

      {hasBookAction ? (
        <div className={styles.cardFooter}>
          <button
            type="button"
            className={styles.bookButton}
            onClick={handleOpenBook}
            aria-label={item.book.ariaLabel || item.book.label}
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
