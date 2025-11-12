// src/brands/travel/components/ContactCTASection/ContactCTAHeadline.jsx
import styles from "./ContactCTAHeadline.module.css";
import HeadlineBlock from "../../../../shared/components/HeadlineBlock/index.jsx";
import travelBrand from "../../ConfigTravel.jsx";

export default function ContactCTAHeadline() {
  const headline = travelBrand?.sections?.contactCTA?.headline;
  if (!headline) return null;

  return (
    // wrapper com a MESMA largura útil que o banner/hotéis
    <div className={styles.wrap}>
      <HeadlineBlock
        id="contactar-heading" // acessibilidade para aria-labelledby
        title={headline.title}
        lead={headline.lead}
        align="center"
        variant="banded"
        as="h2"
        max="lg" // mapeia para --content-w-effective
      />
    </div>
  );
}
