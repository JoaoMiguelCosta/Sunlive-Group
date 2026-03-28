import hotelBrand from "../../../../config/index.js";
import CTAButton from "../../../../../../shared/ui/CTAButton/CTAButton.jsx";

import styles from "./CustomizedQuotesActions.module.css";

export default function CustomizedQuotesActions() {
  const includedInQuote =
    hotelBrand?.pages?.events?.sections?.customizedQuotes?.includedInQuote ??
    null;

  const quoteCallout =
    hotelBrand?.pages?.events?.sections?.customizedQuotes?.quoteCallout ?? null;

  const actions =
    hotelBrand?.pages?.events?.sections?.customizedQuotes?.actions ?? [];

  const includedItems = Array.isArray(includedInQuote?.items)
    ? includedInQuote.items
    : [];

  const hasIncluded = Boolean(includedInQuote?.title || includedItems.length);
  const hasCallout = Boolean(quoteCallout?.text);
  const hasActions = actions.length > 0;

  if (!hasIncluded && !hasCallout && !hasActions) return null;

  return (
    <div className={styles.block}>
      {hasIncluded ? (
        <div
          className={styles.includesPanel}
          aria-label={includedInQuote?.title || "O que incluímos no orçamento"}
        >
          {includedInQuote?.title ? (
            <div className={styles.includesHeader}>
              <h3 className={styles.includesTitle}>{includedInQuote.title}</h3>
            </div>
          ) : null}

          {includedItems.length ? (
            <div className={styles.includesBody}>
              <div className={styles.includesGrid}>
                {includedItems.map((item) => (
                  <div key={item.id} className={styles.includeItem}>
                    <span className={styles.check} aria-hidden="true">
                      ✓
                    </span>

                    <span className={styles.includeLabel}>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      ) : null}

      {(hasCallout || hasActions) && (
        <div className={styles.bottomPanel}>
          {hasCallout ? (
            <div className={styles.callout}>
              <p className={styles.calloutText}>{quoteCallout.text}</p>
            </div>
          ) : null}

          {hasActions ? (
            <div className={styles.actions}>
              {actions.map((action) => (
                <CTAButton
                  key={action.id}
                  href={action.href}
                  label={action.label}
                  ariaLabel={action.ariaLabel || action.label}
                  icon={action.icon?.key === "phone" ? "phone" : undefined}
                  variant="hotel"
                  tone="strong"
                  blink={false}
                  className={styles.ctaButton}
                />
              ))}
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}
