import TitleComplementaryServices from "./TitleComplementaryServices.jsx";
import DescriptionComplementaryServices from "./DescriptionComplementaryServices.jsx";
import ComplementaryServicesGrid from "./ComplementaryServicesGrid.jsx";

import styles from "./ComplementaryServices.module.css";

export default function ComplementaryServicesSection() {
  return (
    <section id="facilities-services" className={styles.section}>
      <TitleComplementaryServices />
      <DescriptionComplementaryServices />
      <ComplementaryServicesGrid />
    </section>
  );
}
