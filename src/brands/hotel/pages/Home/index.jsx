// src/brands/hotel/pages/Home/index.jsx
// Estalagem de Sangalhos — HomePage (usa Home.module.css como layout)

import styles from "./Home.module.css";
import HotelHeroBanner from "../../components/Home/HotelHeroBanner/HotelHeroBanner.jsx";
import HotelOverviewSection from "../../components/Home/HotelOverview/index.jsx";
import WhoWeHostSection from "../../components/Home/WhoWeHost/index.jsx";
import FeaturedExperiencesSection from "../../components/Home/FeaturedExperiences/index.jsx";
import SustainabilityImpactSection from "../../components/Home/Sustainability&Impact/index.jsx";
import PlanYourStaySection from "../../components/Home/PlanYourStay/index.jsx";

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
