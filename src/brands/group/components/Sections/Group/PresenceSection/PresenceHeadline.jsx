import styles from "./PresenceHeadline.module.css";

import presence from "../../../../config/sections/home/presence.js";
import { IMG_COMMON } from "../../../../../../shared/config/BrandDefault.js";

export default function PresenceHeadline() {
  const headline = presence?.headlineTop;

  const src = headline?.src ?? null;
  const alt = headline?.alt ?? "Presence";

  if (!src) return null;

  return (
    <div className={styles.wrap} aria-label={alt}>
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
