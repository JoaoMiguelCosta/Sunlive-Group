import { useCallback } from "react";

import { slugify } from "../../utils/slugify.js";

import styles from "./ServiceCard.module.css";

export default function ServiceCard({
  icon: Icon,
  title,
  summary,
  items = [],
  includesLabel = "Inclui:",
  className = "",
  interactive = false,
  isOpen = false,
  onToggle,
  id,
}) {
  const handleKeyDown = useCallback(
    (event) => {
      if (!interactive) {
        return;
      }

      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        onToggle?.();
      }
    },
    [interactive, onToggle],
  );

  if (!title) {
    return null;
  }

  const safeItems = Array.isArray(items)
    ? items.map((item) => String(item).trim()).filter(Boolean)
    : [];

  const hasDetails = safeItems.length > 0;
  const cardId = id || `svc-${slugify(title)}`;
  const detailsId = `${cardId}-details`;

  const classNames = [
    styles.card,
    interactive ? styles.isInteractive : "",
    isOpen ? styles.isOpen : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <article
      className={classNames}
      data-open={isOpen ? "true" : "false"}
      aria-labelledby={`${cardId}-title`}
    >
      <div
        className={styles.clickArea}
        role={interactive ? "button" : undefined}
        tabIndex={interactive ? 0 : undefined}
        aria-expanded={interactive && hasDetails ? isOpen : undefined}
        aria-controls={interactive && hasDetails ? detailsId : undefined}
        aria-label={
          interactive && hasDetails
            ? isOpen
              ? `Fechar detalhes de ${title}`
              : `Abrir detalhes de ${title}`
            : undefined
        }
        onClick={interactive ? onToggle : undefined}
        onKeyDown={interactive ? handleKeyDown : undefined}
      >
        <div className={styles.topBand} aria-hidden="true">
          {Icon ? (
            <span className={styles.iconWrap}>
              <Icon className={styles.icon} />
            </span>
          ) : null}
        </div>

        <header className={styles.titleBand}>
          <h3 id={`${cardId}-title`} className={styles.title}>
            {title}
          </h3>
        </header>

        {summary ? (
          <div className={styles.summaryBlock}>
            <p className={styles.summary}>{summary}</p>
          </div>
        ) : null}
      </div>

      {interactive && hasDetails ? (
        <div className={styles.toggleWrap}>
          <button
            type="button"
            className={[styles.toggleBtn, isOpen ? styles.open : ""]
              .filter(Boolean)
              .join(" ")}
            aria-expanded={isOpen}
            aria-controls={detailsId}
            aria-label={isOpen ? "Recolher" : "Expandir"}
            onClick={onToggle}
          >
            <span className={styles.toggleText}>
              {isOpen ? "Recolher" : "Ver detalhes"}
            </span>

            <span className={styles.toggleIcon} aria-hidden="true" />
          </button>
        </div>
      ) : null}

      {hasDetails ? (
        <div
          id={detailsId}
          className={styles.details}
          aria-hidden={interactive ? !isOpen : false}
        >
          <div className={styles.includesBlock}>
            <p className={styles.includesLabel}>{includesLabel}</p>

            <ul className={styles.list}>
              {safeItems.map((text, index) => (
                <li key={`${cardId}-item-${index}`} className={styles.listItem}>
                  <span className={styles.bullet} aria-hidden="true" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}
    </article>
  );
}
