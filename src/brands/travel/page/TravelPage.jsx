// src/brands/travel/page/TravelPage.jsx
import styles from "./TravelPage.module.css";

export default function TravelPage() {
  return (
    <main className={styles.pageWrap} aria-labelledby="travel-title">
      <div className={styles.inner}>
        <section className={styles.hero}>
          <h1 id="travel-title" className={styles.heroTitle}>
            Sunlive Travel — Hello World
          </h1>
          <p className={styles.heroTag}>
            Página em construção. Em breve: secções do Figma (Soluções,
            Destinos, Hotéis, Parceiros…)
          </p>
        </section>
      </div>
    </main>
  );
}
