import styles from "./HotelOfferPanel.module.css";

function isValidText(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function getValidItems(items) {
  return Array.isArray(items)
    ? items.filter((item) => item && isValidText(item.id))
    : [];
}

function getValidHighlights(highlights) {
  return Array.isArray(highlights)
    ? highlights.filter((item) => item && isValidText(item.id))
    : [];
}

/**
 * HotelOfferPanel
 *
 * Props:
 * - eyebrow?: string
 * - title: string
 * - intro?: string
 * - items?: Array<{ id: string, title: string, description?: string, Icon?: ReactComponent }>
 * - highlightsTitle?: string
 * - highlights?: Array<{ id: string, text: string }>
 * - ctaLabel?: string
 * - onCtaClick?: () => void
 * - ctaHref?: string
 * - className?: string
 */
export default function HotelOfferPanel({
  eyebrow,
  title,
  intro,
  items = [],
  highlightsTitle = "Destaques",
  highlights = [],
  ctaLabel,
  onCtaClick,
  ctaHref,
  className = "",
}) {
  const safeItems = getValidItems(items);
  const safeHighlights = getValidHighlights(highlights);

  const hasItems = safeItems.length > 0;
  const hasHighlights = safeHighlights.length > 0;
  const hasSideColumn = Boolean(highlightsTitle || hasHighlights || ctaLabel);

  if (!eyebrow && !title && !intro && !hasItems && !hasSideColumn) {
    return null;
  }

  const wrapClass = [styles.panel, className].filter(Boolean).join(" ");

  const CtaTag = ctaHref ? "a" : "button";
  const ctaProps = ctaHref
    ? { href: ctaHref }
    : { type: "button", onClick: onCtaClick, disabled: !onCtaClick };

  return (
    <div className={wrapClass} role="region" aria-label={title || "Oferta"}>
      {eyebrow || title || intro ? (
        <div className={styles.heroHeader}>
          <div className={styles.heroHeaderInner}>
            {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
            {title ? <h3 className={styles.hTitle}>{title}</h3> : null}
            {intro ? <p className={styles.intro}>{intro}</p> : null}
          </div>
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
                {safeItems.map((item) => (
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
                  {safeHighlights.map((highlight) => (
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
