import styles from "./AreasSection.module.css";

import SpecialistServiceCard from "../../../shared/ui/SpecialistServiceCard/SpecialistServiceCard.jsx";

import sportsBrand, { resolveSportsIcon } from "../../../config/index.js";

export default function AreasSection({ data }) {
  if (!data) return null;

  const cards = data.serviceCards ?? [];
  if (!cards.length) return null;

  const icons = sportsBrand.icons;
  const sectionId = data.areasIntro?.id || "specialised-services-areas-intro";

  return (
    <section
      id={sectionId}
      className={styles.section}
      aria-label="Áreas de Especialização — Serviços Especializados"
    >
      <div className={styles.inner}>
        <div className={styles.grid}>
          {cards.map((card) => {
            const IconComponent = resolveSportsIcon(icons, card.iconKey);

            return (
              <SpecialistServiceCard
                key={card.key}
                title={card.title}
                badge={card.badge}
                description={card.description}
                items={card.items}
                listTitle={card.listTitle}
                enableFlip
                icon={
                  IconComponent ? (
                    <IconComponent className={styles.cardIcon} />
                  ) : null
                }
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
