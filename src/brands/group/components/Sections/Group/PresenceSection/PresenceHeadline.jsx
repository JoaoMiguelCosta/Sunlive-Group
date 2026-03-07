// src/brands/group/components/SectionGroup/PresenceSection/PresenceHeadline.jsx
import styles from "./PresenceHeadline.module.css";

import { groupHomePage } from "../../../../config/pages/index.js";
import { IMG_COMMON } from "../../../../config/core/footer.js";

export default function PresenceHeadline() {
  const src = groupHomePage?.sections?.presence?.headlineTop?.src ?? null;
  const alt = groupHomePage?.sections?.presence?.headlineTop?.alt ?? "Presence";

  if (!src) return null;

  return (
    <div className={styles.wrap} aria-label={alt}>
      <img src={src} alt={alt} {...IMG_COMMON} className={styles.img} />
    </div>
  );
}


