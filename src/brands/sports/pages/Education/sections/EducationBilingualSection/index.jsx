import styles from "./EducationBilingualSection.module.css";
import EducationBilingualIntro from "./EducationBilingualIntro.jsx";
import EducationBilingualComparison from "./EducationBilingualComparison.jsx";
import EducationBilingualCertification from "./EducationBilingualCertification.jsx";
import EducationBilingualOutcomes from "./EducationBilingualOutcomes.jsx";

function hasItems(value) {
  return Array.isArray(value) && value.length > 0;
}

export default function EducationBilingualSection({ data }) {
  if (!data) return null;

  const sectionId = data.id || "education-bilingual";
  const intro = data.intro;
  const comparison = data.comparison;
  const items = hasItems(data.items) ? data.items : [];
  const certification = data.certification;
  const outcomes = data.outcomes;

  const titleId = intro?.title ? `${sectionId}-title` : undefined;
  const leadId = intro?.lead ? `${sectionId}-lead` : undefined;
  const comparisonLabelId = comparison?.itemsLabel
    ? `${sectionId}-comparison-label`
    : undefined;

  if (!intro && items.length === 0 && !certification && !outcomes) return null;

  return (
    <section
      id={sectionId}
      className={styles.section}
      aria-labelledby={titleId}
      aria-label={!titleId ? intro?.title || "Ensino Bilingue" : undefined}
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
