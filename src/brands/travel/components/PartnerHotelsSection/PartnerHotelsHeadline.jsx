// src/brands/travel/components/PartnerHotelsSection/PartnerHotelsHeadline.jsx
import styles from "./PartnerHotelsHeadline.module.css";
import HeadlineBlock from "../../../../shared/components/HeadlineBlock";
import travelBrand from "../../ConfigTravel.jsx";

export default function PartnerHotelsHeadline() {
  const hl = travelBrand?.sections?.partnerHotels?.headline;
  if (!hl) return null;

  // Título principal vem do eyebrow original (“Hotéis Parceiros Sunlive Travel”)
  const mainTitle = (hl.eyebrow || "")
    .replace(/\s*Travel\s*$/i, "") // remove “Travel” do fim
    .trim();

  // Sub-headline (logo por baixo do título)
  const subhead = hl.title || "Fique com Conforto";

  return (
    <div id="parceiros-hoteis" className={styles.wrap}>
      <HeadlineBlock
        /* sem eyebrow para não aparecer acima do título */
        title={mainTitle}
        /* lead recebe um nó React com a subheadline por cima do texto */
        lead={
          <>
            <span className={styles.subhead}>{subhead}</span>
            <br />
            {hl.lead}
          </>
        }
        align="center"
        variant="banded"
        as="h2"
        max="lg"
      />
    </div>
  );
}
