import styles from "./DestinationsIntroBar.module.css";
import HeadlineBlock from "../../../../shared/components/HeadlineBlock/index.jsx";
import travelBrand from "../../config/index.js";

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
        max="lg"
        theme="travel"
      />
    </div>
  );
}
