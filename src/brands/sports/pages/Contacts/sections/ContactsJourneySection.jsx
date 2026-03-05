// src/brands/sports/pages/Contacts/ContactsJourneySection.jsx
import styles from "./ContactsJourneySection.module.css";

import sportsBrand from "../../../config/registry/index.js";

/**
 * Bloco de compromisso / jornada
 * Performance Prestige: Noir + Gold + Sports (verde-vital)
 */
export default function ContactsJourneySection() {
  const journey = sportsBrand.sections?.contacts?.journeyBlock;
  if (!journey) return null;

  const { headline, body, brandName, brandTagline } = journey;

  return (
    <section
      className={styles.section}
      aria-label="Compromisso Sunlive Sports"
      data-brand="sports"
    >
      <div className={styles.inner}>
        <div className={styles.mainBlock}>
          <div className={styles.titleBand}>
            <h2 className={styles.title}>{headline}</h2>
          </div>
          <div className={styles.bodyBand}>
            <p className={styles.body}>{body}</p>
          </div>
        </div>

        <div className={styles.brandBlock}>
          <div className={styles.brandNameBand}>
            <span className={styles.brandName}>{brandName}</span>
          </div>
          <div className={styles.brandTaglineBand}>
            <span className={styles.brandTagline}>{brandTagline}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
