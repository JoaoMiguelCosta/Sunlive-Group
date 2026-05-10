import styles from "../_shared/LogosSection.module.css";
import LogoGridSection from "../_shared/LogoGridSection";

import groupLogosPage from "../../../../config/pages/logos.js";

function hasItems(items) {
  return Array.isArray(items) && items.length > 0;
}

export default function PortugueseFederations() {
  const data = groupLogosPage?.sections?.portugueseFederations;

  if (!data || !hasItems(data.items)) return null;

  const sectionId = data.id || "federacoes-portuguesas";
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
