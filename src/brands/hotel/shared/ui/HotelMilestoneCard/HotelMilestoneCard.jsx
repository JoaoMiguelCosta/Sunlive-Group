// src/shared/components/hotel/HotelMilestoneCard.jsx
import styles from "./HotelMilestoneCard.module.css";

/**
 * HotelMilestoneCard
 * Card em forma de "pill" para marcos cronológicos (2007, 2009, Hoje, etc.)
 *
 * Props:
 *  - title: string (obrigatório)  -> ex.: "2007" ou "Hoje"
 *  - subtitle?: string           -> ex.: "Início da atividade"
 *  - className?: string          -> classes extra opcionais
 *
 * Uso:
 *  <HotelMilestoneCard title="2007" subtitle="Início da atividade" />
 */
export default function HotelMilestoneCard({
  title,
  subtitle,
  className = "",
}) {
  if (!title) return null;

  return (
    <div className={`${styles.wrap} ${className}`}>
      <article className={styles.card}>
        <div className={styles.title}>{title}</div>
        {subtitle && <div className={styles.subtitle}>{subtitle}</div>}
      </article>
    </div>
  );
}
