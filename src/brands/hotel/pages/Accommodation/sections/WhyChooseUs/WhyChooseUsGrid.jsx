import styles from "./WhyChooseUsGrid.module.css";

import { resolveHotelIcon } from "../../../../config/core/iconKeyMap.js";
import { ICONS } from "../../../../config/core/resolvedVisuals.js";
import SustainabilityActionCard from "../../../../shared/ui/SustainabilityActionCard/SustainabilityActionCard.jsx";

export default function WhyChooseUsGrid({ items = [] }) {
  const safeItems = Array.isArray(items)
    ? items.filter((item) => item?.id && (item.title || item.description))
    : [];

  if (!safeItems.length) return null;

  return (
    <div className={styles.wrap}>
      <div
        className={styles.grid}
        role="list"
        aria-label="Vantagens da estadia"
      >
        {safeItems.map((item) => {
          const IconComponent = resolveHotelIcon(ICONS, item.iconKey);

          return (
            <div key={item.id} role="listitem" className={styles.item}>
              <SustainabilityActionCard
                title={item.title}
                description={item.description}
                eyebrow={item.eyebrow}
                step={item.step}
                variant="whyChoose"
                icon={IconComponent ? <IconComponent size={18} /> : null}
                ariaLabel={item.title}
                className={styles.card}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
