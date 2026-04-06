import styles from "./ContactCTASection.module.css";
import travelBrand from "../../config/index.js";

import ContactCTAHeadline from "./ContactCTAHeadline.jsx";
import QuoteRequestChecklist from "./QuoteRequestChecklist.jsx";
import ContactChannels from "./ContactChannels.jsx";

export default function ContactCTASection() {
  const sectionCfg = travelBrand?.sections?.contactCTA ?? null;
  if (!sectionCfg) return null;

  const hasChecklist =
    Array.isArray(sectionCfg.checklist) && sectionCfg.checklist.length > 0;

  const hasChannels =
    Array.isArray(sectionCfg.channels) && sectionCfg.channels.length > 0;

  if (!hasChecklist && !hasChannels) return null;

  return (
    <section
      id={sectionCfg.id || "contactar"}
      className={styles.section}
      aria-labelledby="contactar-heading"
    >
      <div className={styles.inner}>
        <ContactCTAHeadline />

        {hasChecklist ? (
          <div className={styles.grid}>
            <div className={styles.col}>
              <QuoteRequestChecklist />
            </div>
          </div>
        ) : null}

        {hasChannels ? (
          <div className={styles.callout}>
            <ContactChannels />
          </div>
        ) : null}
      </div>
    </section>
  );
}
