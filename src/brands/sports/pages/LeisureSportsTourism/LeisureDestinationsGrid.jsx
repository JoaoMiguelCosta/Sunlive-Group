// src/brands/sports/pages/LeisureSportsTourism/LeisureDestinationsGrid.jsx
import styles from "./LeisureDestinationsGrid.module.css";
import SportsDestinationCard from "../../../../shared/components/Sports/SportsDestinationCard/SportsDestinationCard.jsx";

export default function LeisureDestinationsGrid({ data }) {
  if (!data?.items?.length) return null;

  const { id = "leisure-sports-tourism-destinations-grid", items } = data;

  return (
    <section
      id={id}
      className={styles.section}
      aria-label="Destinos de Turismo Desportivo"
    >
      <div className={styles.inner}>
        <div className={styles.grid}>
          {items.map((item) => (
            <SportsDestinationCard
              key={item.key}
              title={item.title}
              description={item.description}
              highlights={item.highlights}
              image={item.image?.src}
              imageAlt={item.image?.alt}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
