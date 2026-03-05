import hotelBrand from "../../../../config/registry/index.js";

import TheBairradaRegionHeader from "./TheBairradaRegionHeader.jsx";
import HotelAboutRegionBairrada from "./HotelAboutRegionBairrada.jsx";
import HotelRegionHighlightsGrid from "./HotelRegionHighlightsGrid.jsx";

import styles from "./TheBairradaRegion.module.css";

export default function TheBairradaRegion() {
  const section = hotelBrand?.pages?.about?.sections?.bairradaRegion ?? null;

  if (!section) return null;

  const header = section.header ?? null;
  const description = section.description ?? null;
  const highlightItems = section.highlights?.items ?? [];

  return (
    <section
      id={section.id ?? "sobre-bairrada"}
      className={styles.section}
      aria-labelledby={section.id ? `${section.id}-title` : undefined}
    >
      <div className={styles.inner}>
        {header && (
          <TheBairradaRegionHeader
            header={header}
            titleId={section.id ? `${section.id}-title` : undefined}
          />
        )}

        {description && <HotelAboutRegionBairrada description={description} />}

        {highlightItems.length > 0 && (
          <HotelRegionHighlightsGrid items={highlightItems} />
        )}
      </div>
    </section>
  );
}
