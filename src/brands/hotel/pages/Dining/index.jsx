// src/brands/hotel/pages/Restoration/index.jsx
// Estalagem de Sangalhos — RestorationPage (reutiliza Home.module.css como layout)

import styles from "../Home/Home.module.css";

import PanoramicRestaurantSection from "./sections/PanoramicRestaurant/index.jsx";
import BreakfastSection from "./sections/Breakfast/index.jsx";
import SundayBuffetSection from "./sections/SundayBuffet/index.jsx";
import BarLoungeSection from "./sections/BarLounge/index.jsx";
import CateringServiceSection from "./sections/CateringService/index.jsx";

export default function DiningPageHotel() {
  return (
    <div className={styles.pageWrap} data-brand="hotel">
      <main
        id="dining"
        className={styles.inner}
        role="region"
        aria-label="Estalagem de Sangalhos — Restoration"
      >
        <PanoramicRestaurantSection />
        <BreakfastSection />
        <SundayBuffetSection />
        <BarLoungeSection />
        <CateringServiceSection />
      </main>
    </div>
  );
}
