import styles from "./HotelProfileCard.module.css";
import { Link } from "react-router-dom";

/**
 * HotelProfileCard
 * Card reutilizável (Hotel) para perfis/segmentos (ex: Atletas/Clubes).
 *
 * Props:
 * - title: string
 * - subtitle?: string
 * - description?: string
 * - ctaLabel?: string (default "Ver Detalhes")
 * - href?: string (se existir, renderiza <Link>)
 * - onClick?: () => void (se não houver href)
 * - Icon?: React.ComponentType<{ className?: string }>
 *      (opcional; se não vier, mostra placeholder)
 * - className?: string
 */
export default function HotelProfileCard({
  title,
  subtitle,
  description,
  ctaLabel = "Ver Detalhes",
  href,
  onClick,
  Icon,
  className = "",
}) {
  const CardTag = href ? Link : "button";
  const cardProps = href
    ? { to: href }
    : { type: "button", onClick, disabled: !onClick };

  return (
    <div className={[styles.card, className].filter(Boolean).join(" ")}>
      <div className={styles.topBand}>
        <div className={styles.medallion} aria-hidden="true">
          {Icon ? (
            <Icon className={styles.icon} />
          ) : (
            <span className={styles.iconPlaceholder} />
          )}
        </div>
      </div>

      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        {subtitle ? <p className={styles.subtitle}>{subtitle}</p> : null}
      </div>

      {description ? (
        <div className={styles.body}>
          <p className={styles.description}>{description}</p>
        </div>
      ) : null}

      <div className={styles.footer}>
        <CardTag className={styles.cta} {...cardProps} aria-label={ctaLabel}>
          <span className={styles.ctaLabel}>{ctaLabel}</span>
          <span className={styles.ctaChevron} aria-hidden="true">
            <svg viewBox="0 0 24 24" width="18" height="18">
              <path
                d="M6 9l6 6 6-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </CardTag>
      </div>
    </div>
  );
}
