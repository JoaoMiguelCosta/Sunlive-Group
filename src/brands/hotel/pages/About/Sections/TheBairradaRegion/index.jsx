import hotelBrand from "../../../../config/index.js";

import TheBairradaRegionHeader from "./TheBairradaRegionHeader.jsx";
import HotelAboutRegionBairrada from "./HotelAboutRegionBairrada.jsx";
import HotelRegionHighlightsGrid from "./HotelRegionHighlightsGrid.jsx";

import styles from "./TheBairradaRegion.module.css";

function getValidHighlights(items) {
  return Array.isArray(items)
    ? items.filter(
        (item) =>
          item &&
          typeof item === "object" &&
          (item.title || item.description || item.iconKey),
      )
    : [];
}

export default function TheBairradaRegion() {
  const section = hotelBrand?.pages?.about?.sections?.bairradaRegion ?? null;

  if (!section) return null;

  const sectionId = section.id ?? "sobre-bairrada";
  const titleId = `${sectionId}-title`;

  const header = section.header ?? null;
  const description = section.description ?? null;
  const highlightItems = getValidHighlights(section.highlights?.items);

  const backgroundImageSrc = section?.backgroundMedia?.imageSrc ?? null;

  return (
    <section
      id={sectionId}
      className={styles.section}
      aria-labelledby={titleId}
    >
      <div className={styles.visualBlock}>
        {backgroundImageSrc ? (
          <div className={styles.mediaLayer} aria-hidden="true">
            <img
              src={backgroundImageSrc}
              alt=""
              className={styles.backgroundImage}
              loading="lazy"
              decoding="async"
              draggable="false"
            />
          </div>
        ) : null}

        <div className={styles.overlayLayer} aria-hidden="true" />
        <div className={styles.glowLayer} aria-hidden="true" />

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
      </div>
    </section>
  );
}
