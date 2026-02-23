import styles from "./PartnerHotelsHeadline.module.css";
import HeadlineBlock from "../../../../shared/components/HeadlineBlock/index.jsx";
import travelBrand from "../../brand";

export default function PartnerHotelsHeadline() {
  const hl = travelBrand?.sections?.partnerHotels?.headline;
  if (!hl) return null;

  const mainTitle = (hl.eyebrow || "").replace(/\s*Travel\s*$/i, "").trim();

  return (
    <div className={styles.wrap}>
      <HeadlineBlock
        title={mainTitle}
        lead={hl.lead}
        align="center"
        variant="banded"
        as="h2"
        max="lg"
      />
    </div>
  );
}
