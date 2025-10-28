// src/brands/group/components/SectionLogos/Committees/index.jsx
import styles from "../../../../../shared/styles/LogosSection.module.css";
import configGroupLogos from "../../../ConfigGroupLogos.jsx";
import LogoGridSection from "../../../../../shared/components/LogoGridSection";

export default function Committees() {
  const data = configGroupLogos?.committees ?? {
    title: "COMMITTEES",
    items: [],
  };

  return (
    <section
      id="committees"
      className={styles.section}
      aria-labelledby="committees-title"
    >
      <LogoGridSection
        id="committees-title"
        title={data.title}
        items={data.items}
        columnsMax={4}
      />
    </section>
  );
}
