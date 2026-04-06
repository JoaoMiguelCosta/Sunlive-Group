import styles from "./ContactCTASection.module.css";
import travelBrand from "../../config/index.js";

import QuoteRequestChecklist from "./QuoteRequestChecklist.jsx";
import ContactChannels from "./ContactChannels.jsx";

export default function ContactCTASection() {
  const sectionCfg = travelBrand?.sections?.contactCTA ?? null;
  if (!sectionCfg) return null;

  const sectionId = sectionCfg?.id ?? "contactar";
  const sectionLabel =
    sectionCfg?.ui?.sectionAriaLabel ?? "Secção de contacto Sunlive Travel";

  const headline = sectionCfg?.headline ?? {};
  const checklistPanel = sectionCfg?.checklistPanel ?? {};
  const channelsPanel = sectionCfg?.channelsPanel ?? {};

  const hasChecklist =
    Array.isArray(sectionCfg?.checklist) && sectionCfg.checklist.length > 0;

  const hasChannels =
    Array.isArray(sectionCfg?.channels) && sectionCfg.channels.length > 0;

  if (!hasChecklist && !hasChannels) return null;

  return (
    <section
      id={sectionId}
      className={styles.section}
      aria-label={sectionLabel}
      data-section="contact-cta"
    >
      <div className={styles.inner}>
        <header className={styles.hero}>
          <div className={styles.heroCopy}>
            {headline?.eyebrow ? (
              <p className={styles.eyebrow}>{headline.eyebrow}</p>
            ) : null}

            {headline?.title ? (
              <h2 className={styles.title}>{headline.title}</h2>
            ) : null}

            {headline?.lead ? (
              <p className={styles.lead}>{headline.lead}</p>
            ) : null}

            {headline?.description ? (
              <p className={styles.description}>{headline.description}</p>
            ) : null}
          </div>
        </header>

        <div className={styles.contentGrid}>
          {hasChecklist ? (
            <section
              className={styles.panel}
              aria-labelledby="contact-checklist-title"
            >
              <div className={styles.panelHeader}>
                {checklistPanel?.eyebrow ? (
                  <p className={styles.panelEyebrow}>
                    {checklistPanel.eyebrow}
                  </p>
                ) : null}

                {checklistPanel?.title ? (
                  <h3
                    id="contact-checklist-title"
                    className={styles.panelTitle}
                  >
                    {checklistPanel.title}
                  </h3>
                ) : null}

                {checklistPanel?.description ? (
                  <p className={styles.panelDescription}>
                    {checklistPanel.description}
                  </p>
                ) : null}
              </div>

              <QuoteRequestChecklist />
            </section>
          ) : null}

          {hasChannels ? (
            <section
              className={styles.panel}
              aria-labelledby="contact-channels-title"
            >
              <div className={styles.panelHeader}>
                {channelsPanel?.eyebrow ? (
                  <p className={styles.panelEyebrow}>{channelsPanel.eyebrow}</p>
                ) : null}

                {channelsPanel?.title ? (
                  <h3 id="contact-channels-title" className={styles.panelTitle}>
                    {channelsPanel.title}
                  </h3>
                ) : null}

                {channelsPanel?.description ? (
                  <p className={styles.panelDescription}>
                    {channelsPanel.description}
                  </p>
                ) : null}
              </div>

              <ContactChannels />
            </section>
          ) : null}
        </div>
      </div>
    </section>
  );
}
