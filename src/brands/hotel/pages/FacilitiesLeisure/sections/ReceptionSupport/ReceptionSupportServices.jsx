import { useMemo, useState } from "react";

import hotelBrand, { BRAND_FLAGS } from "../../../../config/index.js";
import useAccordion from "../../../../../../shared/hooks/useAccordion.js";

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

  const initialLanguageKey =
    resolvedContent?.languages?.find((language) => language.defaultSelected)
      ?.key ??
    resolvedContent?.languages?.[0]?.key ??
    null;

  const [activeLanguageKey, setActiveLanguageKey] =
    useState(initialLanguageKey);

  const features = resolvedContent?.features ?? [];
  const { isOpen, toggle } = useAccordion(features, { allowMultiple: false });

  if (!resolvedContent) return null;

  const languages = Array.isArray(resolvedContent.languages)
    ? resolvedContent.languages
    : [];
  const contacts = Array.isArray(resolvedContent.contacts)
    ? resolvedContent.contacts
    : [];

  const activeLanguage =
    languages.find((language) => language.key === activeLanguageKey) ??
    languages[0] ??
    null;

  return (
    <div id={resolvedContent.id} className={styles.block}>
      <div className={styles.grid}>
        <article className={styles.leftCard}>
          {resolvedContent.multilingualTitle ? (
            <h3 className={styles.cardTitle}>
              {resolvedContent.multilingualTitle}
            </h3>
          ) : null}

          {languages.length ? (
            <div
              className={styles.languagesGrid}
              role="tablist"
              aria-label="Idiomas de atendimento disponíveis"
            >
              {languages.map((language) => {
                const isActive = activeLanguage?.key === language.key;

                return (
                  <button
                    key={language.key}
                    type="button"
                    className={`${styles.languageCard} ${
                      isActive ? styles.languageCardActive : ""
                    }`}
                    onClick={() => setActiveLanguageKey(language.key)}
                    aria-pressed={isActive}
                  >
                    <span className={styles.languageLabel}>
                      {language.label}
                    </span>

                    <FlagSlot
                      flag={language.flagComponent ?? null}
                      flagLabel={
                        language.ariaLabel ??
                        `Bandeira do idioma ${language.label}`
                      }
                    />
                  </button>
                );
              })}
            </div>
          ) : null}

          {activeLanguage ? (
            <div className={styles.languageSpotlight}>
              <h4 className={styles.languageSpotlightTitle}>
                {activeLanguage.title}
              </h4>
              <p className={styles.languageSpotlightDescription}>
                {activeLanguage.description}
              </p>
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
        </article>

        <article className={styles.rightCard}>
          {resolvedContent.featuresTitle ? (
            <h3 className={styles.cardTitle}>
              {resolvedContent.featuresTitle}
            </h3>
          ) : null}

          {features.length ? (
            <ul className={styles.featuresList}>
              {features.map((feature) => {
                const open = isOpen(feature.key);
                const buttonId = `${resolvedContent.id}-${feature.key}-button`;
                const panelId = `${resolvedContent.id}-${feature.key}-panel`;

                return (
                  <li
                    key={feature.key}
                    className={`${styles.featureItem} ${
                      open ? styles.featureItemOpen : ""
                    }`}
                  >
                    <button
                      type="button"
                      id={buttonId}
                      className={styles.featureTrigger}
                      onClick={() => toggle(feature.key)}
                      aria-expanded={open}
                      aria-controls={panelId}
                    >
                      <span className={styles.check} aria-hidden="true">
                        ✓
                      </span>

                      <span className={styles.featureMain}>
                        <span className={styles.featureLabel}>
                          {feature.label}
                        </span>
                        <span
                          className={`${styles.chevron} ${
                            open ? styles.chevronOpen : ""
                          }`}
                          aria-hidden="true"
                        >
                          ▾
                        </span>
                      </span>
                    </button>

                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      className={`${styles.featurePanel} ${
                        open ? styles.featurePanelOpen : ""
                      }`}
                    >
                      <div className={styles.featurePanelInner}>
                        <p className={styles.featureDetail}>{feature.detail}</p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          ) : null}
        </article>
      </div>
    </div>
  );
}
