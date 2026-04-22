import styles from "./AcademiesCardBody.module.css";

function renderDescriptionWithAccent(text, accent, accentClassName) {
  if (!text || !accent || !text.includes(accent)) return text;

  const [before, ...restParts] = text.split(accent);
  const after = restParts.join(accent);

  return (
    <>
      {before}
      <span className={accentClassName}>{accent}</span>
      {after}
    </>
  );
}

export default function AcademiesCardBody({
  description,
  descriptionAccent,
  positioning,
  highlights = [],
  ctaNote,
}) {
  const safeHighlights = Array.isArray(highlights)
    ? highlights.filter(Boolean).slice(0, 4)
    : [];

  return (
    <div className={styles.body}>
      {description ? (
        <div className={styles.copyBlock}>
          <p className={styles.description}>
            {renderDescriptionWithAccent(
              description,
              descriptionAccent,
              styles.descriptionAccent,
            )}
          </p>
        </div>
      ) : null}

      {positioning ? (
        <div className={styles.positioningBlock}>
          <p className={styles.positioningLabel}>Posicionamento</p>
          <p className={styles.positioningText}>{positioning}</p>
        </div>
      ) : null}

      {safeHighlights.length ? (
        <ul
          className={styles.highlightsList}
          aria-label="Destaques da academia"
        >
          {safeHighlights.map((item) => (
            <li key={item} className={styles.highlightItem}>
              {item}
            </li>
          ))}
        </ul>
      ) : null}

      {ctaNote ? <p className={styles.ctaNote}>{ctaNote}</p> : null}
    </div>
  );
}
