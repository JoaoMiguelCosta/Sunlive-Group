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

  if (!includedInQuote && !quoteCallout && !actions.length) return null;

  return (
    <div className={styles.block}>
      {includedInQuote ? (
        <section
          className={styles.includesPanel}
          aria-label={includedInQuote.title || "O que incluímos no orçamento"}
        >
          {includedInQuote.title ? (
            <h3 className={styles.includesTitle}>{includedInQuote.title}</h3>
          ) : null}

          {includedInQuote.items?.length ? (
            <div className={styles.includesGrid}>
              {includedInQuote.items.map((item) => (
                <div key={item.id} className={styles.includeItem}>
                  <span className={styles.check} aria-hidden="true">
                    ✓
                  </span>

                  <span className={styles.includeLabel}>{item.label}</span>
                </div>
              ))}
            </div>
          ) : null}
        </section>
      ) : null}

      {quoteCallout?.text ? (
        <div className={styles.callout}>
          <p className={styles.calloutText}>{quoteCallout.text}</p>
        </div>
      ) : null}

      {actions.length ? (
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
  );
}