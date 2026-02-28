import styles from "../_shared/LogosSection.module.css";
import LogoGridSection from "../_shared/LogoGridSection";

import groupLogosPage from "../../../../config/pages/logos.js";

export default function InternationalFederations() {
  const data = groupLogosPage?.internationalFederations;
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
