// src/brands/travel/components/LogisticsSolutionsSection/ContactCTA.jsx
import CTA from "../../../../shared/ui/CTAButton";
import styles from "./ContactCTA.module.css";

export default function ContactCTA({ cta }) {
  if (!cta?.href) return null;

  return (
    <section className={styles.section} aria-label="Contactar">
      <div className={styles.inner}>
        <div className={styles.ctaWrap}>
          <span className={styles.halo} aria-hidden="true" />
          {/* 👇 classe local só para este botão */}
          <CTA cta={cta} className={styles.ctaButton} />
        </div>
      </div>
    </section>
  );
}
