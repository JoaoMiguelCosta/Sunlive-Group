// src/brands/group/components/SectionGroup/PresenceSection/PresenceHeadline.jsx
import styles from "./PresenceHeadline.module.css";

import { groupHomePage } from "../../../../config/pages/home.js";
import { IMG_COMMON } from "../../../../config/registry/footer.js";

export default function PresenceHeadline() {
  const src = groupHomePage?.presence?.headlineTop?.src ?? null;
  const alt = groupHomePage?.presence?.headlineTop?.alt ?? "Presence";

  if (!src) return null;

  return (
    <div className={styles.wrap} aria-label={alt}>
      <img src={src} alt={alt} {...IMG_COMMON} className={styles.img} />
    </div>
  );
}
