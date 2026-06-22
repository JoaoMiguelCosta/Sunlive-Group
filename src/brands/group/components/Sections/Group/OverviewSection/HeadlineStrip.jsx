import styles from "./HeadlineStrip.module.css";
import overview from "../../../../config/sections/home/overview.js";

export default function HeadlineStrip() {
  const img = overview?.headline?.imageSrc ?? null;

  if (!img) return null;

  const title = overview?.headline?.title ?? "";
  const subtitle = overview?.headline?.subtitle ?? "";
  const alt = `${title} ${subtitle}`.trim() || "Headline Sunlive Group";

  return (
    <div className={styles.wrap} aria-label="Headline Sunlive Group">
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

        <img
          className={styles.shineImg}
          src={img}
          alt=""
          width="2400"
          height="390"
          aria-hidden="true"
          loading="eager"
          decoding="async"
          draggable="false"
        />
      </div>
    </div>
  );
}
