// src/brands/group/components/SectionGroup/PresenceSection/MantraHeadline.jsx
import styles from "./MantraHeadline.module.css";

import { groupHomePage } from "../../../../config/pages/index.js";
import { IMG_COMMON } from "../../../../config/core/footer.js";

export default function MantraHeadline() {
  const src = groupHomePage?.sections?.presence?.headlineBottom?.src ?? null;
  const alt = groupHomePage?.sections?.presence?.headlineBottom?.alt ?? "Mantra";

  if (!src) return null;

  return (
    <div className={styles.wrap} aria-label={alt}>
      <img src={src} alt={alt} {...IMG_COMMON} className={styles.img} />
    </div>
  );
}


