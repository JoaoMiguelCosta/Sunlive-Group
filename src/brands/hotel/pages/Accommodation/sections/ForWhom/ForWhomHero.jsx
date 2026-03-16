import styles from "./ForWhomHero.module.css";
import hotelBrand, {
  ICONS,
  resolveHotelIcon,
} from "../../../../config/index.js";

export default function ForWhomHero() {
  const content =
    hotelBrand?.pages?.accommodation?.sections?.forAllProfiles ?? null;

  if (!content) return null;

  const title = content.headerLabel || "Para Todos os Perfis";
  const text = content.description || "";
  const Icon = resolveHotelIcon(ICONS, content.iconKey);

  return (
    <div className={styles.card} aria-label={title}>
      <div className={styles.inner}>
        <div className={styles.titleRow}>
          {Icon ? (
            <span className={styles.iconCircle} aria-hidden="true">
              <Icon className={styles.icon} />
            </span>
          ) : null}

          <h3 className={styles.title}>{title}</h3>

          {Icon ? (
            <span className={styles.iconCircle} aria-hidden="true">
              <Icon className={styles.icon} />
            </span>
          ) : null}
        </div>

        {text ? <p className={styles.text}>{text}</p> : null}
      </div>
    </div>
  );
}
