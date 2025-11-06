import styles from "./InternationalDestinationsSection.module.css";
import DestinationsIntroBar from "./DestinationsIntroBar.jsx";
import DestinationsInternational from "./DestinationsInternational.jsx";
import ContactCTA from "./ContactCTA.jsx";
import travelBrand from "../../ConfigTravel.jsx";

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
        {/* 1) Headline com band */}
        <DestinationsIntroBar />

        {/* 2) Grid de cartões internacionais */}
        <DestinationsInternational />

        {/* 3) CTA final (sem ícone) vindo da config */}
        <ContactCTA cta={cfg.cta} />
      </div>
    </section>
  );
}
