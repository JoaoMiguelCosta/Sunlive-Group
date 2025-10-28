// src/brands/group/components/SectionGroup/Peoplesection/TeamCollage.jsx
import styles from "./TeamCollage.module.css";
import { people, IMG_COMMON } from "../../../ConfigGroup";

export default function TeamCollage() {
  const { src, alt, caption } = people.collage;
  return (
    <figure className={styles.frame}>
      <img src={src} alt={alt} {...IMG_COMMON} className={styles.image} />
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
      <div className={styles.glowTop} aria-hidden="true" />
      <div className={styles.glowBottom} aria-hidden="true" />
    </figure>
  );
}
