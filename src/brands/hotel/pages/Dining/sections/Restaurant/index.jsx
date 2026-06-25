import dining from "../../../../config/pages/dining.js";
const restaurant = dining.sections.restaurant;
import TitleRestaurant from "./TitleRestaurant.jsx";
import DescriptionRestaurant from "./DescriptionRestaurant.jsx";
import RestaurantPhotoCarousel from "./RestaurantPhotoCarousel.jsx";

import styles from "./Restaurant.module.css";

function normalizeHighlights(items) {
  if (!Array.isArray(items)) return [];

  return items
    .map((item, index) => {
      if (typeof item === "string") {
        return {
          id: `restaurant-highlight-${index}`,
          label: item.trim(),
        };
      }

      if (!item || typeof item !== "object") return null;

      const label = String(item.label ?? "").trim();
      if (!label) return null;

      return {
        id: item.id ?? `restaurant-highlight-${index}`,
        label,
      };
    })
    .filter(Boolean);
}

export default function RestaurantSection() {
  const section = restaurant;
  if (!section) return null;

  const sectionId = section?.id ?? "restauracao";
  const titleId = `${sectionId}-title`;
  const introEyebrow = String(section?.introEyebrow ?? "").trim();

  const highlights = normalizeHighlights(section?.highlights?.items);
  const highlightsAriaLabel =
    section?.highlights?.ariaLabel ?? "Destaques da restauração";

  return (
    <section
      id={sectionId}
      className={styles.section}
      aria-labelledby={titleId}
    >
      <div className={styles.inner}>
        <div className={styles.introShell}>
          {introEyebrow ? (
            <p className={styles.eyebrow} aria-label="Introdução da secção">
              {introEyebrow}
            </p>
          ) : null}

          <div className={styles.headerBlock}>
            <TitleRestaurant titleId={titleId} />
            <DescriptionRestaurant />
          </div>

          {highlights.length ? (
            <ul
              className={styles.highlightsList}
              aria-label={highlightsAriaLabel}
            >
              {highlights.map((item) => (
                <li key={item.id} className={styles.highlightItem}>
                  <span className={styles.highlightPill}>{item.label}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        <div className={styles.galleryBlock}>
          <RestaurantPhotoCarousel />
        </div>
      </div>
    </section>
  );
}
