import styles from "../../../../shared/components/GroupImageHeadline.module.css";

import homePage from "../../../../config/pages/home.js";
const presence = homePage.sections.presence;
import { IMG_COMMON } from "../../../../../../shared/config/index.js";
import ScrollReveal from "../../../../../../shared/ui/ScrollReveal/ScrollReveal.jsx";

export default function MantraHeadline() {
  const headline = presence?.headlineBottom;

  const src = headline?.src ?? null;
  const alt = headline?.alt ?? "Mantra";

  if (!src) return null;

  return (
    <ScrollReveal as="div" className={styles.wrap}>
      <div className={styles.frame}>
        <img
          src={src}
          alt={alt}
          width="2224"
          height="360"
          {...IMG_COMMON}
          className={styles.img}
        />
      </div>
    </ScrollReveal>
  );
}
