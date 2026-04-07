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

  const hero = sectionCfg?.conversionHero ?? {};
  const checklistPanel = sectionCfg?.checklistPanel ?? {};
  const channelsPanel = sectionCfg?.channelsPanel ?? {};

  const trustPoints = Array.isArray(hero?.trustPoints)
    ? hero.trustPoints.filter(Boolean)
    : [];

  const stats = Array.isArray(hero?.stats)
    ? hero.stats.filter((item) => item?.value && item?.label)
    : [];

  const hasChecklist =
    Array.isArray(sectionCfg?.checklist) && sectionCfg.checklist.length > 0;

  const hasChannels =
    Array.isArray(sectionCfg?.channels) && sectionCfg.channels.length > 0;

  if (!hasChecklist && !hasChannels) return null;

  const trustPointsAriaLabel =
    hero?.ui?.trustPointsAriaLabel ?? "Vantagens do contacto";

  const statsAriaLabel = hero?.ui?.statsAriaLabel ?? "Destaques do contacto";

  return (
    <section
      id={sectionId}
      className={styles.section}
      aria-label={sectionLabel}
      data-section="contact-cta"
    >
      <div className={styles.inner}>
        <header className={styles.hero}>
          <div className={styles.heroMain}>
            <div className={styles.heroCopy}>
              {hero?.eyebrow ? (
                <p className={styles.eyebrow}>{hero.eyebrow}</p>
              ) : null}

              {hero?.title ? (
                <h2 className={styles.title}>{hero.title}</h2>
              ) : null}

              {hero?.lead ? <p className={styles.lead}>{hero.lead}</p> : null}

              {hero?.supportingText ? (
                <p className={styles.description}>{hero.supportingText}</p>
              ) : null}
            </div>

            {trustPoints.length > 0 ? (
              <ul
                className={styles.trustPoints}
                aria-label={trustPointsAriaLabel}
              >
                {trustPoints.map((point) => (
                  <li key={point} className={styles.trustPoint}>
                    {point}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          {stats.length > 0 ? (
            <div className={styles.heroStats} aria-label={statsAriaLabel}>
              {stats.map((stat) => (
                <article
                  key={`${stat.value}-${stat.label}`}
                  className={styles.statCard}
                >
                  <strong className={styles.statValue}>{stat.value}</strong>
                  <span className={styles.statLabel}>{stat.label}</span>
                </article>
              ))}
            </div>
          ) : null}
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
              className={`${styles.panel} ${styles.channelsPanel}`}
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
