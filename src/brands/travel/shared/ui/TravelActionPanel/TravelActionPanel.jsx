import CTAButton from "../../../../../shared/ui/CTAButton/CTAButton.jsx";
import styles from "./TravelActionPanel.module.css";

function getFirstNonEmpty(...values) {
  return (
    values.find((value) => typeof value === "string" && value.trim()) ?? ""
  );
}

function normalizeProofPoints(points = []) {
  if (!Array.isArray(points)) return [];

  return points.map((point) => String(point).trim()).filter(Boolean);
}

export default function TravelActionPanel({
  panel = {},
  cta = null,
  className = "",
  sectionKey = "travel-action-panel",
  layout = "default",
  tone = "navy",
}) {
  const eyebrow = getFirstNonEmpty(panel?.eyebrow);
  const title = getFirstNonEmpty(panel?.title);
  const description = getFirstNonEmpty(panel?.description, panel?.lead);
  const supportingText = getFirstNonEmpty(panel?.supportingText);

  const proofPoints = normalizeProofPoints(panel?.proofPoints);

  const proofListAriaLabel =
    panel?.ui?.proofListAriaLabel ?? "Vantagens do contacto";

  const hasCopy = eyebrow || title || description || supportingText;
  const hasProofPoints = proofPoints.length > 0;
  const hasAction = Boolean(cta?.href);
  const hasContent = hasCopy || hasProofPoints || hasAction;

  if (!hasContent) return null;

  const isCompact = layout === "compact";
  const isLightForest = tone === "lightForest";

  const rootClassName = [
    styles.root,
    isCompact ? styles.compact : "",
    isLightForest ? styles.lightForest : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const copyColumn = (
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
  );

  const actionColumn = (
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
            tone={isCompact || isLightForest ? "lightForest" : "strong"}
            blink
            compact="auto"
            scrollOffset={72}
          />
        </div>
      ) : null}
    </div>
  );

  return (
    <div className={rootClassName} data-travel-action-panel={sectionKey}>
      <div className={styles.panel}>
        <div className={styles.panelGlow} aria-hidden="true" />

        {isCompact ? (
          <div className={styles.compactGroup}>
            {copyColumn}
            {actionColumn}
          </div>
        ) : (
          <>
            {copyColumn}
            {actionColumn}
          </>
        )}
      </div>
    </div>
  );
}
