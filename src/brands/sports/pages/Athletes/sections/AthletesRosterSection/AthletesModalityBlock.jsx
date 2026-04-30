import AthleteCard from "./AthleteCard.jsx";

import {
  getAthleteCountLabel,
  getIconComponent,
  getTargetId,
  getValidAthletes,
  isValidText,
} from "./athletesRoster.helpers.js";

import styles from "./AthletesModalityBlock.module.css";

export default function AthletesModalityBlock({ modality, ui }) {
  const athletes = getValidAthletes(modality.athletes);

  if (athletes.length === 0) return null;

  const Icon = getIconComponent(modality.iconKey);
  const targetId = getTargetId(modality);
  const titleId = `${targetId}-title`;
  const athleteCountLabel = getAthleteCountLabel(athletes.length, ui);

  const listLabel = [ui?.athletesAriaLabel, modality.title]
    .filter(isValidText)
    .join(" — ");

  return (
    <article
      id={targetId}
      className={styles.modalityBlock}
      aria-labelledby={titleId}
    >
      <header className={styles.modalityHeader}>
        <div className={styles.modalityIdentity}>
          <div className={styles.modalityIcon} aria-hidden="true">
            {Icon ? <Icon /> : <span>{modality.title.charAt(0)}</span>}
          </div>

          <div className={styles.modalityText}>
            {isValidText(modality.shortLabel) ? (
              <span className={styles.modalityKicker}>
                {modality.shortLabel}
              </span>
            ) : null}

            <h3 id={titleId} className={styles.modalityTitle}>
              {modality.title}
            </h3>

            {isValidText(modality.description) ? (
              <p className={styles.modalityDescription}>
                {modality.description}
              </p>
            ) : null}
          </div>
        </div>

        <p className={styles.modalityCount}>{athleteCountLabel}</p>
      </header>

      <div
        className={styles.athletesGrid}
        role="list"
        aria-label={isValidText(listLabel) ? listLabel : undefined}
      >
        {athletes.map((athlete) => (
          <AthleteCard
            key={athlete.key}
            athlete={athlete}
            modality={modality}
            ui={ui}
          />
        ))}
      </div>
    </article>
  );
}
