// src/brands/group/components/section/PresenceSection/MantraHeadline.jsx
import styles from "./MantraHeadline.module.css";
import { presence, IMG_COMMON } from "../../../config";

export default function MantraHeadline() {
  const { src, alt } = presence.headlineBottom;
  return (
    <div className={styles.wrap} aria-label={alt}>
      <img src={src} alt={alt} {...IMG_COMMON} className={styles.img} />
    </div>
  );
}
