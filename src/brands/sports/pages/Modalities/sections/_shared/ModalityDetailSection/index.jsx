import styles from "./ModalityDetailSection.module.css";

import { getSectionAriaLabel, isValidText } from "./modalityDetailUtils.js";

import ModalityIconFrame from "./ModalityIconFrame.jsx";
import SummaryGrid from "./SummaryGrid.jsx";
import TechnicalMap from "./TechnicalMap.jsx";
import RelatedAreas from "./RelatedAreas.jsx";
import HighlightPanel from "./HighlightPanel.jsx";

export default function ModalityDetailSection({ data, className = "" }) {
  if (!data || typeof data !== "object") return null;

  const sectionClassName = `${styles.section} ${className}`.trim();

  return (
    <section
      id={data.id}
      className={sectionClassName}
      aria-label={getSectionAriaLabel(data)}
      data-modality={data.key}
    >
      <div className={styles.inner}>
        <header className={styles.hero}>
          <ModalityIconFrame
            iconKey={data.identity?.iconKey}
            className={styles.heroIcon}
          />

          <div className={styles.heroContent}>
            {isValidText(data.identity?.eyebrow) ? (
              <p className={styles.eyebrow}>{data.identity.eyebrow}</p>
            ) : null}

            {isValidText(data.identity?.title) ? (
              <h2 className={styles.title}>{data.identity.title}</h2>
            ) : null}

            {isValidText(data.identity?.lead) ? (
              <p className={styles.lead}>{data.identity.lead}</p>
            ) : null}
          </div>

          {isValidText(data.identity?.shortLabel) ? (
            <span className={styles.shortLabel}>
              {data.identity.shortLabel}
            </span>
          ) : null}
        </header>

        <SummaryGrid items={data.summary?.items} />

        <TechnicalMap technicalMap={data.technicalMap} />

        <RelatedAreas relatedAreas={data.relatedAreas} />

        <HighlightPanel highlight={data.highlight} />
      </div>
    </section>
  );
}
