import CTAButton from "../../../../shared/ui/CTAButton/CTAButton.jsx";
import styles from "./LogisticsActionPanel.module.css";

function getFirstNonEmpty(...values) {
  return (
    values.find((value) => typeof value === "string" && value.trim()) ?? ""
  );
}

export default function LogisticsActionPanel({ panel = {}, cta = null }) {
  const eyebrow = getFirstNonEmpty(panel?.eyebrow);
  const title = getFirstNonEmpty(panel?.title);
  const description = getFirstNonEmpty(panel?.description, panel?.lead);
  const supportingText = getFirstNonEmpty(panel?.supportingText);

  const proofPointsSource = Array.isArray(panel?.proofPoints)
    ? panel.proofPoints
    : Array.isArray(panel?.trustPoints)
      ? panel.trustPoints
      : [];

  const proofPoints = proofPointsSource
    .map((point) => String(point).trim())
    .filter(Boolean);

  const proofListAriaLabel =
    panel?.ui?.proofListAriaLabel ??
    panel?.ui?.trustPointsAriaLabel ??
    "Vantagens do contacto";

  const hasCopy = eyebrow || title || description || supportingText;
  const hasProofPoints = proofPoints.length > 0;
  const hasAction = Boolean(cta?.href);
  const hasContent = hasCopy || hasProofPoints || hasAction;

  if (!hasContent) return null;

  return (
    <div className={styles.root}>
      <div className={styles.panel}>
        <div className={styles.panelGlow} aria-hidden="true" />

        <div className={styles.copyColumn}>
          {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}

          {title ? <h3 className={styles.title}>{title}</h3> : null}

          {description ? (
            <p className={styles.description}>{description}</p>
          ) : null}

          {supportingText ? (
            <p className={styles.supportingText}>{supportingText}</p>
          ) : null}
        </div>

        <div className={styles.actionColumn}>
          {hasProofPoints ? (
            <ul className={styles.proofList} aria-label={proofListAriaLabel}>
              {proofPoints.map((point) => (
                <li key={point} className={styles.proofItem}>
                  <span className={styles.proofDot} aria-hidden="true" />
                  <span className={styles.proofLabel}>{point}</span>
                </li>
              ))}
            </ul>
          ) : null}

          {hasAction ? (
            <div className={styles.actionArea}>
              <CTAButton
                cta={cta}
                className={styles.ctaButton}
                variant="travel"
                tone="strong"
                blink
                compact="auto"
                scrollOffset={72}
              />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
