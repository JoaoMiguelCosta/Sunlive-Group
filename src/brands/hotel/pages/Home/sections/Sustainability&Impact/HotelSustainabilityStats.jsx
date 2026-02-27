// src/brands/hotel/pages/home/sections/Sustainability&Impact/HotelSustainabilityStats.jsx
import HotelWhoWeHostCard from "../../../../shared/ui/HotelWhoWeHostCard/HotelWhoWeHostCard.jsx";
import styles from "./Sustainability&Impact.module.css";

function getIconForStat(id) {
  switch (id) {
    case "energy":
      return "⚡";
    case "water":
      return "💧";
    case "recycling":
      return "♻️";
    case "local-products":
      return "🧺";
    default:
      return null;
  }
}

/**
 * HotelSustainabilityStats
 * Wrapper que usa o card reutilizável para mostrar as 4 métricas.
 *
 * Props:
 *  - stats: Array<{ id, value, description }>
 */
export default function HotelSustainabilityStats({ stats = [] }) {
  if (!stats.length) return null;

  return (
    <div className={styles.statsGrid}>
      {stats.map((item) => (
        <HotelWhoWeHostCard
          key={item.id}
          id={item.id}
          icon={getIconForStat(item.id)}
          title="" // escondido na variante metric
          description={item.description}
          statValue={item.value}
          variant="metric"
        />
      ))}
    </div>
  );
}
