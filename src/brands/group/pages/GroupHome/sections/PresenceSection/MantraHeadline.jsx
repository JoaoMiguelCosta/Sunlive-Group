import styles from "./MantraHeadline.module.css";

import homePage from "../../../../config/pages/home.js";
const presence = homePage.sections.presence;
import { IMG_COMMON } from "../../../../../../shared/config/index.js";

export default function MantraHeadline() {
  const headline = presence?.headlineBottom;

  const src = headline?.src ?? null;
  const alt = headline?.alt ?? "Mantra";

  if (!src) return null;

  return (
    <div className={styles.wrap}>
      <div className={styles.frame}>
        <img src={src} alt={alt} {...IMG_COMMON} className={styles.img} />

        <img
          src={src}
          alt=""
          aria-hidden="true"
          {...IMG_COMMON}
          className={styles.shineImg}
        />
      </div>
    </div>
  );
}
