import styles from "../../layouts/HotelPageLayout.module.css";

import HotelHeroBanner from "./sections/HotelHeroBanner/HotelHeroBanner.jsx";
import HotelOverviewSection from "./sections/HotelOverview/index.jsx";
import WhoWeHostSection from "./sections/WhoWeHost/index.jsx";
import FeaturedExperiencesSection from "./sections/FeaturedExperiences/index.jsx";
import SustainabilityImpactSection from "./sections/Sustainability&Impact/index.jsx";
import PlanYourStaySection from "./sections/PlanYourStay/index.jsx";

export default function HomePageHotel() {
  return (
    <div className={styles.pageWrap} data-brand="hotel">
      <section
        id="home-page"
        className={styles.inner}
        aria-label="Estalagem de Sangalhos — Home"
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
