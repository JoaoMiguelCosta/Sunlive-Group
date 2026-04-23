import styles from "./EducationBilingualSection.module.css";

import EducationBilingualIntro from "./EducationBilingualIntro.jsx";
import EducationBilingualComparison from "./EducationBilingualComparison.jsx";
import EducationBilingualCertification from "./EducationBilingualCertification.jsx";
import EducationBilingualOutcomes from "./EducationBilingualOutcomes.jsx";

import { getSectionIds, hasItems } from "./educationBilingualSection.utils.js";

export default function EducationBilingualSection({ data }) {
  if (!data) return null;

  const sectionId = data.id || "education-bilingual";
  const intro = data.intro;
  const comparison = data.comparison;
  const items = hasItems(data.items) ? data.items : [];
  const certification = data.certification;
  const outcomes = data.outcomes;

  const { titleId, leadId, comparisonLabelId } = getSectionIds(
    sectionId,
    intro,
    comparison,
  );

  if (!intro && items.length === 0 && !certification && !outcomes) {
    return null;
  }

  return (
    <section
      id={sectionId}
      className={styles.section}
      aria-labelledby={titleId}
      aria-label={!titleId ? intro?.title || "Ensino bilingue" : undefined}
    >
      <div className={styles.surface}>
        <EducationBilingualIntro
          intro={intro}
          titleId={titleId}
          leadId={leadId}
        />

        <EducationBilingualComparison
          comparison={comparison}
          items={items}
          comparisonLabelId={comparisonLabelId}
        />

        <EducationBilingualCertification certification={certification} />

        <EducationBilingualOutcomes outcomes={outcomes} />
      </div>
    </section>
  );
}
