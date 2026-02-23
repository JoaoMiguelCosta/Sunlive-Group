import styles from "./LogisticsSolutionsSection.module.css";
import LogisticsSolutionsHeadline from "./LogisticsSolutionsHeadline.jsx";
import ServiceOfferingsGrid from "./ServiceOfferingsGrid.jsx";
import ContactCTA from "./ContactCTA.jsx";
import travelBrand from "../../brand";

export default function LogisticsSolutionsSection() {
  const cfg = travelBrand?.sections?.logisticsSolutions;
  if (!cfg) return null;

  return (
    <section
      id="logistica"
      className={styles.section}
      data-section="logistics-solutions"
      aria-label="Soluções Integradas de Logística"
    >
      <div className={styles.inner}>
        <LogisticsSolutionsHeadline />
        <ServiceOfferingsGrid />
        <ContactCTA cta={cfg.cta} />
      </div>
    </section>
  );
}
