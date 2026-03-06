// src/brands/sports/pages/SpecialisedServices/sections/AreasSection.jsx
import styles from "./AreasSection.module.css";

import SpecialistServiceCard from "../../../shared/ui/SpecialistServiceCard/SpecialistServiceCard.jsx";

import { BRAND_ICONS } from "../../../config/icons.public.js";

const CARD_ICONS = {
  apple: BRAND_ICONS.AppleIcon,
  video: BRAND_ICONS.VideoIcon,
  search: BRAND_ICONS.SearchIcon,
  brain: BRAND_ICONS.BrainIcon,
  bicipe: BRAND_ICONS.BicepsFlexedIcon,
  chart: BRAND_ICONS.ChartIcon,
  physical: BRAND_ICONS.PhysicalTherapyIcon,
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
