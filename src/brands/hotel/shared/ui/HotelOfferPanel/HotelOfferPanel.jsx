// src/shared/components/Hotel/HotelOfferPanel/HotelOfferPanel.jsx
import styles from "./HotelOfferPanel.module.css";

/**
 * HotelOfferPanel
 *
 * Props:
 * - title: string (ex: "O que disponibilizamos:")
 * - items?: Array<{ id: string, title: string, description?: string, Icon?: ReactComponent }>
 * - highlightsTitle?: string (ex: "Destaques:")
 * - highlights?: Array<{ id: string, text: string }>
 * - ctaLabel?: string
 * - onCtaClick?: () => void
 * - ctaHref?: string
 * - className?: string
 */
export default function HotelOfferPanel({
  title,
  items = [],
  highlightsTitle = "Destaques:",
  highlights = [],
  ctaLabel,
  onCtaClick,
  ctaHref,
  className = "",
}) {
  const wrapClass = [styles.panel, className].filter(Boolean).join(" ");

  const CtaTag = ctaHref ? "a" : "button";
  const ctaProps = ctaHref
    ? { href: ctaHref }
    : { type: "button", onClick: onCtaClick, disabled: !onCtaClick };

  return (
    <section className={wrapClass} aria-label={title || "Oferta"}>
      {title ? <h3 className={styles.hTitle}>{title}</h3> : null}

      {Array.isArray(items) && items.length ? (
        <div className={styles.box}>
          <ul className={styles.items}>
            {items.map((item) => (
              <li key={item.id} className={styles.item}>
                <span className={styles.itemIcon} aria-hidden="true">
                  {item.Icon ? (
                    <item.Icon className={styles.iconSvg} />
                  ) : (
                    <span className={styles.iconPlaceholder} />
                  )}
                </span>

                <div className={styles.itemText}>
                  <div className={styles.itemTitle}>{item.title}</div>
                  {item.description ? (
                    <div className={styles.itemDesc}>{item.description}</div>
                  ) : null}
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {highlightsTitle ? (
        <h4 className={styles.hSubTitle}>{highlightsTitle}</h4>
      ) : null}

      {Array.isArray(highlights) && highlights.length ? (
        <div className={styles.box}>
          <ul className={styles.highlights}>
            {highlights.map((highlight) => (
              <li key={highlight.id} className={styles.highlightItem}>
                <span className={styles.check} aria-hidden="true">
                  ✓
                </span>
                <span className={styles.highlightText}>{highlight.text}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {ctaLabel ? (
        <div className={styles.ctaWrap}>
          <CtaTag className={styles.cta} {...ctaProps}>
            {ctaLabel}
          </CtaTag>
        </div>
      ) : null}
    </section>
  );
}
