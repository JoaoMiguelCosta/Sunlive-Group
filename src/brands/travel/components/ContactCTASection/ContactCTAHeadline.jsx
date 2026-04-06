import styles from "./ContactCTAHeadline.module.css";
import HeadlineBlock from "../../../../shared/components/HeadlineBlock/index.jsx";
import travelBrand from "../../config/index.js";

export default function ContactCTAHeadline() {
  const headline = travelBrand?.sections?.contactCTA?.headline ?? null;
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
        theme="travel"
      />
    </div>
  );
}
