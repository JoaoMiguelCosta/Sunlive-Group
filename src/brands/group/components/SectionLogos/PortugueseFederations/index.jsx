// src/brands/group/components/SectionLogos/PortugueseFederations/index.jsx
import styles from "../../../../../shared/styles/LogosSection.module.css";
import configGroupLogos from "../../../ConfigGroupLogos.jsx";
import LogoGridSection from "../../../../../shared/components/LogoGridSection";

export default function PortugueseFederations() {
  const data = configGroupLogos?.portugueseFederations;
  if (!data) return null;

  return (
    <section
      id="federations-pt"
      className={styles.section}
      aria-labelledby="federations-pt-title"
    >
      <LogoGridSection
        id="federations-pt-title"
        title={data.title}
        items={data.items}
        columnsMax={4}
      />
    </section>
  );
}
