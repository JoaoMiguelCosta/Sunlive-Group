// src/brands/group/components/SectionGroup/Presencesection/PresenceHeadline.jsx
import styles from "./PresenceHeadline.module.css";
import { presence, IMG_COMMON } from "../../../ConfigGroup";

export default function PresenceHeadline() {
  const { src, alt } = presence.headlineTop;
  return (
    <div className={styles.wrap} aria-label={alt}>
      <img src={src} alt={alt} {...IMG_COMMON} className={styles.img} />
    </div>
  );
}
