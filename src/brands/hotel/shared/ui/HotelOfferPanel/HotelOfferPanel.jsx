import styles from "./HotelOfferPanel.module.css";

/**
 * HotelOfferPanel
 *
 * Props:
 * - title: string
 * - items?: Array<{ id: string, title: string, description?: string, Icon?: ReactComponent }>
 * - highlightsTitle?: string
 * - highlights?: Array<{ id: string, text: string }>
 * - ctaLabel?: string
 * - onCtaClick?: () => void
 * - ctaHref?: string
 * - className?: string
 */
export default function HotelOfferPanel({
  title,
  items = [],
  highlightsTitle = "Destaques",
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

  const hasItems = Array.isArray(items) && items.length > 0;
  const hasHighlights = Array.isArray(highlights) && highlights.length > 0;
  const hasSideColumn = Boolean(highlightsTitle || hasHighlights || ctaLabel);

  return (
    <div className={wrapClass} role="region" aria-label={title || "Oferta"}>
      {title ? (
        <div className={styles.panelHeader}>
          <h3 className={styles.hTitle}>{title}</h3>
        </div>
      ) : null}

      <div
        className={[
          styles.contentGrid,
          !hasItems ? styles.contentGridOnlySide : "",
          !hasSideColumn ? styles.contentGridOnlyMain : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {hasItems ? (
          <div className={styles.mainColumn}>
            <div className={styles.mainInner}>
              <ul className={styles.items}>
                {items.map((item) => (
                  <li key={item.id} className={styles.item}>
                    {item.Icon ? (
                      <span className={styles.itemIcon} aria-hidden="true">
                        <item.Icon className={styles.iconSvg} />
                      </span>
                    ) : null}

                    <div className={styles.itemText}>
                      {item.title ? (
                        <div className={styles.itemTitle}>{item.title}</div>
                      ) : null}

                      {item.description ? (
                        <div className={styles.itemDesc}>
                          {item.description}
                        </div>
                      ) : null}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : null}

        {hasSideColumn ? (
          <aside className={styles.sideColumn}>
            {highlightsTitle ? (
              <div className={styles.sideHeader}>
                <h4 className={styles.hSubTitle}>{highlightsTitle}</h4>
              </div>
            ) : null}

            {hasHighlights ? (
              <div className={styles.sideBody}>
                <ul className={styles.highlights}>
                  {highlights.map((highlight) => (
                    <li key={highlight.id} className={styles.highlightItem}>
                      <span className={styles.check} aria-hidden="true">
                        ✓
                      </span>
                      <span className={styles.highlightText}>
                        {highlight.text}
                      </span>
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
          </aside>
        ) : null}
      </div>
    </div>
  );
}
