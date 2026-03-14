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
  const safeItems = Array.isArray(items) ? items : [];

  if (!safeItems.length) return null;

  const classNames = [styles.grid, className].filter(Boolean).join(" ");

  return (
    <div
      className={classNames}
      role="list"
      aria-label="Indicadores de sustentabilidade"
    >
      {safeItems.map((item) => {
        const icon = resolveStatIcon(item.iconKey);

        return (
          <article
            key={item.id}
            className={styles.card}
            role="listitem"
            aria-label={`${item.value} ${item.description}`}
          >
            <div className={styles.iconWrap}>{icon}</div>

            <p className={styles.value}>{item.value}</p>

            <p className={styles.description}>{item.description}</p>
          </article>
        );
      })}
    </div>
  );
}
