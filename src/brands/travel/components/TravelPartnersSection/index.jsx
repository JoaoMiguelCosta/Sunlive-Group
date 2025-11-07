// src/brands/travel/components/TravelPartnersSection/TravelPartnersSection.jsx
import styles from "./TravelPartersSection.module.css";
import TravelPartnersCardsGrid from "./TravelPartnersCardsGrid.jsx";
import TrustedCollaborationBanner from "./TrustedCollaborationBanner.jsx";

import travelBrand from "../../ConfigTravel.jsx";

export default function TravelPartnersSection({ className = "" }) {
  const cfg = travelBrand?.sections?.travelPartners;
  if (!cfg) return null;

  // usa o id vindo da config, com fallback sem sufixos
  const { id = "parceiros-viagens" } = cfg;

  const title =
    cfg?.headline?.title || cfg?.title || "Parceiros de Viagem Sunlive Travel";
  const subtitle =
    cfg?.headline?.subtitle ||
    cfg?.subtitle ||
    "Para garantir uma experiência de viagem completa e de alta qualidade, trabalhamos em parceria com operadores certificados e experientes.";

  return (
    <section
      id={id}
      className={[styles.section, className].filter(Boolean).join(" ")}
      role="region"
      aria-label="Parceiros de Viagem"
      data-theme="prestige-noir"
    >
      <TrustedCollaborationBanner title={title} subtitle={subtitle} />
      <TravelPartnersCardsGrid />
    </section>
  );
}