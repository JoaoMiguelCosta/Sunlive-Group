import { useCallback, useEffect, useMemo, useState } from "react";

import hotelBrand from "../../../../config/index.js";
import HotelPhotoCarouselBase from "../../../../shared/ui/HotelPhotoCarouselBase/HotelPhotoCarouselBase.jsx";

import styles from "./FacilitiesLeisureGallery.module.css";

const clampIndex = (index, length) => {
  if (length <= 0) return 0;
  return ((index % length) + length) % length;
};

export default function FacilitiesLeisureGallery() {
  const section =
    hotelBrand?.pages?.facilities?.sections?.facilitiesLeisure ?? null;

  const gallery = section?.gallery ?? null;
  const items = useMemo(() => gallery?.items ?? [], [gallery?.items]);
  const fallbackLabel = gallery?.fallbackLabel ?? "Fotos";

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setActiveIndex((prev) => clampIndex(prev, items.length));
  }, [items.length]);

  const hasItems = items.length > 0;

  const goPrev = useCallback(() => {
    if (!hasItems) return;
    setActiveIndex((prev) => clampIndex(prev - 1, items.length));
  }, [hasItems, items.length]);

  const goNext = useCallback(() => {
    if (!hasItems) return;
    setActiveIndex((prev) => clampIndex(prev + 1, items.length));
  }, [hasItems, items.length]);

  if (!gallery) return null;

  return (
    <div className={styles.galleryBlock}>
      <div className={styles.galleryCard}>
        <HotelPhotoCarouselBase
          items={items}
          activeIndex={activeIndex}
          onPrev={goPrev}
          onNext={goNext}
          fallbackLabel={fallbackLabel}
          className={styles.galleryStage}
        />
      </div>
    </div>
  );
}
