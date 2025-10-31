// src/brands/travel/pages/TravelPage.jsx
import styles from "./TravelPage.module.css";
import TravelHeaderNav from "../components/TravelHeaderNav/index.jsx";

export default function TravelPage() {
  return (
    <main className={styles.page}>
      {/* Secção 1: Header numa só linha */}
      <TravelHeaderNav />


    </main>
  );
}
