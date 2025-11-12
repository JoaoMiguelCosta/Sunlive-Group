// src/brands/travel/components/InternationalDestinationsSection/DestinationsIntroBar.jsx
import styles from "./DestinationsIntroBar.module.css";
import HeadlineBlock from "../../../../shared/components/HeadlineBlock/index.jsx";
import travelBrand from "../../ConfigTravel.jsx";

export default function DestinationsIntroBar() {
  const headline = travelBrand?.sections?.internationalDestinations?.headline;
  if (!headline) return null;

  return (
    <div className={styles.wrap}>
      <HeadlineBlock
        title={headline.title}
        lead={headline.lead}
        align="center"
        variant="banded"
        as="h2"
        /* mantém “lg” (igual ao grid). Se mudares o grid para xl,
           troca aqui para “xl” também. */
        max="lg"
      />
    </div>
  );
}
