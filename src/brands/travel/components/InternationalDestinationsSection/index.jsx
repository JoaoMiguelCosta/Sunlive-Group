import styles from "./InternationalDestinationsSection.module.css";
import DestinationsIntroBar from "./DestinationsIntroBar.jsx";
import DestinationsInternational from "./DestinationsInternational.jsx";
import ContactCTA from "./ContactCTA.jsx";
import travelBrand from "../../brand";

export default function InternationalDestinationsSection({ className = "" }) {
  const cfg = travelBrand?.sections?.internationalDestinations;
  if (!cfg) return null;

  const { id = "destinos-internacionais" } = cfg;

  return (
    <section
      id={id}
      className={[styles.section, className].filter(Boolean).join(" ")}
      role="region"
      aria-label="Destinos internacionais"
      data-theme="prestige-noir"
    >
      <div className={styles.inner}>
        <DestinationsIntroBar />
        <DestinationsInternational />
        <ContactCTA cta={cfg.cta} />
      </div>
    </section>
  );
}
