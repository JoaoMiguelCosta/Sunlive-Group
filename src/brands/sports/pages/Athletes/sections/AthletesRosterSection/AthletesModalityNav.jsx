import {
  getAthleteCountLabel,
  getTargetId,
  getValidAthletes,
  isValidText,
  scrollToElementId,
} from "./athletesRoster.helpers.js";

import styles from "./AthletesModalityNav.module.css";

export default function AthletesModalityNav({ modalities, ui }) {
  if (modalities.length === 0) return null;

  return (
    <nav
      className={styles.modalityNav}
      aria-label={
        isValidText(ui?.modalitiesAriaLabel)
          ? ui.modalitiesAriaLabel
          : undefined
      }
    >
      {modalities.map((modality) => {
        const athletes = getValidAthletes(modality.athletes);
        const athleteCountLabel = getAthleteCountLabel(athletes.length, ui);
        const targetId = getTargetId(modality);

        return (
          <a
            key={modality.key}
            className={styles.modalityLink}
            href={`#${targetId}`}
            onClick={(event) => scrollToElementId(event, targetId)}
          >
            <span>{modality.shortLabel || modality.title}</span>
            <small>{athleteCountLabel}</small>
          </a>
        );
      })}
    </nav>
  );
}
