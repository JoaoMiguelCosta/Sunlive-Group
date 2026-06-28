import styles from "../../../../shared/components/GroupImageHeadline.module.css";

import homePage from "../../../../config/pages/home.js";
const people = homePage.sections.people;
import { IMG_COMMON } from "../../../../../../shared/config/index.js";

export default function PeopleStatement() {
  const statement = people?.statement;

  const src = statement?.src ?? null;
  const alt = statement?.alt ?? "People statement";

  if (!src) return null;

  return (
    <div className={styles.wrap}>
      <div className={styles.frame}>
        <img src={src} alt={alt} {...IMG_COMMON} className={styles.img} />

        <img
          src={src}
          alt=""
          aria-hidden="true"
          {...IMG_COMMON}
          className={styles.shineImg}
        />
      </div>
    </div>
  );
}
