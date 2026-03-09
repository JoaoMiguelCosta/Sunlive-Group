// src/shared/ui/HotelMilestoneCard/HotelMilestoneCard.jsx
import styles from "./HotelMilestoneCard.module.css";

/**
 * HotelMilestoneCard
 * Card em forma de "pill" para marcos cronológicos (2007, 2009, Hoje, etc.)
 *
 * Props:
 *  - title: string (obrigatório)
 *  - subtitle?: string
 *  - className?: string
 */
export default function HotelMilestoneCard({
  title,
  subtitle,
  className = "",
}) {
  if (!title) return null;

  return (
    <div className={[styles.wrap, className].filter(Boolean).join(" ")}>
      <article className={styles.card}>
        <div className={styles.title}>{title}</div>
        {subtitle ? <div className={styles.subtitle}>{subtitle}</div> : null}
      </article>
    </div>
  );
}
