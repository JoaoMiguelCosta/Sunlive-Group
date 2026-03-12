import HotelWhoWeHostCard from "../HotelWhoWeHostCard/HotelWhoWeHostCard.jsx";
import styles from "./HotelStatsGrid.module.css";

import hotelBrand, { resolveHotelIcon } from "../../../config/index.js";

function resolveStatIcon(iconKey) {
  if (!iconKey) return null;

  const icons = hotelBrand?.icons ?? {};
  const Icon = resolveHotelIcon(icons, iconKey);

  return Icon ? <Icon className={styles.statIcon} aria-hidden="true" /> : null;
}

/**
 * HotelStatsGrid
 *
 * Props:
 * - items: Array<{ id, value, description, iconKey? }>
 * - className?: string
 */
export default function HotelStatsGrid({ items = [], className = "" }) {
  if (!items.length) return null;

  const classNames = [styles.grid, className].filter(Boolean).join(" ");

  return (
    <div className={classNames}>
      {items.map((item) => (
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
