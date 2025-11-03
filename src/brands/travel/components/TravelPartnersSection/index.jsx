import styles from "./TravelPartersSection.module.css";
import TravelPartnersHeadline from "./TravelPartnersHeadline.jsx";
import TravelPartnersCardsGrid from "./TravelPartnersCardsGrid.jsx";

import travelBrand from "../../ConfigTravel.jsx";

export default function TravelPartnersSection({ className = "" }) {
  const cfg = travelBrand?.sections?.travelPartners;
  if (!cfg) return null;

  const { id = "parceiros-viagens" } = cfg;
  const sectionId = `${id}-section`;

  return (
    <section
      id={sectionId}
      className={[styles.section, className].filter(Boolean).join(" ")}
      role="region"
      aria-label="Parceiros de Viagem"
      data-theme="prestige-noir"
    >
      {/* 1) Headline (banded) */}
      <TravelPartnersHeadline />

      {/* 2) Grelha de parceiros (cards reutilizando DestinationCard com variant="partner") */}
      <TravelPartnersCardsGrid />

    </section>
  );
}
