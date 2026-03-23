import { useCallback, useEffect, useMemo, useState } from "react";

import hotelBrand from "../../../../config/index.js";
import HotelPhotoCarouselBase from "../../../../shared/ui/HotelPhotoCarouselBase/HotelPhotoCarouselBase.jsx";

import styles from "./FacilitiesLeisureGallery.module.css";

function clampIndex(index, length) {
  if (length <= 0) return 0;
  return ((index % length) + length) % length;
}

function preloadGalleryImages(items) {
  items.forEach((item) => {
    if (!item?.src) return;

    const image = new Image();
    image.src = item.src;
  });
}

function normalizeGalleryItems(items) {
  return items.filter((item) => item?.src);
}

export default function FacilitiesLeisureGallery() {
  const section =
    hotelBrand?.pages?.facilities?.sections?.facilitiesLeisure ?? null;

  const gallery = section?.gallery ?? null;
  const fallbackLabel = gallery?.fallbackLabel ?? "Galeria";

  const items = useMemo(
    () => normalizeGalleryItems(gallery?.items ?? []),
    [gallery?.items],
  );

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setActiveIndex((previousIndex) => clampIndex(previousIndex, items.length));
  }, [items.length]);

  useEffect(() => {
    if (!items.length) return;
    preloadGalleryImages(items);
  }, [items]);

  const hasItems = items.length > 0;

  const goPrev = useCallback(() => {
    if (!hasItems) return;
    setActiveIndex((previousIndex) =>
      clampIndex(previousIndex - 1, items.length),
    );
  }, [hasItems, items.length]);

  const goNext = useCallback(() => {
    if (!hasItems) return;
    setActiveIndex((previousIndex) =>
      clampIndex(previousIndex + 1, items.length),
    );
  }, [hasItems, items.length]);

  if (!gallery || !items.length) return null;

  return (
    <section
      className={styles.galleryBlock}
      aria-label="Galeria de instalações e lazer"
    >
      <div className={styles.galleryShell}>
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
    </section>
  );
}
