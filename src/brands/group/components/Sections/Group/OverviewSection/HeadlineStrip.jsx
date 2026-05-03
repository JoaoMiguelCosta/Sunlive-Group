import styles from "./HeadlineStrip.module.css";
import { groupHomePage } from "../../../../config/pages/index.js";

export default function HeadlineStrip() {
  const overview = groupHomePage?.sections?.overview;
  const img = overview?.headline?.imageSrc ?? null;

  if (!img) return null;

  const title = overview?.headline?.title ?? "";
  const subtitle = overview?.headline?.subtitle ?? "";
  const alt = `${title} ${subtitle}`.trim() || "Headline Sunlive Group";

  return (
    <div className={styles.wrap} aria-label="Headline Sunlive Group">
      <img
        className={styles.img}
        src={img}
        alt={alt}
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}
