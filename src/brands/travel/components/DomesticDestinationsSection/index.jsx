import styles from "./DomesticDestinationsSection.module.css";
import DestinationsIntroBar from "./DestinationsIntroBar.jsx";
import DestinationsBrowser from "./DestinationsBrowser.jsx";
import ContactCTA from "./ContactCTA.jsx";
import travelBrand from "../../config/index.js";

export default function DomesticDestinationsSection({ className = "" }) {
  const cfg = travelBrand?.sections?.domesticDestinations ?? null;
  if (!cfg) return null;

  const { id = "destinos-nacionais" } = cfg;

  return (
    <section
      id={id}
      className={[styles.section, className].filter(Boolean).join(" ")}
      role="region"
      aria-label="Destinos nacionais"
      data-theme="prestige-noir"
    >
      <div className={styles.inner}>
        <DestinationsIntroBar />
        <DestinationsBrowser />
        <ContactCTA cta={cfg.cta} />
      </div>
    </section>
  );
}
