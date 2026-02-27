import styles from "./ForWhomHero.module.css";
import hotelBrand from "../../../../configHotel.jsx";

export default function ForWhomHero() {
  const content = hotelBrand?.pages?.estadia?.sections?.forAllProfiles ?? null;
  if (!content) return null;

  const title = content.headerLabel || "Para Todos os Perfis";
  const text = content.description || "";

  return (
    <div className={styles.wrap} aria-label={title}>
      <div className={styles.card}>
        <div className={styles.titleRow}>
          <span className={styles.star} aria-hidden="true">
            ★
          </span>
          <h3 className={styles.title}>{title}</h3>
          <span className={styles.star} aria-hidden="true">
            ★
          </span>
        </div>

        {text ? <p className={styles.text}>{text}</p> : null}
      </div>
    </div>
  );
}
