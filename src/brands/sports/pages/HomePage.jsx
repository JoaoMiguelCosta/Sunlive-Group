// src/brands/sports/pages/HomePage.jsx
import SectionHome from "../components/SectionHome"; // pega no index.jsx da pasta
import styles from "./SportsPage.module.css";


export default function HomePage() {
  return (
    <main
      data-brand="sports"
      className={styles.page}
      aria-label="Sunlive Sports — Home"
    >
      <SectionHome />
    </main>
  );
}