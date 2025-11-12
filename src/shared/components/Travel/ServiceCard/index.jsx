// shared/ui/ServiceCard/ServiceCard.jsx
import { useCallback } from "react";
import styles from "./ServiceCard.module.css";
import { slugify } from "../../../utils/slugify.js";

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
  if (!title) return null;

  const cardId = id || `svc-${slugify(title)}`;
  const detailsId = `${cardId}-details`;

  const handleKey = useCallback(
    (e) => {
      if (!interactive) return;
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onToggle?.();
      }
    },
    [interactive, onToggle]
  );

  return (
    <article
      className={[
        styles.card,
        interactive ? styles.isInteractive : "",
        isOpen ? styles.isOpen : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      data-open={isOpen ? "true" : "false"}
      aria-labelledby={`${cardId}-title`}
    >
      <div
        className={styles.clickArea}
        role={interactive ? "button" : undefined}
        tabIndex={interactive ? 0 : undefined}
        aria-expanded={interactive ? isOpen : undefined}
        aria-controls={interactive ? detailsId : undefined}
        aria-label={
          interactive
            ? isOpen
              ? `Fechar detalhes de ${title}`
              : `Abrir detalhes de ${title}`
            : undefined
        }
        onClick={interactive ? onToggle : undefined}
        onKeyDown={interactive ? handleKey : undefined}
      >
        <div className={styles.topBand} aria-hidden="true">
          {Icon && (
            <span className={styles.iconWrap}>
              <Icon className={styles.icon} />
            </span>
          )}
        </div>

        <header className={styles.titleBand}>
          <h3 id={`${cardId}-title`} className={styles.title}>
            {title}
          </h3>
        </header>

        {summary && (
          <div className={styles.summaryBlock}>
            <p className={styles.summary}>{summary}</p>
          </div>
        )}
      </div>

      {interactive && items?.length > 0 && (
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
            <span className={styles.toggleIcon} aria-hidden="true" />
          </button>
        </div>
      )}

      {items?.length > 0 && (
        <div
          id={detailsId}
          className={styles.details}
          aria-hidden={interactive ? (!isOpen).toString() : "false"}
        >
          <div className={styles.includesBlock}>
            <p className={styles.includesLabel}>{includesLabel}</p>
            <ul className={styles.list}>
              {items.map((txt, i) => (
                <li key={i} className={styles.listItem}>
                  <span className={styles.bullet} aria-hidden="true" />
                  <span>{txt}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </article>
  );
}
