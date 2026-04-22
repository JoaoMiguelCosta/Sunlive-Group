import styles from "./SportsClosingCTACopy.module.css";
import SportsClosingCTAActions from "./SportsClosingCTAActions.jsx";

export default function SportsClosingCTACopy({
  titleId,
  eyebrow,
  title,
  description,
  highlights = [],
  highlightsAriaLabel,
  primaryAction,
  secondaryAction,
}) {
  const hasActions = Boolean(primaryAction?.href || secondaryAction?.href);

  return (
    <div className={styles.copy}>
      {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}

      {title ? (
        <h2 id={titleId} className={styles.title}>
          {title}
        </h2>
      ) : null}

      {description ? <p className={styles.description}>{description}</p> : null}

      {highlights.length ? (
        <ul
          className={styles.highlights}
          aria-label={highlightsAriaLabel || "Pontos principais do CTA"}
        >
          {highlights.map((item) => (
            <li key={item} className={styles.highlightItem}>
              {item}
            </li>
          ))}
        </ul>
      ) : null}

      {hasActions ? (
        <SportsClosingCTAActions
          primaryAction={primaryAction}
          secondaryAction={secondaryAction}
        />
      ) : null}
    </div>
  );
}
