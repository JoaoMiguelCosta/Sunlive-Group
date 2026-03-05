import hotelBrand from "../../../../config/registry/index.js";
import FeaturedExperienceCard from "../../../../shared/ui/FeaturedExperienceCard/FeaturedExperienceCard.jsx";
import styles from "./HotelFeaturedExperiencesGrid.module.css";

/**
 * Grelha de cards "Experiências em Destaque"
 * - Lê o bloco `featuredExperiences.items` do configHotel
 * - Usa a componente reutilizável FeaturedExperienceCard
 */
export default function HotelFeaturedExperiencesGrid() {
  const featuredSection =
    hotelBrand?.pages?.home?.sections?.featuredExperiences ?? null;

  const items = featuredSection?.items ?? [];
  if (!items.length) return null;

  return (
    <div className={styles.gridWrap}>
      <div className={styles.grid}>
        {items.map((item) => (
          <FeaturedExperienceCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
