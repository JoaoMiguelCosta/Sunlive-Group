// src/shared/components/Hotel/HotelWhoWeHostGrid/HotelWhoWeHostGrid.jsx
import styles from "./HotelWhoWeHostCard.module.css";

/**
 * HotelWhoWeHostCard
 * Card único de segmento de hóspede para o Hotel.
 *
 * Props:
 *  - id?: string
 *  - icon?: ReactNode
 *  - title: string
 *  - description: string
 *  - statValue?: string   // opcional (para cards de métricas)
 *  - variant?: "default" | "metric"
 */
export default function HotelWhoWeHostGrid({
  id,
  icon = null,
  title,
  description,
  statValue = null,
  variant = "default",
}) {
  const variantClass = styles[variant] ?? "";

  return (
    <article id={id} className={`${styles.card} ${variantClass}`}>
      <div className={styles.cardTop}>
        {icon && <div className={styles.iconCircle}>{icon}</div>}

        {variant === "metric" && statValue && (
          <div className={styles.statValue}>{statValue}</div>
        )}
      </div>

      <div className={styles.titleBand}>
        {/* para variant="metric" vamos esconder isto em CSS */}
        {title && <h3 className={styles.title}>{title}</h3>}
      </div>

      <div className={styles.body}>
        <p className={styles.description}>{description}</p>
      </div>
    </article>
  );
}
