// src/brands/sports/pages/SpecialisedServices/AreasSection.jsx
import styles from "./AreasSection.module.css";
import SpecialistServiceCard from "../../../../shared/components/Sports/SpecialistServiceCard/SpecialistServiceCard.jsx";

export default function AreasSection({ data }) {
  if (!data) return null;

  const cards = data.serviceCards ?? [];
  if (!cards.length) return null;

  const sectionId = data.areasIntro?.id || "specialised-services-areas-intro";

  return (
    <section
      id={sectionId}
      className={styles.section}
      aria-label="Áreas de Especialização — Serviços Especializados"
    >
      <div className={styles.inner}>
        <div className={styles.grid}>
          {cards.map((card) => (
            <SpecialistServiceCard
              key={card.key}
              title={card.title}
              badge={card.badge}
              description={card.description}
              items={card.items}
              listTitle={card.listTitle}
              // se quiseres mais tarde: icon={ICONS[...] }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
