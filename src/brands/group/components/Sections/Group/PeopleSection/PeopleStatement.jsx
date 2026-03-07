// src/brands/group/components/SectionGroup/PeopleSection/PeopleStatement.jsx
import styles from "./PeopleStatement.module.css";

import { groupHomePage } from "../../../../config/pages/index.js";
import { IMG_COMMON } from "../../../../config/core/footer.js";

export default function PeopleStatement() {
  const src = groupHomePage?.sections?.people?.statement?.src ?? null;
  const alt = groupHomePage?.sections?.people?.statement?.alt ?? "People statement";

  if (!src) return null;

  return (
    <div className={styles.wrap} aria-label={alt}>
      <img src={src} alt={alt} {...IMG_COMMON} className={styles.img} />
    </div>
  );
}


