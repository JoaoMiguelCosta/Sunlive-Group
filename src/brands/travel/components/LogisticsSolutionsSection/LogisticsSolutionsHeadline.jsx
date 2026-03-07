import styles from "./LogisticsSolutionsHeadline.module.css";
import HeadlineBlock from "../../../../shared/components/HeadlineBlock/index.jsx";
import travelBrand from "../../config/index.js";

export default function LogisticsSolutionsHeadline() {
  const headline = travelBrand?.sections?.logisticsSolutions?.headline;
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
      />
    </div>
  );
}
