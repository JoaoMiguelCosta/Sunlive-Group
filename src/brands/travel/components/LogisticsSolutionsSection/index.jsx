import styles from "./LogisticsSolutionsSection.module.css";
import LogisticsSolutionsHeadline from "./LogisticsSolutionsHeadline.jsx";
import ServiceOfferingsGrid from "./ServiceOfferingsGrid.jsx";
import ContactCTA from "./ContactCTA.jsx";
import travelBrand from "../../config/index.js";

export default function LogisticsSolutionsSection() {
  const cfg = travelBrand?.sections?.logisticsSolutions ?? null;
  if (!cfg) return null;

  const sectionId = cfg.id ?? "logistica";
  const sectionLabel =
    cfg?.ui?.sectionAriaLabel ?? "Soluções Integradas de Logística";

  const backgroundImageSrc = cfg?.backgroundMedia?.imageSrc ?? null;
  const backgroundImageAlt = cfg?.backgroundMedia?.imageAlt ?? "";

  return (
    <section
      id={sectionId}
      className={styles.section}
      data-section="logistics-solutions"
      aria-label={sectionLabel}
    >
      {backgroundImageSrc ? (
        <div className={styles.mediaLayer} aria-hidden="true">
          <img
            src={backgroundImageSrc}
            alt={backgroundImageAlt}
            className={styles.backgroundImage}
          />
        </div>
      ) : null}

      <div className={styles.inner}>
        <LogisticsSolutionsHeadline />
        <ServiceOfferingsGrid />
        <ContactCTA cta={cfg.cta} />
      </div>
    </section>
  );
}
