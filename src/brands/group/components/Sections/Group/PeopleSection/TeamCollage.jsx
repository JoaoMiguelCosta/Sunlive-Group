// src/brands/group/components/SectionGroup/PeopleSection/TeamCollage.jsx
import styles from "./TeamCollage.module.css";

import { groupHomePage } from "../../../../config/pages/home.js";
import { IMG_COMMON } from "../../../../config/footer.js";

export default function TeamCollage() {
  const src = groupHomePage?.people?.collage?.src ?? null;
  const alt = groupHomePage?.people?.collage?.alt ?? "Team collage";
  const caption = groupHomePage?.people?.collage?.caption ?? null;

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
