import styles from "../_shared/LogosSection.module.css";
import LogoGridSection from "../_shared/LogoGridSection";

import groupLogosPage from "../../../../config/pages/logos.js";

export default function Committees() {
  const data = groupLogosPage?.committees ?? { title: "COMMITTEES", items: [] };

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
