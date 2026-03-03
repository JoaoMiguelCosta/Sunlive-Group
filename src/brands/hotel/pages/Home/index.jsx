// src/brands/hotel/pages/Home/index.jsx
// Estalagem de Sangalhos — HomePage (usa Home.module.css como layout)

import styles from "./Home.module.css";

import HotelHeroBanner from "./sections/HotelHeroBanner/HotelHeroBanner.jsx";
import HotelOverviewSection from "./sections/HotelOverview/index.jsx";
import WhoWeHostSection from "./sections/WhoWeHost/index.jsx";
import FeaturedExperiencesSection from "./sections/FeaturedExperiences/index.jsx";
import SustainabilityImpactSection from "./sections/Sustainability&Impact/index.jsx";
import PlanYourStaySection from "./sections/PlanYourStay/index.jsx";

export default function HomePageHotel() {
  return (
    <div className={styles.pageWrap} data-brand="hotel">
      <main
        id="home-page"
        className={styles.inner}
        role="region"
        aria-label="Estalagem de Sangalhos — Home"
      >
        <HotelHeroBanner />
        <HotelOverviewSection />
        <WhoWeHostSection />
        <FeaturedExperiencesSection />
        <SustainabilityImpactSection />
        <PlanYourStaySection />
      </main>
    </div>
  );
}
