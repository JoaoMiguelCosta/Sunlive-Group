import sustainabilityCommitment from "../../../../config/sections/sustainability/sustainabilityCommitment.js";

import SustainabilityTitle from "./SustainabilityTitle.jsx";
import SustainabilityDescription from "./SustainabilityDescription.jsx";
import SustainabilityHighlightBanner from "./SustainabilityHighlightBanner.jsx";
import SustainabilityPracticesGrid from "./SustainabilityPracticesGrid.jsx";

import styles from "./SustainabilityCommitment.module.css";

export default function SustainabilityCommitmentSection() {
  const section = sustainabilityCommitment;

  if (!section) return null;

  const sectionId = section.id ?? "sustentabilidade-compromisso";
  const titleId = `${sectionId}-title`;
  const sectionAriaLabel =
    section?.ui?.sectionAriaLabel ??
    "Compromisso de sustentabilidade da Estalagem de Sangalhos";

  return (
    <section
      id={sectionId}
      className={styles.section}
      aria-labelledby={titleId}
      aria-label={sectionAriaLabel}
    >
      <div className={styles.inner}>
        <div className={styles.headingStack}>
          <SustainabilityTitle titleId={titleId} />

          <div className={styles.descriptionWrap}>
            <SustainabilityDescription />
          </div>
        </div>

        <div className={styles.bannerWrap}>
          <SustainabilityHighlightBanner />
        </div>

        <div className={styles.gridWrap}>
          <SustainabilityPracticesGrid />
        </div>
      </div>
    </section>
  );
}
