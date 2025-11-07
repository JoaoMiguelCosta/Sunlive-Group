import styles from "./PartnerHotelsSection.module.css";
import PartnerHotelsHeadline from "./PartnerHotelsHeadline.jsx";
import PartnerHotelsCardsGrid from "./PartnerHotelsCardsGrid.jsx";
import ContactCTA from "./ContactCTA.jsx";
import travelBrand from "../../ConfigTravel.jsx";

export default function PartnerHotelsSection({ className = "" }) {
  const cfg = travelBrand?.sections?.partnerHotels;
  if (!cfg) return null;

  const { id = "parceiros-hoteis", cta } = cfg;

  return (
    <section
    
      id={id}
      className={[styles.section, className].filter(Boolean).join(" ")}
      role="region"
      aria-label="Hotéis parceiros Sunlive Travel"
      data-theme="prestige-noir"
    >
      <div className={styles.inner}>
        <PartnerHotelsHeadline />
        <PartnerHotelsCardsGrid />
        <ContactCTA cta={cta} />
      </div>
    </section>
  );
}
