import hotelBrand from "../../../../config/index.js";

import styles from "./ReceptionSupportServices.module.css";

function IconSlot({ icon = null, iconLabel = "", variant = "feature" }) {
  const variantClass =
    variant === "contact" ? styles.iconSlotContact : styles.iconSlotFeature;

  if (icon) {
    return (
      <span
        className={`${styles.iconSlot} ${variantClass}`}
        aria-label={iconLabel}
      >
        {icon}
      </span>
    );
  }

  return (
    <span className={`${styles.iconSlot} ${variantClass}`} aria-hidden="true">
      <span className={styles.iconPlaceholder} />
    </span>
  );
}

export default function ReceptionSupportServices() {
  const content =
    hotelBrand?.pages?.facilities?.sections?.receptionSupport?.services ?? null;

  if (!content) return null;

  const languages = Array.isArray(content.languages) ? content.languages : [];
  const contacts = Array.isArray(content.contacts) ? content.contacts : [];
  const features = Array.isArray(content.features) ? content.features : [];

  return (
    <div id={content.id} className={styles.block}>
      <div className={styles.grid}>
        <div className={styles.leftCard}>
          {content.multilingualTitle ? (
            <h3 className={styles.cardTitle}>{content.multilingualTitle}</h3>
          ) : null}

          {languages.length ? (
            <div className={styles.languagesGrid}>
              {languages.map((language) => (
                <div key={language.key} className={styles.languageCard}>
                  <span className={styles.languageLabel}>{language.label}</span>
                  <span className={styles.languageFlag} aria-hidden="true">
                    {language.flag}
                  </span>
                </div>
              ))}
            </div>
          ) : null}

          {contacts.length ? (
            <div className={styles.contactsRow}>
              {contacts.map((contact) => (
                <a
                  key={contact.key}
                  href={contact.href}
                  className={styles.contactButton}
                  aria-label={contact.ariaLabel}
                >
                  <span className={styles.contactIconWrap}>
                    <IconSlot
                      icon={contact.icon?.component ?? null}
                      iconLabel={contact.icon?.ariaLabel ?? contact.label}
                      variant="contact"
                    />
                  </span>

                  <span className={styles.contactLabel}>{contact.label}</span>
                </a>
              ))}
            </div>
          ) : null}
        </div>

        <div className={styles.rightCard}>
          {content.featuresTitle ? (
            <h3 className={styles.cardTitle}>{content.featuresTitle}</h3>
          ) : null}

          {features.length ? (
            <ul className={styles.featuresList}>
              {features.map((feature) => (
                <li key={feature.key} className={styles.featureItem}>
                  <IconSlot
                    icon={feature.icon?.component ?? null}
                    iconLabel={feature.icon?.ariaLabel ?? feature.label}
                    variant="feature"
                  />

                  <span className={styles.featureLabel}>{feature.label}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </div>
  );
}
