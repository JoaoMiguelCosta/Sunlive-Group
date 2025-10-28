// src/brands/group/components/SectionGroup/Presencesection/MantraHeadline.jsx
import styles from "./MantraHeadline.module.css";
import { presence, IMG_COMMON } from "../../../ConfigGroup";

export default function MantraHeadline() {
  const { src, alt } = presence.headlineBottom;
  return (
    <div className={styles.wrap} aria-label={alt}>
      <img src={src} alt={alt} {...IMG_COMMON} className={styles.img} />
    </div>
  );
}
