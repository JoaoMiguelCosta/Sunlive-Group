import styles from "./TeamCollage.module.css";

import homePage from "../../../../config/pages/home.js";
import { IMG_COMMON } from "../../../../../../shared/config/index.js";

const people = homePage.sections.people;

export default function TeamCollage() {
  const collage = people?.collage;

  const src = collage?.src ?? null;
  const mobileSrc = collage?.mobileSrc ?? null;
  const alt = collage?.alt ?? "Equipa Sunlive Group";

  if (!src) return null;

  return (
    <figure className={styles.frame}>
      <picture className={styles.picture}>
        {mobileSrc ? (
          <source media="(max-width: 640px)" srcSet={mobileSrc} />
        ) : null}

        <img
          src={src}
          alt={alt}
          width="3744"
          height="1323"
          {...IMG_COMMON}
          className={styles.image}
          draggable="false"
        />
      </picture>
    </figure>
  );
}
