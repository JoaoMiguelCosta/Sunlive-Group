import sustainability from "../../../../config/pages/sustainability.js";
const environmentalImpact = sustainability.sections.environmentalImpact;
import HotelStatsGrid from "../../../../shared/ui/HotelStatsGrid/HotelStatsGrid.jsx";
import styles from "./EnvironmentalImpactStats.module.css";

export default function EnvironmentalImpactStats() {
  const section = environmentalImpact;

  const items = Array.isArray(section?.stats?.items) ? section.stats.items : [];

  if (!items.length) return null;

  return (
    <HotelStatsGrid
      items={items}
      className={styles.grid}
      itemClassName={styles.card}
      ariaLabel="Indicadores de impacto ambiental"
      variant="compactBalanced"
    />
  );
}
