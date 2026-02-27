// src/brands/group/components/SectionLogos/InternationalFederations/index.jsx
import styles from "../_shared/LogosSection.module.css";
import configGroupLogos from "../../../../config/ConfigGroupLogos.jsx";
import LogoGridSection from "../_shared/LogoGridSection";

export default function InternationalFederations() {
  const data = configGroupLogos?.internationalFederations;
  if (!data) return null;

  return (
    <section
      id="federations-intl"
      className={styles.section}
      aria-labelledby="federations-intl-title"
    >
      <LogoGridSection
        id="federations-intl-title"
        title={data.title}
        items={data.items}
        columnsMax={4}
      />
    </section>
  );
}
