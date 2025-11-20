// src/brands/sports/pages/LeisureSportsTourism/LeisureExperiencesGrid.jsx
import styles from "./LeisureExperiencesGrid.module.css";
import SportsLeisureCard from "../../../../shared/components/Sports/SportsLeisureCard/SportsLeisureCard.jsx";

export default function LeisureExperiencesGrid({ data }) {
  if (!data?.items?.length) return null;

  const { id = "leisure-sports-tourism-experiences-grid", items } = data;

  return (
    <section
      id={id}
      className={styles.section}
      aria-label="Experiências de Turismo Desportivo Lúdico"
    >
      <div className={styles.inner}>
        <div className={styles.grid}>
          {items.map((item) => (
            <SportsLeisureCard
              key={item.key}
              title={item.title}
              description={item.description}
              experiences={item.experiences}
              image={item.image?.src}
              imageAlt={item.image?.alt}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
