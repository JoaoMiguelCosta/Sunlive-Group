import { isValidText } from "./athletesRoster.helpers.js";

import styles from "./AthletesRosterHeader.module.css";

export default function AthletesRosterHeader({
  intro,
  summaryItems,
  ui,
  titleId,
  leadId,
}) {
  const hasEyebrow = isValidText(intro?.eyebrow);
  const hasTitle = isValidText(intro?.title);
  const hasLead = isValidText(intro?.lead);
  const hasSummary = summaryItems.length > 0;

  if (!hasEyebrow && !hasTitle && !hasLead && !hasSummary) return null;

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        {hasEyebrow ? <p className={styles.eyebrow}>{intro.eyebrow}</p> : null}

        {hasTitle ? (
          <h2 id={titleId} className={styles.title}>
            {intro.title}
          </h2>
        ) : null}

        {hasLead ? (
          <p id={leadId} className={styles.lead}>
            {intro.lead}
          </p>
        ) : null}
      </div>

      {hasSummary ? (
        <div
          className={styles.summaryGrid}
          aria-label={
            isValidText(ui?.summaryAriaLabel) ? ui.summaryAriaLabel : undefined
          }
        >
          {summaryItems.map((item) => (
            <div key={item.key} className={styles.summaryCard}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      ) : null}
    </header>
  );
}
