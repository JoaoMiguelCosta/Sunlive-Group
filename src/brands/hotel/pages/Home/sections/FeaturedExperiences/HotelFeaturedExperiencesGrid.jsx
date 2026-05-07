import { Link } from "react-router-dom";

import hotelBrand from "../../../../config/index.js";
import FeaturedExperienceCard from "../../../../shared/ui/FeaturedExperienceCard/FeaturedExperienceCard.jsx";
import styles from "./HotelFeaturedExperiencesGrid.module.css";

function isValidItem(item) {
  return item && typeof item === "object" && item.id;
}

/**
 * Grelha editorial da secção "Experiências em Destaque"
 * - Todos os cards têm o mesmo peso visual
 * - Cada card pode navegar para uma página/secção interna
 */
export default function HotelFeaturedExperiencesGrid() {
  const featuredSection =
    hotelBrand?.pages?.home?.sections?.featuredExperiences ?? null;

  const items = Array.isArray(featuredSection?.items)
    ? featuredSection.items.filter(isValidItem)
    : [];

  if (!items.length) return null;

  return (
    <div className={styles.gridWrap}>
      <div className={styles.grid}>
        {items.map((item) => {
          const hasHref = typeof item.href === "string" && item.href.trim();

          return (
            <div key={item.id} className={styles.cell}>
              {hasHref ? (
                <Link
                  to={item.href}
                  className={styles.cardLink}
                  aria-label={`Ver ${item.title}`}
                >
                  <FeaturedExperienceCard {...item} />
                </Link>
              ) : (
                <FeaturedExperienceCard {...item} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
