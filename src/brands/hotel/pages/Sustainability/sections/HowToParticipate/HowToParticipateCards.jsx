import sustainability from "../../../../config/pages/sustainability.js";
const howToParticipate = sustainability.sections.howToParticipate;
import { resolveHotelIcon } from "../../../../config/core/iconKeyMap.js";
import { ICONS } from "../../../../config/core/resolvedVisuals.js";
import SustainabilityActionCard from "../../../../shared/ui/SustainabilityActionCard/SustainabilityActionCard.jsx";

import styles from "./HowToParticipateCards.module.css";

function buildParticipationItems(participationItems) {
  if (!Array.isArray(participationItems)) {
    return [];
  }

  return participationItems.map((item, index) => {
    const IconComponent = item?.iconKey
      ? resolveHotelIcon(ICONS, item.iconKey)
      : null;

    return {
      ...item,
      step: String(index + 1).padStart(2, "0"),
      resolvedIcon: IconComponent ? <IconComponent /> : null,
    };
  });
}

export default function HowToParticipateCards() {
  const section = howToParticipate;

  const items = buildParticipationItems(
    section?.participationCards?.items,
  );

  if (items.length === 0) {
    return null;
  }

  return (
    <div className={styles.grid} aria-label="Formas de participar">
      {items.map((item) => (
        <div key={item.id} className={styles.item}>
          <SustainabilityActionCard
            title={item.title}
            description={item.description}
            icon={item.resolvedIcon}
            ariaLabel={item.title}
            eyebrow={item.eyebrow}
            step={item.step}
            className={styles.card}
          />
        </div>
      ))}
    </div>
  );
}

