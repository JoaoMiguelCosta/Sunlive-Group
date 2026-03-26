import hotelBrand from "../../../../config/index.js";
import FeaturedExperienceCard from "../../../../shared/ui/FeaturedExperienceCard/FeaturedExperienceCard.jsx";
import styles from "./HotelFeaturedExperiencesGrid.module.css";

/**
 * Grelha editorial da secção "Experiências em Destaque"
 * - Todos os cards têm o mesmo peso visual
 */
export default function HotelFeaturedExperiencesGrid() {
  const featuredSection =
    hotelBrand?.pages?.home?.sections?.featuredExperiences ?? null;

  const items = Array.isArray(featuredSection?.items)
    ? featuredSection.items
    : [];

  if (!items.length) return null;

  return (
    <div className={styles.gridWrap}>
      <div className={styles.grid}>
        {items.map((item) => (
          <div key={item.id} className={styles.cell}>
            <FeaturedExperienceCard {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}
