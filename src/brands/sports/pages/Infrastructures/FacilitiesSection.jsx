// src/brands/sports/pages/Infrastructures/FacilitiesSection.jsx
import styles from "./FacilitiesSection.module.css";

import SportsFacilityCard from "../../../../shared/components/Sports/SportsFacilityCard/SportsFacilityCard.jsx";

/**
 * Grelha de 9 infraestruturas (3x3 em desktop)
 */
export default function FacilitiesSection({ data }) {
  const section = data?.facilitiesGrid;
  if (!section) return null;

  const { id = "sports-infrastructures-facilities", cards = [] } = section;

  if (!cards.length) return null;

  return (
    <section
      id={id}
      className={styles.section}
      aria-label="Infraestruturas principais — Sunlive Sports"
    >
      <div className={styles.inner}>
        <div className={styles.grid}>
          {cards.map((card) => (
            <SportsFacilityCard
              key={card.key}
              title={card.title}
              description={card.description}
              highlight={card.highlight}
              features={card.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
