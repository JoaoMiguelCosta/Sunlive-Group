import hotelBrand from "../../../../config/index.js";
import TitlePanoramicRestaurant from "./TitlePanoramicRestaurant.jsx";
import DescriptionPanoramicRestaurant from "./DescriptionPanoramicRestaurant.jsx";
import PanoramicRestaurantPhotoCarousel from "./PanoramicRestaurantPhotoCarousel.jsx";

import styles from "./PanoramicRestaurant.module.css";

function normalizeHighlights(items) {
  if (!Array.isArray(items)) return [];

  return items
    .map((item, index) => {
      if (typeof item === "string") {
        const label = item.trim();

        return label
          ? {
              id: `panoramic-highlight-${index}`,
              label,
            }
          : null;
      }

      if (!item || typeof item !== "object") return null;

      const label = String(item.label ?? "").trim();
      if (!label) return null;

      return {
        id: item.id ?? `panoramic-highlight-${index}`,
        label,
      };
    })
    .filter(Boolean);
}

export default function PanoramicRestaurantSection() {
  const section =
    hotelBrand?.pages?.dining?.sections?.panoramicRestaurant ?? null;

  if (!section) return null;

  const sectionId = section?.id ?? "restaurante-panoramico";
  const titleId = `${sectionId}-title`;
  const introEyebrow = String(section?.introEyebrow ?? "").trim();

  const highlights = normalizeHighlights(section?.highlights?.items);
  const highlightsAriaLabel =
    section?.highlights?.ariaLabel ?? "Destaques do restaurante panorâmico";

  return (
    <section
      id={sectionId}
      className={styles.section}
      aria-labelledby={titleId}
    >
      <div className={styles.inner}>
        <div className={styles.introShell}>
          {introEyebrow ? (
            <p className={styles.eyebrow}>{introEyebrow}</p>
          ) : null}

          <div className={styles.headerBlock}>
            <TitlePanoramicRestaurant titleId={titleId} />
            <DescriptionPanoramicRestaurant />
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
          <PanoramicRestaurantPhotoCarousel />
        </div>
      </div>
    </section>
  );
}
