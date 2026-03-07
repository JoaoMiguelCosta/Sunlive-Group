import styles from "../_shared/LogosSection.module.css";
import LogoGridSection from "../_shared/LogoGridSection";

import groupLogosPage from "../../../../config/pages/logos.js";

export default function PortugueseFederations() {
  const data = groupLogosPage?.sections?.portugueseFederations;
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


