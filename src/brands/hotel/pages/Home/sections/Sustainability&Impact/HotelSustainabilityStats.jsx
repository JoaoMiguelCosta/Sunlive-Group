// src/brands/hotel/pages/home/sections/Sustainability&Impact/HotelSustainabilityStats.jsx
import HotelWhoWeHostCard from "../../../../shared/ui/HotelWhoWeHostCard/HotelWhoWeHostCard.jsx";
import styles from "./HotelSustainabilityStats.module.css";

import hotelBrand, { resolveHotelIcon } from "../../../../config/index.js";

function resolveStatIcon(iconKey) {
  if (!iconKey) return null;

  const icons = hotelBrand?.icons ?? {};
  const Icon = resolveHotelIcon(icons, iconKey);

  return Icon ? <Icon className={styles.statIcon} aria-hidden="true" /> : null;
}

/**
 * HotelSustainabilityStats
 * Wrapper que usa o card reutilizável para mostrar as métricas.
 *
 * Props:
 *  - stats: Array<{ id, value, description, iconKey? }>
 */
export default function HotelSustainabilityStats({ stats = [] }) {
  if (!stats.length) return null;

  return (
    <div className={styles.grid}>
      {stats.map((item) => (
        <HotelWhoWeHostCard
          key={item.id}
          id={item.id}
          icon={resolveStatIcon(item.iconKey)}
          description={item.description}
          statValue={item.value}
          variant="metric"
        />
      ))}
    </div>
  );
}
