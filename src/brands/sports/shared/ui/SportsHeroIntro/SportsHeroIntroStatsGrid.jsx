import styles from "./SportsHeroIntroStatsGrid.module.css";
import { buildKey } from "./sportsHeroIntro.utils.js";

export default function SportsHeroIntroStatsGrid({ items = [], ariaLabel }) {
  if (!items.length) return null;

  return (
    <div className={styles.statsGrid} role="list" aria-label={ariaLabel}>
      {items.map((stat, index) => (
        <article
          key={buildKey(`${stat.value}-${stat.label}`, index)}
          className={styles.statCard}
          role="listitem"
        >
          {stat.value ? (
            <strong className={styles.statValue}>{stat.value}</strong>
          ) : null}

          {stat.label ? (
            <span className={styles.statLabel}>{stat.label}</span>
          ) : null}
        </article>
      ))}
    </div>
  );
}
