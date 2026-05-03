import styles from "./MantraHeadline.module.css";

import { groupHomePage } from "../../../../config/pages/index.js";
import { IMG_COMMON } from "../../../../../../shared/config/BrandDefault.js";

export default function MantraHeadline() {
  const headline = groupHomePage?.sections?.presence?.headlineBottom;

  const src = headline?.src ?? null;
  const alt = headline?.alt ?? "Mantra";

  if (!src) return null;

  return (
    <div className={styles.wrap} aria-label={alt}>
      <img src={src} alt={alt} {...IMG_COMMON} className={styles.img} />
    </div>
  );
}
