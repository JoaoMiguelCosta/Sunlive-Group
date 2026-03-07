// OverviewSection/HeadlineStrip.jsx
import styles from "./HeadlineStrip.module.css";
import { groupHomePage } from "../../../../config/pages/index.js";

export default function HeadlineStrip() {
  const overview = groupHomePage?.sections?.overview;

  // apenas imagem (igual ao We Make It Happen)
  const img = overview?.headline?.imageSrc ?? null;

  // se não houver imagem configurada, não renderiza a faixa
  if (!img) return null;

  const title = overview?.headline?.title ?? "";
  const subtitle = overview?.headline?.subtitle ?? "";
  const alt = `${title} ${subtitle}`.trim() || "Headline";

  return (
    <section className={styles.wrap} aria-label="Headline">
      <img
        className={styles.img}
        src={img}
        alt={alt}
        loading="lazy"
        decoding="async"
      />
    </section>
  );
}


