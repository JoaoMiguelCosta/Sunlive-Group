import styles from "./ForWhomHero.module.css";
import hotelBrand from "../../../../config/index.js";

export default function ForWhomHero() {
  const content =
    hotelBrand?.pages?.accommodation?.sections?.forAllProfiles ?? null;

  if (!content) return null;

  const title = content.headerLabel || "Para Todos os Perfis";
  const text = content.description || "";

  return (
    <div className={styles.card} aria-label={title}>
      <div className={styles.inner}>
        <div className={styles.titleRow}>
          <span className={styles.star} aria-hidden="true">
            ✦
          </span>

          <h3 className={styles.title}>{title}</h3>

          <span className={styles.star} aria-hidden="true">
            ✦
          </span>
        </div>

        {text ? <p className={styles.text}>{text}</p> : null}
      </div>
    </div>
  );
}
