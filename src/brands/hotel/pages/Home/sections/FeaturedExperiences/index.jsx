import hotelBrand from "../../../../configHotel.jsx";
import FeaturedExperiencesHeader from "./FeaturedExperiencesHeader.jsx";
import HotelFeaturedExperiencesGrid from "./HotelFeaturedExperiencesGrid.jsx";
import styles from "./FeaturedExperiences.module.css";

/**
 * Secção "Experiências em Destaque" na Home do Hotel.
 */
export default function FeaturedExperiencesSection() {
  const featuredSection =
    hotelBrand?.pages?.home?.sections?.featuredExperiences;

  if (!featuredSection) return null;

  const sectionId = featuredSection.id || "hotel-featured-experiences";

  return (
    <section
      id={sectionId}
      className={styles.sectionWrap}
      aria-labelledby={`${sectionId}-title`}
    >
      <div className={styles.inner}>
        <FeaturedExperiencesHeader />
        <HotelFeaturedExperiencesGrid />
      </div>
    </section>
  );
}
