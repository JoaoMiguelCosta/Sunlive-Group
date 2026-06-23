import { getInstagramData, isValidText } from "./athletesRoster.helpers.js";

import styles from "./AthleteCard.module.css";

function InstagramIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.25" />
      <circle cx="12" cy="12" r="4.1" />
      <circle cx="17.4" cy="6.6" r="0.7" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function AthleteCard({ athlete, modality, ui }) {
  const birthDateLabel = isValidText(athlete.birthDateLabel)
    ? athlete.birthDateLabel
    : ui?.unknownDateLabel;

  const instagram = getInstagramData(athlete.instagram);

  const hasImage = isValidText(athlete.image);
  const hasBirthDate =
    isValidText(ui?.birthDateLabel) && isValidText(birthDateLabel);
  const hasCountry =
    isValidText(ui?.countryLabel) && isValidText(athlete.country);
  const hasMeta = hasBirthDate || hasCountry;
  const hasInstagramText = isValidText(ui?.instagramCtaLabel);

  const instagramAriaLabel = [ui?.instagramAriaPrefix, athlete.name]
    .filter(isValidText)
    .join(" ");

  return (
    <article className={styles.card} role="listitem">
      <div className={styles.portraitFrame} aria-hidden={!hasImage}>
        {hasImage ? (
          <img
            className={styles.portrait}
            src={athlete.image}
            alt={athlete.imageAlt || athlete.name}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <span className={styles.portraitFallback} aria-hidden="true">
            {athlete.name.charAt(0)}
          </span>
        )}
      </div>

      <div className={styles.cardBody}>
        <div className={styles.cardHeader}>
          {isValidText(modality?.shortLabel) ? (
            <p className={styles.cardKicker}>{modality.shortLabel}</p>
          ) : null}

          <h4 className={styles.cardTitle}>{athlete.name}</h4>
        </div>

        {hasMeta ? (
          <dl className={styles.metaList}>
            {hasBirthDate ? (
              <div className={styles.metaItem}>
                <dt>{ui.birthDateLabel}</dt>
                <dd>{birthDateLabel}</dd>
              </div>
            ) : null}

            {hasCountry ? (
              <div className={styles.metaItem}>
                <dt>{ui.countryLabel}</dt>
                <dd>{athlete.country}</dd>
              </div>
            ) : null}
          </dl>
        ) : null}

        {instagram ? (
          <div className={styles.cardActions}>
            <a
              className={styles.instagramLink}
              href={instagram.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={
                isValidText(instagramAriaLabel) ? instagramAriaLabel : undefined
              }
            >
              <span className={styles.instagramIconWrap} aria-hidden="true">
                <InstagramIcon className={styles.instagramIcon} />
              </span>

              {hasInstagramText ? (
                <span className={styles.instagramText}>
                  {ui.instagramCtaLabel}
                </span>
              ) : null}
            </a>
          </div>
        ) : null}
      </div>
    </article>
  );
}
