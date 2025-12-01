// Estalagem de Sangalhos — HomePage (usa Home.module.css como layout)

import styles from "./Home.module.css";

export default function HomePageHotel() {
  return (
    <div className={styles.pageWrap} data-brand="hotel">
      <main
        className={styles.inner}
        role="region"
        aria-label="Estalagem de Sangalhos — Home"
      >
        {/* 👇 Quando tiveres conteúdo real da Home, colocas aqui dentro */}
      </main>
    </div>
  );
}
