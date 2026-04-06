import CTAButton from "../../../../../shared/ui/CTAButton/CTAButton.jsx";
import styles from "./TravelCTABox.module.css";

export default function TravelCTABox({ cta, panel }) {
  if (!cta?.href) return null;

  const mergedCta = {
    ...cta,
    eyebrow: panel?.eyebrow ?? cta?.eyebrow,
    title: panel?.title ?? cta?.title,
    description: panel?.description ?? cta?.description,
  };

  return (
    <div className={styles.root}>
      <div className={styles.panel}>
        <div className={styles.copy}>
          {mergedCta.eyebrow ? (
            <p className={styles.eyebrow}>{mergedCta.eyebrow}</p>
          ) : null}

          {mergedCta.title ? (
            <h3 className={styles.title}>{mergedCta.title}</h3>
          ) : null}

          {mergedCta.description ? (
            <p className={styles.description}>{mergedCta.description}</p>
          ) : null}
        </div>

        <div className={styles.actionArea}>
          <span className={styles.halo} aria-hidden="true" />

          <CTAButton
            cta={mergedCta}
            className={styles.ctaButton}
            variant="travel"
            tone="strong"
            blink
            compact="auto"
            scrollOffset={72}
          />
        </div>
      </div>
    </div>
  );
}