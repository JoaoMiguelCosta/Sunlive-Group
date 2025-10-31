import styles from "./ServiceCard.module.css";

/**
 * ServiceCard — Card “Prestige” para ofertas/serviços
 * Props:
 * - icon: React.FC (opcional)
 * - title: string
 * - summary: string
 * - items: string[]
 * - includesLabel?: string = "Inclui:"
 * - className?: string
 */
export default function ServiceCard({
  icon: Icon,
  title,
  summary,
  items = [],
  includesLabel = "Inclui:",
  className = "",
}) {
  if (!title) return null;

  return (
    <article className={[styles.card, className].filter(Boolean).join(" ")}>
      <div className={styles.topBand} aria-hidden="true">
        {Icon && (
          <span className={styles.iconWrap}>
            <Icon className={styles.icon} />
          </span>
        )}
      </div>

      <header className={styles.titleBand}>
        <h3 className={styles.title}>{title}</h3>
      </header>

      {summary && (
        <div className={styles.summaryBlock}>
          <p className={styles.summary}>{summary}</p>
        </div>
      )}

      {items?.length > 0 && (
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
      )}
    </article>
  );
}
