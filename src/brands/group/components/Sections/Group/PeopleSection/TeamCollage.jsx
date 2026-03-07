// src/brands/group/components/SectionGroup/PeopleSection/TeamCollage.jsx
import styles from "./TeamCollage.module.css";

import { groupHomePage } from "../../../../config/pages/index.js";
import { IMG_COMMON } from "../../../../config/core/footer.js";

export default function TeamCollage() {
  const src = groupHomePage?.sections?.people?.collage?.src ?? null;
  const alt = groupHomePage?.sections?.people?.collage?.alt ?? "Team collage";
  const caption = groupHomePage?.sections?.people?.collage?.caption ?? null;

  if (!src) return null;

  return (
    <figure className={styles.frame}>
      <img src={src} alt={alt} {...IMG_COMMON} className={styles.image} />
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
      <div className={styles.glowTop} aria-hidden="true" />
      <div className={styles.glowBottom} aria-hidden="true" />
    </figure>
  );
}


