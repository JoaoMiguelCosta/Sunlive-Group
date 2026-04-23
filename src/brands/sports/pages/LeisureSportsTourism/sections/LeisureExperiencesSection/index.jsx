import styles from "./LeisureExperiencesSection.module.css";

import LeisureExperiencesIntro from "./LeisureExperiencesIntro.jsx";
import LeisureExperiencesShowcase from "./LeisureExperiencesShowcase.jsx";

import { getValidExperienceEntries } from "./leisureExperiences.utils.js";

function normalizeItems(items = [], sectionId = "leisure-experiences") {
  return getValidExperienceEntries(items).map((item, index) => ({
    ...item,
    key: item.key || `${sectionId}-item-${index + 1}`,
  }));
}

export default function LeisureExperiencesSection({ data }) {
  if (!data) return null;

  const items = normalizeItems(data.items, data.id);

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
        <LeisureExperiencesIntro
          intro={data.intro}
          sectionId={data.id}
          titleId={titleId}
        />

        <LeisureExperiencesShowcase items={items} sectionId={data.id} />
      </div>
    </section>
  );
}
