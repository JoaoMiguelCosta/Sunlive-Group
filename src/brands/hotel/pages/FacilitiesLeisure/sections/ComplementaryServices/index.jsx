import TitleComplementaryServices from "./TitleComplementaryServices.jsx";
import DescriptionComplementaryServices from "./DescriptionComplementaryServices.jsx";
import ComplementaryServicesGrid from "./ComplementaryServicesGrid.jsx";

import styles from "./ComplementaryServices.module.css";

export default function ComplementaryServicesSection() {
  return (
    <section
      id="facilities-services"
      className={styles.section}
      aria-label="Serviços Complementares"
    >
      <div className={styles.inner}>
        <div className={styles.introBlock}>
          <TitleComplementaryServices />
          <div className={styles.descriptionWrap}>
            <DescriptionComplementaryServices />
          </div>
        </div>

        <ComplementaryServicesGrid />
      </div>
    </section>
  );
}
