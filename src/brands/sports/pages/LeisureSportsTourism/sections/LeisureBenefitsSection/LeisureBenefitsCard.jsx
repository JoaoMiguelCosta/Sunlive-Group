import { resolveSportsIcon } from "../../../../config/core/iconKeyMap.js";
import { ICONS } from "../../../../config/core/resolvedVisuals.js";
import styles from "./LeisureBenefitsCard.module.css";
export default function LeisureBenefitsCard({ item, index = 0 }) {
  if (!item) return null;
  const Icon =
    resolveSportsIcon(ICONS, item.iconKey) ?? resolveSportsIcon(ICONS, "star");
  const displayIndex = String(index + 1).padStart(2, "0");
  return (
    <article
      className={styles.card}
      data-benefit-key={item.key || undefined}
      role="listitem"
    >
      {" "}
      <div className={styles.topline}>
        {" "}
        {Icon ? (
          <div className={styles.iconWrap} aria-hidden="true">
            {" "}
            <Icon className={styles.icon} />{" "}
          </div>
        ) : null}{" "}
        <span className={styles.index} aria-hidden="true">
          {" "}
          {displayIndex}{" "}
        </span>{" "}
      </div>{" "}
      <div className={styles.body}>
        {" "}
        {item.title ? (
          <h3 className={styles.title}>{item.title}</h3>
        ) : null}{" "}
        {item.description ? (
          <p className={styles.description}>{item.description}</p>
        ) : null}{" "}
      </div>{" "}
    </article>
  );
}
