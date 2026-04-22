import styles from "./EducationLevelsTimeline.module.css";
import EducationLevelsCard from "./EducationLevelsCard.jsx";

function hasItems(value) {
  return Array.isArray(value) && value.length > 0;
}

export default function EducationLevelsTimeline({
  sectionId,
  journey,
  items,
  progressionLabelId,
  onOpenBook,
}) {
  if (!hasItems(items)) return null;

  return (
    <div className={styles.timelineWrap}>
      {journey?.progressionLabel ? (
        <p id={progressionLabelId} className={styles.progressionLabel}>
          {journey.progressionLabel}
        </p>
      ) : null}

      <ol
        className={styles.timeline}
        aria-label={
          journey?.ariaLabel || "Percurso educativo da Sunlive Sports"
        }
        aria-labelledby={progressionLabelId}
      >
        {items.map((item, index) => {
          const stepLabel = item.step || String(index + 1).padStart(2, "0");
          const stepKey =
            item.id || item.title || `${sectionId}-step-${stepLabel}`;

          return (
            <li key={stepKey} className={styles.step}>
              <EducationLevelsCard
                item={item}
                index={index}
                sectionId={sectionId}
                onOpenBook={onOpenBook}
              />
            </li>
          );
        })}
      </ol>
    </div>
  );
}
