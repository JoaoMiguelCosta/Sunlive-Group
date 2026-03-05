// src/brands/travel/components/ContactCTASection/ContactCTAHeadline.jsx
import styles from "./ContactCTAHeadline.module.css";
import HeadlineBlock from "../../../../shared/components/HeadlineBlock/index.jsx";
import travelBrand from "../../config/registry/index.js";

export default function ContactCTAHeadline() {
  const headline = travelBrand?.sections?.contactCTA?.headline;
  if (!headline) return null;

  return (
    <div className={styles.wrap}>
      <HeadlineBlock
        id="contactar-heading"
        title={headline.title}
        lead={headline.lead}
        align="center"
        variant="banded"
        as="h2"
        max="lg"
      />
    </div>
  );
}
