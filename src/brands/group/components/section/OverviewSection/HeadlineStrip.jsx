// OverviewSection/HeadlineStrip.jsx
import styles from "./HeadlineStrip.module.css";
import { overview } from "../../../config";
import MetalHeadline from "./MetalHeadline.jsx";

export default function HeadlineStrip() {
  const mode = overview?.headline?.renderAs ?? "svg";
  const title = overview?.headline?.title ?? "OUR NETWORK OF EXCELLENCE";
  const subtitle =
    overview?.headline?.subtitle ??
    "GIVES US OPPORTUNITIES TO CREATE SOLUTIONS SINCE 2007";
  const img = overview?.headline?.imageSrc ?? null;

  return (
    <section className={styles.wrap} aria-label="Headline">
      <div
        className={styles.box}
        role="group"
        aria-label={`${title}. ${subtitle}`}
      >
        {mode === "image" && img ? (
          <img
            className={styles.figure}
            src={img}
            alt={`${title}. ${subtitle}`}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <MetalHeadline title={title} subtitle={subtitle} />
        )}
      </div>
    </section>
  );
}
