// src/brands/group/components/SectionLogos/Associations/index.jsx
import styles from "../../../../../shared/styles/LogosSection.module.css";
import configGroupLogos from "../../../ConfigGroupLogos.jsx";
import LogoGridSection from "../../../../../shared/components/LogoGridSection";

export default function Associations() {
  const data = configGroupLogos?.associations;
  if (!data) return null;

  return (
    <section
      id="associations"
      className={`${styles.section} ${styles.flushBottom} ${styles.pairNextTight} ${styles.tightBottom}`}
      aria-labelledby="associations-title"
    >
      <LogoGridSection
        id="associations-title"
        title={data.title}
        items={data.items}
        columnsMax={4}
      />
    </section>
  );
}
