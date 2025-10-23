// src/brands/group/components/section/PartnersSection/PartnersGrid.jsx
import { Link } from "react-router-dom";
import styles from "./PartnersGrid.module.css";

export default function PartnersGrid({ items = [] }) {
  return (
    <div className={styles.grid} role="list">
      {items.map((it) => (
        <Link
          role="listitem"
          key={it.key}
          to={it.href}
          className={styles.card}
          aria-label={`${it.label} — open`}
        >
          <span className={styles.label}>{it.label}</span>
          <span className={styles.arrow} aria-hidden="true">
            ↓
          </span>
        </Link>
      ))}
    </div>
  );
}
