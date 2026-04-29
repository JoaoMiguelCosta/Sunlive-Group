import styles from "./ModalityDetailSection.module.css";

import { getSectionAriaLabel, isValidText } from "./modalityDetailUtils.js";

import ModalityIconFrame from "./ModalityIconFrame.jsx";
import SummaryGrid from "./SummaryGrid.jsx";
import TechnicalMap from "./TechnicalMap.jsx";
import RelatedAreas from "./RelatedAreas.jsx";
import HighlightPanel from "./HighlightPanel.jsx";

export default function ModalityDetailSection({ data, className = "" }) {
  if (!data || typeof data !== "object") return null;

  const sectionId = isValidText(data.id) ? data.id : undefined;
  const modalityKey = isValidText(data.key) ? data.key : undefined;

  const identity = data.identity || {};

  const hasEyebrow = isValidText(identity.eyebrow);
  const hasTitle = isValidText(identity.title);
  const hasLead = isValidText(identity.lead);
  const hasShortLabel = isValidText(identity.shortLabel);

  const titleId = sectionId && hasTitle ? `${sectionId}-title` : undefined;
  const leadId = sectionId && hasLead ? `${sectionId}-lead` : undefined;

  const sectionClassName = [styles.section, className]
    .filter(Boolean)
    .join(" ");

  return (
    <section
      id={sectionId}
      className={sectionClassName}
      aria-label={titleId ? undefined : getSectionAriaLabel(data)}
      aria-labelledby={titleId}
      aria-describedby={leadId}
      data-modality={modalityKey}
    >
      <div className={styles.inner}>
        <header className={styles.hero}>
          <ModalityIconFrame
            iconKey={identity.iconKey}
            className={styles.heroIcon}
          />

          <div className={styles.heroContent}>
            {hasEyebrow ? (
              <p className={styles.eyebrow}>{identity.eyebrow}</p>
            ) : null}

            {hasTitle ? (
              <h2 id={titleId} className={styles.title}>
                {identity.title}
              </h2>
            ) : null}

            {hasLead ? (
              <p id={leadId} className={styles.lead}>
                {identity.lead}
              </p>
            ) : null}
          </div>

          {hasShortLabel ? (
            <span className={styles.shortLabel}>{identity.shortLabel}</span>
          ) : null}
        </header>

        <SummaryGrid items={data.summary?.items} />

        <RelatedAreas relatedAreas={data.relatedAreas} />

        <TechnicalMap technicalMap={data.technicalMap} />

        <HighlightPanel highlight={data.highlight} />
      </div>
    </section>
  );
}
