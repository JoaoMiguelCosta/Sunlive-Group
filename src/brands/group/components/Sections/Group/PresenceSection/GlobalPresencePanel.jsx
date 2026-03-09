// src/brands/group/components/SectionGroup/PresenceSection/GlobalPresencePanel.jsx
import styles from "./GlobalPresencePanel.module.css";

import { groupHomePage } from "../../../../config/pages/index.js";
import { IMG_COMMON } from "../../../../../../shared/config/BrandDefault.js";

export default function GlobalPresencePanel() {
  const countries = groupHomePage?.sections?.presence?.countries ?? [];
  if (!countries.length) return null;

  return (
    <div className={styles.panel} role="group" aria-label="Global Presence">
      <ul className={styles.grid} aria-label="Countries">
        {countries.map(({ key, label, src }) => (
          <li key={key} className={styles.item}>
            <img src={src} alt={label} {...IMG_COMMON} />
          </li>
        ))}
      </ul>
    </div>
  );
}


