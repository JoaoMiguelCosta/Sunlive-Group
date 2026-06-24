// src/brands/hotel/pages/Dining/index.jsx
// Estalagem de Sangalhos — DiningPage

import styles from "../../layouts/HotelPageLayout.module.css";

import RestaurantSection from "./sections/Restaurant/index.jsx";
import PanoramicRestaurantSection from "./sections/PanoramicRestaurant/index.jsx";
import BreakfastSection from "./sections/Breakfast/index.jsx";
import DessertsSection from "./sections/Desserts/index.jsx";
import SundayBuffetSection from "./sections/SundayBuffet/index.jsx";
import BarLoungeSection from "./sections/BarLounge/index.jsx";
import CateringServiceSection from "./sections/CateringService/index.jsx";

export default function DiningPageHotel() {
  return (
    <div className={styles.pageWrap} data-brand="hotel">
      <section
        id="dining"
        className={styles.inner}
        aria-label="Estalagem de Sangalhos — Restauração"
      >
        <div className={styles.contentFlow}>
          <RestaurantSection />
          <PanoramicRestaurantSection />
          <BreakfastSection />
          <SundayBuffetSection />
          <DessertsSection />
          <BarLoungeSection />
          <CateringServiceSection />
        </div>
      </section>
    </div>
  );
}
