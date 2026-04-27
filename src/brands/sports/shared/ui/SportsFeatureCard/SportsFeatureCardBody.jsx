import styles from "./SportsFeatureCardBody.module.css";

import { getValidTextItems, isValidText } from "./SportsFeatureCard.utils.js";

function renderDescriptionWithAccent(text, accent) {
  if (!isValidText(text) || !isValidText(accent) || !text.includes(accent)) {
    return text;
  }

  const [before, ...restParts] = text.split(accent);
  const after = restParts.join(accent);

  return (
    <>
      {before}
      <span className={styles.descriptionAccent}>{accent}</span>
      {after}
    </>
  );
}

export default function SportsFeatureCardBody({
  description,
  descriptionAccent,
  meta,
  highlights = [],
  highlightsAriaLabel,
  note,
}) {
  const validHighlights = getValidTextItems(highlights).slice(0, 4);
  const hasBody =
    description || meta?.text || validHighlights.length > 0 || note;

  if (!hasBody) return null;

  return (
    <div className={styles.body}>
      {description ? (
        <p className={styles.description}>
          {renderDescriptionWithAccent(description, descriptionAccent)}
        </p>
      ) : null}

      {meta?.text ? (
        <div className={styles.metaBlock}>
          {meta.label ? <p className={styles.metaLabel}>{meta.label}</p> : null}
          <p className={styles.metaText}>{meta.text}</p>
        </div>
      ) : null}

      {validHighlights.length ? (
        <ul className={styles.highlightsList} aria-label={highlightsAriaLabel}>
          {validHighlights.map((highlight) => (
            <li key={highlight} className={styles.highlightItem}>
              {highlight}
            </li>
          ))}
        </ul>
      ) : null}

      {note ? <p className={styles.note}>{note}</p> : null}
    </div>
  );
}
