import styles from "./TravelPartnersHeadline.module.css";
import HeadlineBlock from "../../../../shared/components/HeadlineBlock/index.jsx";
import travelBrand from "../../config/registry/index.js";

export default function TravelPartnersHeadline() {
  const hl = travelBrand?.sections?.travelPartners?.headline;
  if (!hl) return null;

  return (
    <div className={styles.wrap}>
      <HeadlineBlock
        eyebrow={hl.eyebrow}
        title={hl.title}
        lead={hl.lead}
        align="center"
        variant="banded"
        as="h2"
        max="lg"
      />
    </div>
  );
}
