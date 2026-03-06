// src/brands/travel/components/LogisticsSolutionsSection/ContactCTA.jsx
import CTAButton from "../../../../shared/ui/CTAButton/CTAButton.jsx";
import styles from "./ContactCTA.module.css";

export default function ContactCTA({ cta }) {
  if (!cta?.href) return null;

  return (
    <section className={styles.section} aria-label="Contactar">
      <div className={styles.inner}>
        <div className={styles.ctaWrap}>
          <span className={styles.halo} aria-hidden="true" />

          {/* 👇 classe local só para este botão */}
          <CTAButton
            cta={cta}
            className={styles.ctaButton}
            variant="hero"
            blink
            compact="auto"
            scrollOffset={72}
          />
        </div>
      </div>
    </section>
  );
}
