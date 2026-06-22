import styles from "../_shared/LogosSection.module.css";
import LogoGridSection from "../_shared/LogoGridSection";

import internationalFederations from "../../../../config/sections/logos/internationalFederations.js";

function hasItems(items) {
  return Array.isArray(items) && items.length > 0;
}

export default function InternationalFederations() {
  const data = internationalFederations;

  if (!data || !hasItems(data.items)) return null;

  const sectionId = data.id || "federacoes-internacionais";
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
