import styles from "./EducationLevelsSection.module.css";

import EducationLevelsIntro from "./EducationLevelsIntro.jsx";
import EducationLevelsTimeline from "./EducationLevelsTimeline.jsx";

import { hasItems } from "./educationLevelsSection.utils.js";

export default function EducationLevelsSection({ data, onOpenBook }) {
  if (!data) return null;

  const sectionId = data.id || "education-levels";
  const intro = data.intro ?? null;
  const journey = data.journey ?? null;
  const items = hasItems(data.items) ? data.items : [];

  const titleId = intro?.title ? `${sectionId}-title` : undefined;
  const leadId = intro?.lead ? `${sectionId}-lead` : undefined;
  const progressionLabelId = journey?.progressionLabel
    ? `${sectionId}-progression-label`
    : undefined;

  if (!intro && items.length === 0) return null;

  return (
    <section
      id={sectionId}
      className={styles.section}
      aria-labelledby={titleId}
      aria-label={!titleId ? intro?.title || "Níveis de Ensino" : undefined}
    >
      <div className={styles.surface}>
        <EducationLevelsIntro intro={intro} titleId={titleId} leadId={leadId} />

        <EducationLevelsTimeline
          sectionId={sectionId}
          journey={journey}
          items={items}
          progressionLabelId={progressionLabelId}
          onOpenBook={onOpenBook}
        />
      </div>
    </section>
  );
}
