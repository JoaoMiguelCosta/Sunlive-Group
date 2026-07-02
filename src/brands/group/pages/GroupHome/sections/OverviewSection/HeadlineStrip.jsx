import styles from "../../../../shared/components/GroupImageHeadline.module.css";
import homePage from "../../../../config/pages/home.js";
const overview = homePage.sections.overview;

export default function HeadlineStrip() {
  const img = overview?.headline?.imageSrc ?? null;

  if (!img) return null;

  const title = overview?.headline?.title ?? "";
  const subtitle = overview?.headline?.subtitle ?? "";
  const alt = `${title} ${subtitle}`.trim() || "Headline Sunlive Group";

  return (
    <div className={styles.wrap}>
      <div className={styles.frame}>
        <img
          className={styles.img}
          src={img}
          alt={alt}
          width="2400"
          height="390"
          loading="eager"
          decoding="async"
          fetchPriority="high"
          draggable="false"
        />
      </div>
    </div>
  );
}
