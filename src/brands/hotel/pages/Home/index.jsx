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
        className={styles.inner}
        role="region"
        aria-label="Estalagem de Sangalhos — Home"
      >
        {/* Masthead da Home */}
        <HotelHeroBanner />

        {/* Sobre a Estalagem */}
        <HotelOverviewSection />

        {/* Para quem é? */}
        <WhoWeHostSection />

        {/* Experiências em Destaque */}
        <FeaturedExperiencesSection />

        {/* Sustainability & Impact */}
        <SustainabilityImpactSection />

        {/* Call-to-action final — Plan Your Stay */}
        <PlanYourStaySection />
      </main>
    </div>
  );
}
