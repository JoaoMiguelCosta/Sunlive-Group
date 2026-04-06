import styles from "./TravelPartnersHeadline.module.css";
import HeadlineBlock from "../../../../shared/components/HeadlineBlock/index.jsx";
import travelBrand from "../../config/index.js";

export default function TravelPartnersHeadline() {
  const hl = travelBrand?.sections?.travelPartners?.headline ?? null;
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
        theme="travel"
      />
    </div>
  );
}
