// src/brands/group/components/SectionGroup/PresenceSection/MantraHeadline.jsx
import styles from "./MantraHeadline.module.css";

import { groupHomePage } from "../../../../config/pages/home.js";
import { IMG_COMMON } from "../../../../config/registry/footer.js";

export default function MantraHeadline() {
  const src = groupHomePage?.presence?.headlineBottom?.src ?? null;
  const alt = groupHomePage?.presence?.headlineBottom?.alt ?? "Mantra";

  if (!src) return null;

  return (
    <div className={styles.wrap} aria-label={alt}>
      <img src={src} alt={alt} {...IMG_COMMON} className={styles.img} />
    </div>
  );
}
