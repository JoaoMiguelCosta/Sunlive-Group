import styles from "../../../../shared/components/GroupImageHeadline.module.css";

import homePage from "../../../../config/pages/home.js";
const presence = homePage.sections.presence;
import { IMG_COMMON } from "../../../../../../shared/config/index.js";
import ScrollReveal from "../../../../../../shared/ui/ScrollReveal/ScrollReveal.jsx";

export default function PresenceHeadline() {
  const headline = presence?.headlineTop;

  const src = headline?.src ?? null;
  const alt = headline?.alt ?? "Presence";

  if (!src) return null;

  return (
    <ScrollReveal as="div" className={styles.wrap}>
      <div className={styles.frame}>
        <img src={src} alt={alt} {...IMG_COMMON} className={styles.img} />
      </div>
    </ScrollReveal>
  );
}
