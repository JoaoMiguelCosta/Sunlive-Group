import sustainability from "../../../../config/pages/sustainability.js";
const futureGoals = sustainability.sections.futureGoals;
import { resolveHotelIcon } from "../../../../config/core/iconKeyMap.js";
import { ICONS } from "../../../../config/core/resolvedVisuals.js";
import SustainabilityActionCard from "../../../../shared/ui/SustainabilityActionCard/SustainabilityActionCard.jsx";

import styles from "./FutureGoalsCards.module.css";

function buildFutureGoalItems(goalItems) {
  if (!Array.isArray(goalItems)) {
    return [];
  }

  return goalItems.map((item, index) => {
    const IconComponent = item?.iconKey
      ? resolveHotelIcon(ICONS, item.iconKey)
      : null;

    return {
      ...item,
      step: item?.step ?? String(index + 1).padStart(2, "0"),
      resolvedIcon: IconComponent ? <IconComponent /> : null,
    };
  });
}

export default function FutureGoalsCards() {
  const section = futureGoals;

  const items = buildFutureGoalItems(section?.goalCards?.items);

  if (items.length === 0) {
    return null;
  }

  const desktopColumns = Math.min(items.length, 3);

  return (
    <div
      className={styles.grid}
      role="list"
      aria-label="Objetivos futuros"
      style={{ "--future-goals-columns": desktopColumns }}
    >
      {items.map((item) => (
        <div key={item.id} role="listitem" className={styles.item}>
          <SustainabilityActionCard
            title={item.title}
            description={item.description}
            icon={item.resolvedIcon}
            ariaLabel={item.title}
            eyebrow={item.eyebrow}
            step={item.step}
            variant="futureGoals"
            className={styles.card}
          />
        </div>
      ))}
    </div>
  );
}

