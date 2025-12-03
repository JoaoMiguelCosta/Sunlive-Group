// src/brands/hotel/pages/Accommodation/index.jsx
// Estalagem de Sangalhos — AccommodationPage (reutiliza Home.module.css como layout)

import styles from "../Home/Home.module.css";

export default function AccommodationPageHotel() {
  return (
    <div className={styles.pageWrap} data-brand="hotel">
      <main
        className={styles.inner}
        role="region"
        aria-label="Estalagem de Sangalhos — Alojamento"
      >
        {/* Secções de Alojamento virão aqui:
            - Tipologias de quartos
            - Comodidades incluídas
            - Serviços adicionais, etc. */}
      </main>
    </div>
  );
}
