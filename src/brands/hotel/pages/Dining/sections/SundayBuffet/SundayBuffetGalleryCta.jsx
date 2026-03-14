import { useCallback, useEffect, useMemo, useState } from "react";

import hotelBrand from "../../../../config/index.js";
import HotelPhotoCarouselBase from "../../../../shared/ui/HotelPhotoCarouselBase/HotelPhotoCarouselBase.jsx";
// Ativar mais tarde quando ligares os ícones:
// import { resolveHotelIcon } from "../../../../config/index.js";

import styles from "./SundayBuffetGalleryCta.module.css";

const clampIndex = (index, length) => {
  if (length <= 0) return 0;
  return ((index % length) + length) % length;
};

export default function SundayBuffetGalleryCta() {
  const section = hotelBrand?.pages?.dining?.sections?.sundayBuffet ?? null;

  const gallery = section?.gallery ?? null;
  const cta = section?.cta ?? null;

  const items = useMemo(() => gallery?.items ?? [], [gallery?.items]);
  const fallbackLabel = gallery?.fallbackLabel ?? "Buffet de Domingo";

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

  if (!gallery && !cta) return null;

  // Preparado para futuro:
  // const Icon = cta?.iconKey
  //   ? resolveHotelIcon(hotelBrand?.icons, cta.iconKey)
  //   : null;

  return (
    <div className={styles.block}>
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
            <a
              className={styles.ctaButton}
              href={cta.href ?? "#"}
              target={cta.external ? "_blank" : undefined}
              rel={cta.external ? "noreferrer noopener" : undefined}
              aria-label={cta.ariaLabel ?? cta.label}
            >
              <span className={styles.ctaIconSlot} aria-hidden="true">
                {/* Quando ativares os ícones:
                {Icon ? <Icon className={styles.ctaIcon} /> : null}
                */}
              </span>

              <span>{cta.label}</span>
            </a>
          </div>
        ) : null}
      </div>
    </div>
  );
}
