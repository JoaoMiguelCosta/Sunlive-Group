// src/brands/hotel/pages/Home/index.jsx
// Estalagem de Sangalhos — HomePage (usa Home.module.css como layout)

import styles from "./Home.module.css";
import HotelHeroBanner from "../../components/Home/HotelHeroBanner/HotelHeroBanner.jsx";
import HotelOverviewSection from "../../components/Home/HotelOverview/index.jsx";

export default function HomePageHotel() {
  return (
    <div className={styles.pageWrap} data-brand="hotel">
      <main
        className={styles.inner}
        role="region"
        aria-label="Estalagem de Sangalhos — Home"
      >
        {/* Masthead da Home */}
        <HotelHeroBanner />

        {/* Sobre a Estalagem */}
        <HotelOverviewSection />
      </main>
    </div>
  );
}
