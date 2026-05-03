import styles from "./PeopleStatement.module.css";

import { groupHomePage } from "../../../../config/pages/index.js";
import { IMG_COMMON } from "../../../../../../shared/config/BrandDefault.js";

export default function PeopleStatement() {
  const statement = groupHomePage?.sections?.people?.statement;

  const src = statement?.src ?? null;
  const alt = statement?.alt ?? "People statement";

  if (!src) return null;

  return (
    <div className={styles.wrap} aria-label={alt}>
      <img src={src} alt={alt} {...IMG_COMMON} className={styles.img} />
    </div>
  );
}
