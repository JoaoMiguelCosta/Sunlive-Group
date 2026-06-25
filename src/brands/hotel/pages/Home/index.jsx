import home from "../../config/pages/home.js";
import styles from "../../layouts/HotelPageLayout.module.css";

import HotelHeroBanner from "./sections/HotelHeroBanner/HotelHeroBanner.jsx";
import HotelOverviewSection from "./sections/HotelOverview/index.jsx";
import WhoWeHostSection from "./sections/WhoWeHost/index.jsx";
import FeaturedExperiencesSection from "./sections/FeaturedExperiences/index.jsx";
import SustainabilityImpactSection from "./sections/SustainabilityAndImpact/index.jsx";
import PlanYourStaySection from "./sections/PlanYourStay/index.jsx";

export default function HomePageHotel() {
  return (
    <div className={styles.pageWrap} data-brand="hotel">
      <section
        id={home.id}
        className={styles.inner}
        aria-label={home.ui.pageAriaLabel}
      >
        <HotelHeroBanner />

        <div className={styles.contentFlow}>
          <HotelOverviewSection />
          <WhoWeHostSection />
          <FeaturedExperiencesSection />
          <SustainabilityImpactSection />
          <PlanYourStaySection />
        </div>
      </section>
    </div>
  );
}
