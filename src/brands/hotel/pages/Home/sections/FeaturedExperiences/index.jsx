import hotelBrand from "../../../../config/index.js";
import FeaturedExperiencesHeader from "./FeaturedExperiencesHeader.jsx";
import HotelFeaturedExperiencesGrid from "./HotelFeaturedExperiencesGrid.jsx";

import styles from "./FeaturedExperiences.module.css";

export default function FeaturedExperiencesSection() {
  const featuredSection =
    hotelBrand?.pages?.home?.sections?.featuredExperiences ?? null;

  if (!featuredSection) return null;

  const sectionId = featuredSection.id || "hotel-featured-experiences";
  const titleId = `${sectionId}-title`;

  return (
    <section
      id={sectionId}
      className={styles.sectionWrap}
      aria-labelledby={titleId}
    >
      <div className={styles.inner}>
        <FeaturedExperiencesHeader titleId={titleId} />
        <HotelFeaturedExperiencesGrid />
      </div>
    </section>
  );
}
