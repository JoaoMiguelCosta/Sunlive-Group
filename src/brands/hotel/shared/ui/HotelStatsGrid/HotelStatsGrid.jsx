import styles from "./HotelStatsGrid.module.css";

import hotelBrand, { resolveHotelIcon } from "../../../config/index.js";

function resolveStatIcon(iconKey, iconClassName = "") {
  if (!iconKey) return null;

  const icons = hotelBrand?.icons ?? {};
  const Icon = resolveHotelIcon(icons, iconKey);

  const classNames = [styles.statIcon, iconClassName].filter(Boolean).join(" ");

  return Icon ? <Icon className={classNames} aria-hidden="true" /> : null;
}

/**
 * HotelStatsGrid
 *
 * Props:
 * - items: Array<{ id, label?, value, description, iconKey? }>
 * - className?: string
 * - itemClassName?: string
 * - ariaLabel?: string
 * - variant?: "default" | "compactBalanced"
 */
export default function HotelStatsGrid({
  items = [],
  className = "",
  itemClassName = "",
  ariaLabel = "Indicadores",
  variant = "default",
}) {
  const safeItems = Array.isArray(items) ? items : [];

  if (!safeItems.length) return null;

  const gridVariantClass =
    variant !== "default" ? styles[`${variant}Grid`] : "";

  const cardVariantClass =
    variant !== "default" ? styles[`${variant}Card`] : "";

  const classNames = [styles.grid, gridVariantClass, className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classNames} role="list" aria-label={ariaLabel}>
      {safeItems.map((item) => {
        const icon = resolveStatIcon(item.iconKey);
        const itemAria = [item.label, item.value, item.description]
          .filter(Boolean)
          .join(" ");

        const cardClassNames = [styles.card, cardVariantClass, itemClassName]
          .filter(Boolean)
          .join(" ");

        return (
          <article
            key={item.id}
            className={cardClassNames}
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
