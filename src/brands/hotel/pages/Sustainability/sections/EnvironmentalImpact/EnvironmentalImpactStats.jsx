import hotelBrand from "../../../../config/index.js";
import HotelStatsGrid from "../../../../shared/ui/HotelStatsGrid/HotelStatsGrid.jsx";
import styles from "./EnvironmentalImpactStats.module.css";

export default function EnvironmentalImpactStats() {
  const section =
    hotelBrand?.pages?.sustainability?.sections?.environmentalImpact ?? null;

  const items = section?.stats?.items ?? [];

  if (!items.length) return null;

  return <HotelStatsGrid items={items} className={styles.grid} />;
}
