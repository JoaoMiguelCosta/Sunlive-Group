import { Link } from "react-router-dom";

import hotelBrand from "../../../../config/index.js";
import FeaturedExperienceCard from "../../../../shared/ui/FeaturedExperienceCard/FeaturedExperienceCard.jsx";

import styles from "./HotelFeaturedExperiencesGrid.module.css";

function isValidItem(item) {
  return item && typeof item === "object" && item.id;
}

function isExternalHref(href = "") {
  return href.startsWith("http://") || href.startsWith("https://");
}

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
          const href =
            typeof item.href === "string" && item.href.trim()
              ? item.href.trim()
              : "";

          const hasHref = href.length > 0;
          const external = isExternalHref(href);

          const card = <FeaturedExperienceCard {...item} />;

          return (
            <div key={item.id} className={styles.cell}>
              {hasHref && external ? (
                <a
                  href={href}
                  className={styles.cardLink}
                  aria-label={`Ver ${item.title}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {card}
                </a>
              ) : hasHref ? (
                <Link
                  to={href}
                  className={styles.cardLink}
                  aria-label={`Ver ${item.title}`}
                >
                  {card}
                </Link>
              ) : (
                card
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
