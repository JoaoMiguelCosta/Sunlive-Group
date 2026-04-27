import styles from "./LeisureBenefitsSection.module.css";

import LeisureBenefitsIntro from "./LeisureBenefitsIntro.jsx";
import LeisureBenefitsGrid from "./LeisureBenefitsGrid.jsx";

function getValidItems(items) {
  if (!Array.isArray(items)) return [];

  return items.filter(
    (item) =>
      item &&
      typeof item === "object" &&
      (item.title || item.description || item.iconKey),
  );
}

export default function LeisureBenefitsSection({ data }) {
  if (!data) return null;

  const items = getValidItems(data.items);
  if (!data.intro && items.length === 0) return null;

  const titleId = data.intro?.title ? `${data.id}-title` : undefined;
  const ariaLabel = titleId ? undefined : data.ui?.ariaLabel;

  return (
    <section
      id={data.id}
      className={styles.section}
      aria-labelledby={titleId}
      aria-label={ariaLabel}
    >
      <div className={styles.surface}>
        <LeisureBenefitsIntro
          intro={data.intro}
          sectionId={data.id}
          titleId={titleId}
        />

        <LeisureBenefitsGrid items={items} />
      </div>
    </section>
  );
}
