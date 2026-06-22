import customizedQuotes from "../../../../config/sections/events/customizedQuotes.js";
import CTAButton from "../../../../../../shared/ui/CTAButton/CTAButton.jsx";

import styles from "./CustomizedQuotesActions.module.css";

export default function CustomizedQuotesActions() {
  const section = customizedQuotes;

  const includedInQuote = section?.includedInQuote ?? null;
  const quoteCallout = section?.quoteCallout ?? null;
  const actions = Array.isArray(section?.actions) ? section.actions : [];

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
        <section
          id={includedInQuote?.id}
          className={styles.includesPanel}
          aria-label={
            section?.ui?.includedAriaLabel ??
            includedInQuote?.title ??
            "O que incluímos no orçamento"
          }
        >
          {includedInQuote?.title ? (
            <header className={styles.includesHeader}>
              <h3 className={styles.includesTitle}>{includedInQuote.title}</h3>
            </header>
          ) : null}

          {includedItems.length ? (
            <div className={styles.includesBody}>
              <ul className={styles.includesGrid}>
                {includedItems.map((item) => (
                  <li key={item.id} className={styles.includeItem}>
                    <span className={styles.check} aria-hidden="true">
                      ✓
                    </span>

                    <span className={styles.includeLabel}>{item.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </section>
      ) : null}

      {(hasCallout || hasActions) && (
        <section
          className={styles.bottomPanel}
          aria-label={
            section?.ui?.actionsAriaLabel ??
            "Ações para pedir orçamento personalizado"
          }
        >
          {hasCallout ? (
            <div id={quoteCallout?.id} className={styles.callout}>
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
        </section>
      )}
    </div>
  );
}
