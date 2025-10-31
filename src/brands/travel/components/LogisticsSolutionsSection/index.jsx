// src/brands/travel/sections/LogisticsSolutionsSection/index.jsx
import styles from "./LogisticsSolutionsSection.module.css";
import LogisticsSolutionsHeadline from "./LogisticsSolutionsHeadline.jsx";
import ServiceOfferingsGrid from "./ServiceOfferingsGrid.jsx";

export default function LogisticsSolutionsSection() {
  return (
    <section
      id="logistica"
      className={styles.section}
      data-section="logistics-solutions"
      aria-label="Soluções Integradas de Logística"
    >
      <LogisticsSolutionsHeadline />

      {/* Grid dos serviços (lê do ConfigTravel por omissão) */}
      <ServiceOfferingsGrid />
    </section>
  );
}
