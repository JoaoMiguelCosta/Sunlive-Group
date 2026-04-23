import styles from "./LeisureBenefitsCard.module.css";
import { ICONS, resolveSportsIcon } from "../../../../config/index.js";

export default function LeisureBenefitsCard({ item }) {
  if (!item) return null;

  const Icon =
    resolveSportsIcon(ICONS, item.iconKey) ?? resolveSportsIcon(ICONS, "star");

  return (
    <article className={styles.card}>
      {Icon ? (
        <div className={styles.iconWrap} aria-hidden="true">
          <Icon className={styles.icon} />
        </div>
      ) : null}

      <div className={styles.body}>
        <h3 className={styles.title}>{item.title}</h3>

        {item.description ? (
          <p className={styles.description}>{item.description}</p>
        ) : null}
      </div>
    </article>
  );
}
