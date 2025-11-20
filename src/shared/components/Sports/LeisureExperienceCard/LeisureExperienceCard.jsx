// src/shared/components/Sports/LeisureExperienceCard/index.jsx
import styles from "./LeisureExperienceCard.module.css";

/**
 * LeisureExperienceCard — card reutilizável (Sports)
 *
 * Props:
 *  - icon: componente React (ex: HeartIcon)
 *  - title: string
 *  - description: string
 */
export default function LeisureExperienceCard({
  icon: Icon,
  title,
  description,
}) {
  return (
    <article className={styles.card} data-brand="sports">
      <div className={styles.header}>
        {Icon && (
          <div className={styles.iconCircle} aria-hidden="true">
            <Icon className={styles.icon} />
          </div>
        )}

        {title && <h3 className={styles.title}>{title}</h3>}
      </div>

      {description && (
        <div className={styles.body}>
          <p className={styles.text}>{description}</p>
        </div>
      )}
    </article>
  );
}
