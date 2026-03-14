import hotelBrand from "../../../../config/index.js";

import SustainabilityTitle from "./SustainabilityTitle.jsx";
import SustainabilityDescription from "./SustainabilityDescription.jsx";
import SustainabilityHighlightBanner from "./SustainabilityHighlightBanner.jsx";
import SustainabilityPracticesGrid from "./SustainabilityPracticesGrid.jsx";

import styles from "./SustainabilityCommitment.module.css";

export default function SustainabilityCommitmentSection() {
  const section =
    hotelBrand?.pages?.sustainability?.sections?.sustainabilityCommitment ??
    null;

  if (!section) return null;

  const sectionId = section.id ?? "sustentabilidade-compromisso";
  const titleId = `${sectionId}-title`;

  return (
    <section
      id={sectionId}
      className={styles.section}
      aria-labelledby={titleId}
    >
      <div className={styles.inner}>
        <SustainabilityTitle titleId={titleId} />
        <SustainabilityDescription />
        <SustainabilityHighlightBanner />
        <SustainabilityPracticesGrid />
      </div>
    </section>
  );
}
