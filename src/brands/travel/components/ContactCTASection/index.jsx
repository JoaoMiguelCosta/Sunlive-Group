// src/brands/travel/components/ContactCTASection/index.jsx
import styles from "./ContactCTASection.module.css";
import travelBrand from "../../ConfigTravel.jsx";

import ContactCTAHeadline from "./ContactCTAHeadline.jsx";
import QuoteRequestChecklist from "./QuoteRequestChecklist.jsx";
import ContactChannels from "./ContactChannels.jsx";

export default function ContactCTASection() {
  const sectionCfg = travelBrand?.sections?.contactCTA;
  if (!sectionCfg) return null;

  const hasChecklist =
    Array.isArray(sectionCfg.checklist) && sectionCfg.checklist.length > 0;
  const hasChannels =
    Array.isArray(sectionCfg.channels) && sectionCfg.channels.length > 0;

  if (!hasChecklist && !hasChannels) return null;

  return (
    <section
      id="contactar"
      className={styles.section}
      aria-labelledby="contactar-heading"
    >
      <div className={styles.container}>
        <ContactCTAHeadline />

        {/* Checklist numa única coluna, centrada */}
        {hasChecklist && (
          <div className={styles.grid}>
            <div className={styles.col}>
              <QuoteRequestChecklist />
            </div>
          </div>
        )}

        {/* Callout de contacto centrado, por baixo */}
        {hasChannels && (
          <div className={styles.callout}>
            <ContactChannels />
          </div>
        )}
      </div>
    </section>
  );
}
