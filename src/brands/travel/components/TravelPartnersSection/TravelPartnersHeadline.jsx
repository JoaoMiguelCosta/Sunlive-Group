import styles from "./TravelPartnersHeadline.module.css";
import HeadlineBlock from "../../../../shared/components/HeadlineBlock";
import travelBrand from "../../ConfigTravel.jsx";

/**
 * TravelPartnersHeadline
 * - Lê a cópia da secção travelPartners no ConfigTravel
 * - Usa o HeadlineBlock (banded) alinhado ao content width da página
 */
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
