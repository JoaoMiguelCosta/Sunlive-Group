import styles from "../_shared/LogosSection.module.css";
import LogoGridSection from "../_shared/LogoGridSection";

import logosPage from "../../../../config/pages/logos.js";
const committees = logosPage.sections.committees;

function hasItems(items) {
  return Array.isArray(items) && items.length > 0;
}

export default function Committees() {
  const data = committees;

  if (!data || !hasItems(data.items)) return null;

  const sectionId = data.id || "comites";
  const headingId = `${sectionId}-title`;

  return (
    <section
      id={sectionId}
      className={styles.section}
      aria-labelledby={headingId}
    >
      <LogoGridSection
        id={headingId}
        title={data.title}
        items={data.items}
        columnsMax={data.columnsMax || 4}
      />
    </section>
  );
}
