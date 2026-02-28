import styles from "../_shared/LogosSection.module.css";
import LogoGridSection from "../_shared/LogoGridSection";

import groupLogosPage from "../../../../config/pages/logos.js";

export default function Associations() {
  const data = groupLogosPage?.associations;
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
