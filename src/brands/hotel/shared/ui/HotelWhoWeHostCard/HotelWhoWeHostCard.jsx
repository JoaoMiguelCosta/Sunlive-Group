import styles from "./HotelWhoWeHostCard.module.css";

/**
 * HotelWhoWeHostCard
 *
 * Props:
 * - id?: string
 * - icon?: ReactNode
 * - eyebrow?: string
 * - title?: string
 * - description?: string
 * - variant?: "default" | "featured"
 * - className?: string
 */
export default function HotelWhoWeHostCard({
  id,
  icon = null,
  eyebrow = "",
  title = "",
  description = "",
  variant = "default",
  className = "",
}) {
  if (!title && !description) return null;

  const variantClass = styles[variant] ?? "";

  return (
    <article
      id={id}
      className={[styles.card, variantClass, className]
        .filter(Boolean)
        .join(" ")}
    >
      <div className={styles.inner}>
        <div className={styles.topRow}>
          {icon ? <div className={styles.iconWrap}>{icon}</div> : null}

          {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
        </div>

        {title ? <h3 className={styles.title}>{title}</h3> : null}

        {description ? (
          <p className={styles.description}>{description}</p>
        ) : null}
      </div>
    </article>
  );
}
