import CTAButton from "../../../../shared/ui/CTAButton/CTAButton.jsx";
import styles from "./TravelPartnersActionPanel.module.css";

export default function TravelPartnersActionPanel({ panel = {}, cta = null }) {
  const proofPoints = Array.isArray(panel?.proofPoints)
    ? panel.proofPoints.filter(Boolean)
    : [];

  const hasContent =
    panel?.eyebrow ||
    panel?.title ||
    panel?.description ||
    proofPoints.length > 0 ||
    cta?.href;

  if (!hasContent) return null;

  return (
    <div className={styles.root}>
      <div className={styles.panel}>
        <div className={styles.copy}>
          {panel?.eyebrow ? (
            <p className={styles.eyebrow}>{panel.eyebrow}</p>
          ) : null}

          {panel?.title ? (
            <h3 className={styles.title}>{panel.title}</h3>
          ) : null}

          {panel?.description ? (
            <p className={styles.description}>{panel.description}</p>
          ) : null}
        </div>

        <div className={styles.side}>
          {proofPoints.length > 0 ? (
            <ul
              className={styles.proofList}
              aria-label="Vantagens da rede parceira"
            >
              {proofPoints.map((point) => (
                <li key={point} className={styles.proofItem}>
                  {point}
                </li>
              ))}
            </ul>
          ) : null}

          {cta?.href ? (
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
