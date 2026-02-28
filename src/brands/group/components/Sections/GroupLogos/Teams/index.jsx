import styles from "../_shared/LogosSection.module.css";
import LogoGridSection from "../_shared/LogoGridSection";

import groupLogosPage from "../../../../config/pages/logos.js";

export default function Teams() {
  const data = groupLogosPage?.teams;
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
