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
 * - items: Array<{ id, label?, value, description, iconKey? }>
 * - className?: string
 * - ariaLabel?: string
 */
export default function HotelStatsGrid({
  items = [],
  className = "",
  ariaLabel = "Indicadores",
}) {
  const safeItems = Array.isArray(items) ? items : [];

  if (!safeItems.length) return null;

  const classNames = [styles.grid, className].filter(Boolean).join(" ");

  return (
    <div className={classNames} role="list" aria-label={ariaLabel}>
      {safeItems.map((item) => {
        const icon = resolveStatIcon(item.iconKey);
        const itemAria = [item.label, item.value, item.description]
          .filter(Boolean)
          .join(" ");

        return (
          <article
            key={item.id}
            className={styles.card}
            role="listitem"
            aria-label={itemAria}
          >
            <div className={styles.cardTop}>
              <div className={styles.iconWrap}>{icon}</div>

              {item.label ? <p className={styles.label}>{item.label}</p> : null}
            </div>

            <div className={styles.metricBlock}>
              <p className={styles.value}>{item.value}</p>
              <p className={styles.description}>{item.description}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
