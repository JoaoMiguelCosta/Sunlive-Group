import { useCallback } from "react";
import styles from "./LogisticsServiceCard.module.css";
import { slugify } from "../../shared/utils/slugify.js";

export default function LogisticsServiceCard({
  icon: Icon,
  tag,
  title,
  summary,
  items = [],
  includesLabel = "Inclui:",
  interactive = false,
  isOpen = false,
  onToggle,
  id,
  openLabel = "Ver detalhes",
  closeLabel = "Recolher",
  openDetailsLabel = "Abrir detalhes de",
  closeDetailsLabel = "Fechar detalhes de",
}) {
  if (!title) return null;

  const safeItems = Array.isArray(items)
    ? items.map((item) => String(item).trim()).filter(Boolean)
    : [];

  const hasDetails = safeItems.length > 0;
  const cardId = id || `logistics-card-${slugify(title)}`;
  const detailsId = `${cardId}-details`;

  const handleKey = useCallback(
    (event) => {
      if (!interactive || !hasDetails) return;

      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        onToggle?.();
      }
    },
    [interactive, hasDetails, onToggle],
  );

  return (
    <article
      className={[
        styles.card,
        interactive ? styles.isInteractive : "",
        isOpen ? styles.isOpen : "",
      ]
        .filter(Boolean)
        .join(" ")}
      aria-labelledby={`${cardId}-title`}
      data-open={isOpen ? "true" : "false"}
    >
      <div
        className={styles.shell}
        role={interactive && hasDetails ? "button" : undefined}
        tabIndex={interactive && hasDetails ? 0 : undefined}
        aria-expanded={interactive && hasDetails ? isOpen : undefined}
        aria-controls={interactive && hasDetails ? detailsId : undefined}
        aria-label={
          interactive && hasDetails
            ? isOpen
              ? `${closeDetailsLabel} ${title}`
              : `${openDetailsLabel} ${title}`
            : undefined
        }
        onClick={interactive && hasDetails ? onToggle : undefined}
        onKeyDown={interactive && hasDetails ? handleKey : undefined}
      >
        <div className={styles.topRow}>
          {tag ? <span className={styles.tag}>{tag}</span> : <span />}

          {Icon ? (
            <span className={styles.iconWrap} aria-hidden="true">
              <Icon className={styles.icon} />
            </span>
          ) : null}
        </div>

        <header className={styles.header}>
          <h3 id={`${cardId}-title`} className={styles.title}>
            {title}
          </h3>
        </header>

        {summary ? <p className={styles.summary}>{summary}</p> : null}
      </div>

      {interactive && hasDetails ? (
        <div className={styles.actions}>
          <button
            type="button"
            className={styles.toggleBtn}
            aria-expanded={isOpen}
            aria-controls={detailsId}
            aria-label={isOpen ? closeLabel : openLabel}
            onClick={onToggle}
          >
            <span>{isOpen ? closeLabel : openLabel}</span>
            <span
              className={[styles.chevron, isOpen ? styles.chevronOpen : ""]
                .filter(Boolean)
                .join(" ")}
              aria-hidden="true"
            />
          </button>
        </div>
      ) : null}

      {hasDetails ? (
        <div
          id={detailsId}
          className={styles.details}
          aria-hidden={interactive ? !isOpen : false}
        >
          <div className={styles.detailsInner}>
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
