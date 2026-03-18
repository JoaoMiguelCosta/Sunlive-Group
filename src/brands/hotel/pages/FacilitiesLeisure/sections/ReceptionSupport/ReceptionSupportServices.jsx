import { useMemo } from "react";

import hotelBrand, { BRAND_FLAGS } from "../../../../config/index.js";

import CTAButton from "../../../../../../shared/ui/CTAButton/CTAButton.jsx";

import styles from "./ReceptionSupportServices.module.css";

function FlagSlot({ flag = null, flagLabel = "" }) {
  if (flag) {
    return (
      <span className={styles.flagSlot} aria-label={flagLabel}>
        {flag}
      </span>
    );
  }

  return (
    <span className={styles.flagSlot} aria-hidden="true">
      <span className={styles.flagPlaceholder} />
    </span>
  );
}

export default function ReceptionSupportServices() {
  const content =
    hotelBrand?.pages?.facilities?.sections?.receptionSupport?.services ?? null;

  const resolvedContent = useMemo(() => {
    if (!content) return null;

    const languages = Array.isArray(content.languages)
      ? content.languages.map((language) => {
          const Flag = BRAND_FLAGS?.[language.flagKey] ?? null;

          return {
            ...language,
            flagComponent: Flag ? <Flag /> : null,
          };
        })
      : [];

    const contacts = Array.isArray(content.contacts) ? content.contacts : [];
    const features = Array.isArray(content.features) ? content.features : [];

    return {
      ...content,
      languages,
      contacts,
      features,
    };
  }, [content]);

  if (!resolvedContent) return null;

  const languages = Array.isArray(resolvedContent.languages)
    ? resolvedContent.languages
    : [];
  const contacts = Array.isArray(resolvedContent.contacts)
    ? resolvedContent.contacts
    : [];
  const features = Array.isArray(resolvedContent.features)
    ? resolvedContent.features
    : [];

  return (
    <div id={resolvedContent.id} className={styles.block}>
      <div className={styles.grid}>
        <div className={styles.leftCard}>
          {resolvedContent.multilingualTitle ? (
            <h3 className={styles.cardTitle}>
              {resolvedContent.multilingualTitle}
            </h3>
          ) : null}

          {languages.length ? (
            <div className={styles.languagesGrid}>
              {languages.map((language) => (
                <div key={language.key} className={styles.languageCard}>
                  <span className={styles.languageLabel}>{language.label}</span>

                  <FlagSlot
                    flag={language.flagComponent ?? null}
                    flagLabel={
                      language.ariaLabel ?? `Bandeira do idioma ${language.label}`
                    }
                  />
                </div>
              ))}
            </div>
          ) : null}

          {contacts.length ? (
            <div className={styles.contactsRow}>
              {contacts.map((contact) => (
                <CTAButton
                  key={contact.key}
                  href={contact.href}
                  label={contact.label}
                  ariaLabel={contact.ariaLabel ?? contact.label}
                  icon={contact.icon?.key ?? undefined}
                  blink={false}
                  compact={false}
                  variant="hotel"
                  tone="strong"
                  className={styles.ctaButton}
                />
              ))}
            </div>
          ) : null}
        </div>

        <div className={styles.rightCard}>
          {resolvedContent.featuresTitle ? (
            <h3 className={styles.cardTitle}>{resolvedContent.featuresTitle}</h3>
          ) : null}

          {features.length ? (
            <ul className={styles.featuresList}>
              {features.map((feature) => (
                <li key={feature.key} className={styles.featureItem}>
                  <span className={styles.check} aria-hidden="true">
                    ✓
                  </span>

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