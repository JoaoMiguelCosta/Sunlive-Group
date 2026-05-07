import hotelBrand from "../../../../config/index.js";

import TitleComplementaryServices from "./TitleComplementaryServices.jsx";
import DescriptionComplementaryServices from "./DescriptionComplementaryServices.jsx";
import ComplementaryServicesGrid from "./ComplementaryServicesGrid.jsx";

import styles from "./ComplementaryServices.module.css";

export default function ComplementaryServicesSection() {
  const section =
    hotelBrand?.pages?.facilities?.sections?.complementaryServices ?? null;

  if (!section) return null;

  const sectionId = section.id ?? "instalacoes-servicos";
  const titleId = `${sectionId}-title`;

  return (
    <section
      id={sectionId}
      className={styles.section}
      aria-labelledby={titleId}
    >
      <div className={styles.backgroundGlow} aria-hidden="true" />
      <div className={styles.backgroundGlowSecondary} aria-hidden="true" />

      <div className={styles.inner}>
        <header className={styles.introBlock}>
          <TitleComplementaryServices titleId={titleId} />

          <div className={styles.descriptionWrap}>
            <DescriptionComplementaryServices />
          </div>
        </header>

        <ComplementaryServicesGrid />
      </div>
    </section>
  );
}
