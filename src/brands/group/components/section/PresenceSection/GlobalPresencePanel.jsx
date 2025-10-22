// src/brands/group/components/section/PresenceSection/GlobalPresencePanel.jsx
import styles from "./GlobalPresencePanel.module.css";
import { presence, IMG_COMMON } from "../../../config";

export default function GlobalPresencePanel() {
  return (
    <div className={styles.panel} role="group" aria-label="Global Presence">
      <ul className={styles.grid} aria-label="Countries">
        {presence.countries.map(({ key, label, src }) => (
          <li key={key} className={styles.item}>
            <img src={src} alt={label} {...IMG_COMMON} />
          </li>
        ))}
      </ul>
    </div>
  );
}
