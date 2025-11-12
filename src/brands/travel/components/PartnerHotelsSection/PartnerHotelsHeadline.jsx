// src/brands/travel/components/PartnerHotelsSection/PartnerHotelsHeadline.jsx
import styles from "./PartnerHotelsHeadline.module.css";
import HeadlineBlock from "../../../../shared/components/HeadlineBlock/index.jsx";
import travelBrand from "../../ConfigTravel.jsx";

export default function PartnerHotelsHeadline() {
  const hl = travelBrand?.sections?.partnerHotels?.headline;
  if (!hl) return null;

  // Título principal vem do eyebrow original (“Hotéis Parceiros Sunlive”)
  const mainTitle = (hl.eyebrow || "")
    .replace(/\s*Travel\s*$/i, "") // remove “Travel” do fim
    .trim();

  return (
    <div className={styles.wrap}>
      <HeadlineBlock
        title={mainTitle}
        /* lead agora só com o texto principal definido no config */
        lead={hl.lead}
        align="center"
        variant="banded"
        as="h2"
        max="lg"
      />
    </div>
  );
}
