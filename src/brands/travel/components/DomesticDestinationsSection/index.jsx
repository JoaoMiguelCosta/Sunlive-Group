// src/brands/travel/components/DomesticDestinationsSection/index.jsx
import styles from "./DomesticDestinationsSection.module.css";
import DestinationsIntroBar from "./DestinationsIntroBar.jsx";
import DestinationsBrowser from "./DestinationsBrowser.jsx"; // 👈 novo
import ContactCTA from "./ContactCTA.jsx";
import travelBrand from "../../ConfigTravel.jsx";

export default function DomesticDestinationsSection({ className = "" }) {
  const cfg = travelBrand?.sections?.domesticDestinations;
  if (!cfg) return null;

  const { id = "destinos-nacionais" } = cfg;
  const sectionId = `${id}-section`;

  return (
    <section
      id={sectionId}
      className={[styles.section, className].filter(Boolean).join(" ")}
      role="region"
      aria-label="Destinos nacionais"
      data-theme="prestige-noir"
    >
      <DestinationsIntroBar />
      <DestinationsBrowser /> {/* 👈 substitui a grelha simples */}
      <ContactCTA cta={cfg.cta} />
    </section>
  );
}
