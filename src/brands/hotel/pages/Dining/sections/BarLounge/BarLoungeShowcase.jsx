import { useCallback, useEffect, useMemo, useState } from "react";

import hotelBrand from "../../../../config/index.js";
import HotelIconPill from "../../../../shared/ui/HotelIconPill/HotelIconPill.jsx";
import HotelPhotoCarouselBase from "../../../../shared/ui/HotelPhotoCarouselBase/HotelPhotoCarouselBase.jsx";
// Ativar mais tarde quando ligares os ícones:
// import { resolveHotelIcon } from "../../../../config/index.js";

import styles from "./BarLoungeShowcase.module.css";

const clampIndex = (index, length) => {
  if (length <= 0) return 0;
  return ((index % length) + length) % length;
};

export default function BarLoungeShowcase() {
  const section = hotelBrand?.pages?.dining?.sections?.barAndLounge ?? null;

  const intro = section?.intro ?? null;
  const features = section?.features?.items ?? [];
  const highlightCard = section?.highlightCard ?? null;
  const gallery = section?.gallery ?? null;

  const items = useMemo(() => gallery?.items ?? [], [gallery?.items]);
  const fallbackLabel = gallery?.fallbackLabel ?? "Foto";

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

  if (!intro && !features.length && !highlightCard && !gallery) return null;

  return (
    <div className={styles.block}>
      <div className={styles.grid}>
        <div className={styles.leftPanel}>
          {intro?.description ? (
            <div className={styles.descriptionWrap}>
              <p className={styles.description}>{intro.description}</p>
            </div>
          ) : null}

          {features.length ? (
            <div className={styles.pillsGrid}>
              {features.map((item) => {
                // Preparado para futuro:
                // const Icon = item?.iconKey
                //   ? resolveHotelIcon(hotelBrand?.icons, item.iconKey)
                //   : null;

                return (
                  <HotelIconPill
                    key={item.id}
                    label={item.label}
                    Icon={null}
                    size="md"
                    className={styles.featurePill}
                  />
                );
              })}
            </div>
          ) : null}

          {highlightCard?.title || highlightCard?.text ? (
            <div className={styles.highlightCard}>
              <div className={styles.highlightHeader}>
                <span className={styles.highlightIconSlot} aria-hidden="true">
                  {/* Quando ativares os ícones:
                  {Icon ? <Icon className={styles.highlightIcon} /> : null}
                  */}
                </span>

                <h3 className={styles.highlightTitle}>{highlightCard.title}</h3>
              </div>

              {highlightCard?.text ? (
                <p className={styles.highlightText}>{highlightCard.text}</p>
              ) : null}
            </div>
          ) : null}
        </div>

        <div className={styles.rightPanel}>
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
      </div>
    </div>
  );
}
