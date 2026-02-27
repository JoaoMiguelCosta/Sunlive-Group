// src/brands/group/components/SectionLogos/Teams/index.jsx
import styles from "../_shared/LogosSection.module.css";
import configGroupLogos from "../../../../config/ConfigGroupLogos.jsx";
import LogoGridSection from "../_shared/LogoGridSection";

export default function Teams() {
  const data = configGroupLogos?.teams;
  if (!data) return null;

  return (
    <section
      id="teams"
      className={styles.section}
      aria-labelledby="teams-title"
    >
      <LogoGridSection
        id="teams-title"
        title={data.title}
        items={data.items}
        columnsMax={4}
      />
    </section>
  );
}
