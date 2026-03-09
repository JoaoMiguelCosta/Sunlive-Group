// src/brands/hotel/pages/HotelAbout/sections/TheBairradaRegion/TheBairradaRegion.jsx
import hotelBrand from "../../../../config/index.js";

import TheBairradaRegionHeader from "./TheBairradaRegionHeader.jsx";
import HotelAboutRegionBairrada from "./HotelAboutRegionBairrada.jsx";
import HotelRegionHighlightsGrid from "./HotelRegionHighlightsGrid.jsx";

import styles from "./TheBairradaRegion.module.css";

export default function TheBairradaRegion() {
  const section = hotelBrand?.pages?.about?.sections?.bairradaRegion ?? null;

  if (!section) return null;

  const header = section.header ?? null;
  const description = section.description ?? null;
  const highlightItems = Array.isArray(section.highlights?.items)
    ? section.highlights.items
    : [];

  const sectionId = section.id ?? "sobre-bairrada";
  const titleId = section.id ? `${section.id}-title` : undefined;

  return (
    <section
      id={sectionId}
      className={styles.section}
      aria-labelledby={titleId}
    >
      <div className={styles.inner}>
        {header ? (
          <TheBairradaRegionHeader header={header} titleId={titleId} />
        ) : null}

        {description ? (
          <HotelAboutRegionBairrada description={description} />
        ) : null}

        {highlightItems.length > 0 ? (
          <HotelRegionHighlightsGrid items={highlightItems} />
        ) : null}
      </div>
    </section>
  );
}
