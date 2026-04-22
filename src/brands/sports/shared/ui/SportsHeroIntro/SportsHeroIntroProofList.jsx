import styles from "./SportsHeroIntroProofList.module.css";
import { buildKey } from "./sportsHeroIntro.utils.js";

export default function SportsHeroIntroProofList({ items = [], ariaLabel }) {
  if (!items.length) return null;

  return (
    <ul className={styles.proofList} aria-label={ariaLabel}>
      {items.map((item, index) => (
        <li key={buildKey(item, index)} className={styles.proofItem}>
          <span className={styles.proofDot} aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
