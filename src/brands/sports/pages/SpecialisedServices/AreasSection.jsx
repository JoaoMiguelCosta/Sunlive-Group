// src/brands/sports/pages/SpecialisedServices/AreasSection.jsx
import styles from "./AreasSection.module.css";
import SpecialistServiceCard from "../../../../shared/components/Sports/SpecialistServiceCard/SpecialistServiceCard.jsx";
import { ICONS } from "../../../../shared/config/BrandDefault.jsx";

// iconKey → componente
const CARD_ICONS = {
  apple: ICONS.AppleIcon,
  video: ICONS.VideoIcon,
  search: ICONS.SearchIcon,
  brain: ICONS.BrainIcon,
  bicipe: ICONS.BicepsFlexedIcon,
  chart: ICONS.ChartIcon,
  physical: ICONS.PhysicalTherapyIcon,
};

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
          {cards.map((card) => {
            const IconComponent = card.iconKey
              ? CARD_ICONS[card.iconKey]
              : null;

            return (
              <SpecialistServiceCard
                key={card.key}
                title={card.title}
                badge={card.badge}
                description={card.description}
                items={card.items}
                listTitle={card.listTitle}
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
