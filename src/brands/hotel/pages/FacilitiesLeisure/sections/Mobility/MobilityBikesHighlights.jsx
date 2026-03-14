import hotelBrand from "../../../../config/index.js";
import HotelFeatureListWithMedia from "../../../../shared/ui/HotelFeatureListWithMedia/HotelFeatureListWithMedia.jsx";

import styles from "./MobilityBikesHighlights.module.css";

export default function MobilityBikesHighlights() {
  const highlights =
    hotelBrand?.pages?.facilities?.sections?.mobility?.bikes?.highlights ??
    null;

  if (!highlights?.items?.length) return null;

  return (
    <div className={styles.block}>
      <HotelFeatureListWithMedia
        items={highlights.items}
        image={highlights.image ?? null}
        imageAlt={highlights.imageAlt ?? ""}
        mediaPosition={highlights.mediaPosition ?? "right"}
      />
    </div>
  );
}
