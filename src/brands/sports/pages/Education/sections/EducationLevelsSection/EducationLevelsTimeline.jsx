import styles from "./EducationLevelsTimeline.module.css";

import EducationLevelsCard from "./EducationLevelsCard.jsx";

import { getStepKey, hasItems } from "./educationLevelsSection.utils.js";

export default function EducationLevelsTimeline({
  sectionId,
  journey,
  items,
  progressionLabelId,
  onOpenBook,
}) {
  if (!hasItems(items)) return null;

  const timelineAriaLabel =
    journey?.ariaLabel || "Percurso educativo da Sunlive Sports";

  return (
    <div className={styles.timelineWrap}>
      {journey?.progressionLabel ? (
        <p id={progressionLabelId} className={styles.progressionLabel}>
          {journey.progressionLabel}
        </p>
      ) : null}

      <ol
        className={styles.timeline}
        aria-label={!progressionLabelId ? timelineAriaLabel : undefined}
        aria-labelledby={progressionLabelId || undefined}
      >
        {items.map((item, index) => (
          <li key={getStepKey(item, index, sectionId)} className={styles.step}>
            <EducationLevelsCard
              item={item}
              index={index}
              sectionId={sectionId}
              onOpenBook={onOpenBook}
            />
          </li>
        ))}
      </ol>
    </div>
  );
}
