// src/brands/hotel/pages/Accommodation/index.jsx
// Estalagem de Sangalhos — AccommodationPage (reutiliza Home.module.css como layout)

import styles from "../Home/Home.module.css";

import Accommodations from "../../components/Acommodation/Accommodations/index.jsx";
import Amenities from "../../components/Acommodation/Amenities/index.jsx"

export default function AccommodationPageHotel() {
  return (
    <div className={styles.pageWrap} data-brand="hotel">
      <main
        className={styles.inner}
        role="region"
        aria-label="Estalagem de Sangalhos — Alojamento"
      >
        {/* ✅ Secção: Accommodations */}
        <Accommodations />

        {/* ✅ Secção: Amenities */}
        <Amenities />
      </main>
    </div>
  );
}
