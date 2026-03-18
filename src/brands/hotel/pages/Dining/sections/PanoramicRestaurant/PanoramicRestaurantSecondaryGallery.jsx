import { useMemo, useState, useCallback, useEffect } from "react";

import hotelBrand from "../../../../config/index.js";
import HotelPhotoCarouselBase from "../../../../shared/ui/HotelPhotoCarouselBase/HotelPhotoCarouselBase.jsx";
import CTAButton from "../../../../../../shared/ui/CTAButton/CTAButton.jsx";

import styles from "./PanoramicRestaurantSecondaryGallery.module.css";

const clampIndex = (index, length) => {
  if (length <= 0) return 0;
  return ((index % length) + length) % length;
};

export default function PanoramicRestaurantSecondaryGallery() {
  const section =
    hotelBrand?.pages?.dining?.sections?.panoramicRestaurant ?? null;

  const gallerySecondary = section?.gallery?.gallerySecondary ?? null;

  const items = useMemo(
    () => gallerySecondary?.items ?? [],
    [gallerySecondary?.items],
  );

  const fallbackLabel =
    gallerySecondary?.fallbackLabel ?? "Ambiente e detalhes do restaurante";

  const cta = gallerySecondary?.cta ?? null;

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

  if (!gallerySecondary) return null;

  return (
    <div
      className={styles.block}
      aria-labelledby={`${section?.id ?? "restaurante-panoramico"}-galeria-secundaria`}
    >
      <div className={styles.inner}>
        <div className={styles.card}>
          <HotelPhotoCarouselBase
            items={items}
            activeIndex={activeIndex}
            onPrev={goPrev}
            onNext={goNext}
            fallbackLabel={fallbackLabel}
            className={styles.carouselStage}
          />
        </div>

        {cta?.label ? (
          <div className={styles.ctaWrap}>
            <CTAButton
              href={cta.href}
              label={cta.label}
              ariaLabel={cta.ariaLabel ?? cta.label}
              icon="phone"
              blink={false}
              compact={false}
              variant="hotel"
              tone="strong"
              className={styles.ctaButton}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}