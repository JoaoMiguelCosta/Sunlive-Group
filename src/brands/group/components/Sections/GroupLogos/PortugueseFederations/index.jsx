// src/brands/group/components/SectionLogos/PortugueseFederations/index.jsx
import styles from "../_shared/LogosSection.module.css";
import configGroupLogos from "../../../../config/ConfigGroupLogos.jsx";
import LogoGridSection from "../_shared/LogoGridSection";

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
