import styles from "./TeamCollage.module.css";

import { groupHomePage } from "../../../../config/pages/index.js";
import { IMG_COMMON } from "../../../../../../shared/config/BrandDefault.js";

export default function TeamCollage() {
  const collage = groupHomePage?.sections?.people?.collage;

  const src = collage?.src ?? null;
  const alt = collage?.alt ?? "Team collage";
  const caption = collage?.caption ?? null;

  if (!src) return null;

  return (
    <figure className={styles.frame}>
      <img src={src} alt={alt} {...IMG_COMMON} className={styles.image} />

      {caption ? (
        <figcaption className={styles.caption}>{caption}</figcaption>
      ) : null}
    </figure>
  );
}
