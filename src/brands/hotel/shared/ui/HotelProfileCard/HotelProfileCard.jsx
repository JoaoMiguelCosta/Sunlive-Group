import { Link } from "react-router-dom";
import styles from "./HotelProfileCard.module.css";

/**
 * HotelProfileCard
 *
 * Props:
 * - title: string
 * - subtitle?: string
 * - description?: string
 * - ctaLabel?: string
 * - href?: string
 * - onClick?: () => void
 * - detailsOpen?: boolean
 * - Icon?: React.ComponentType<{ className?: string }>
 * - className?: string
 */
export default function HotelProfileCard({
  title,
  subtitle,
  description,
  ctaLabel = "Abrir detalhes",
  href,
  onClick,
  detailsOpen = false,
  Icon,
  className = "",
}) {
  const isLink = Boolean(href);
  const CardTag = isLink ? Link : "button";

  const cardProps = isLink
    ? { to: href }
    : {
        type: "button",
        onClick,
        disabled: !onClick,
        "aria-expanded": detailsOpen,
      };

  return (
    <article
      className={[styles.card, detailsOpen ? styles.cardOpen : "", className]
        .filter(Boolean)
        .join(" ")}
    >
      <div className={styles.topBand} aria-hidden="true">
        <div className={styles.topGlow} />
        <div className={styles.medallion}>
          {Icon ? (
            <Icon className={styles.icon} />
          ) : (
            <span className={styles.iconPlaceholder} />
          )}
        </div>
      </div>

      <div className={styles.header}>
        {title ? <h3 className={styles.title}>{title}</h3> : null}
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

          <span
            className={[
              styles.ctaChevron,
              detailsOpen ? styles.ctaChevronOpen : "",
            ]
              .filter(Boolean)
              .join(" ")}
            aria-hidden="true"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" focusable="false">
              <path
                d="M6 9l6 6 6-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </CardTag>
      </div>
    </article>
  );
}
