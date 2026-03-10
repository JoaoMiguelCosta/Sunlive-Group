import { useMemo, useState, useCallback, useEffect } from "react";

import hotelBrand from "../../../../config/index.js";
import HotelPhotoCarouselBase from "../../../../shared/ui/HotelPhotoCarouselBase/HotelPhotoCarouselBase.jsx";
// importar mais tarde quando ligares os ícones:
// import { resolveHotelIcon } from "../../../../config/index.js";

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

  const fallbackLabel = gallerySecondary?.fallbackLabel ?? "Fotos";
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

  // Preparado para futuro:
  // const Icon = cta?.iconKey
  //   ? resolveHotelIcon(hotelBrand?.icons, cta.iconKey)
  //   : null;

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
          />
        </div>

        {cta?.label ? (
          <div className={styles.ctaWrap}>
            <a
              className={styles.ctaButton}
              href={cta.href ?? "#"}
              target={cta.external ? "_blank" : undefined}
              rel={cta.external ? "noreferrer noopener" : undefined}
              aria-label={cta.ariaLabel ?? cta.label}
            >
              {/* Quando adicionares o sistema de ícones:
              {Icon ? (
                <span className={styles.ctaIcon} aria-hidden="true">
                  <Icon className={styles.ctaIconSvg} />
                </span>
              ) : null}
              */}

              <span>{cta.label}</span>
            </a>
          </div>
        ) : null}
      </div>
    </div>
  );
}
