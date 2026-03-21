import { useCallback, useEffect, useMemo, useState } from "react";

import hotelBrand, { resolveHotelIcon } from "../../../../config/index.js";
import HotelIconPill from "../../../../shared/ui/HotelIconPill/HotelIconPill.jsx";
import HotelPhotoCarouselBase from "../../../../shared/ui/HotelPhotoCarouselBase/HotelPhotoCarouselBase.jsx";

import styles from "./BarLoungeShowcase.module.css";

const clampIndex = (index, length) => {
  if (length <= 0) return 0;
  return ((index % length) + length) % length;
};

export default function BarLoungeShowcase() {
  const section = hotelBrand?.pages?.dining?.sections?.barAndLounge ?? null;

  const intro = section?.intro ?? null;
  const features = Array.isArray(section?.features?.items)
    ? section.features.items
    : [];
  const highlightCard = section?.highlightCard ?? null;
  const gallery = section?.gallery ?? null;

  const items = useMemo(() => gallery?.items ?? [], [gallery?.items]);
  const fallbackLabel = gallery?.fallbackLabel ?? "Bar & Lounge";

  const HighlightIcon = highlightCard?.iconKey
    ? resolveHotelIcon(hotelBrand?.icons, highlightCard.iconKey)
    : null;

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
          {(intro?.description || section?.headerLabel) && (
            <div className={styles.descriptionWrap}>
              {section?.headerLabel ? (
                <span className={styles.eyebrow}>{section.headerLabel}</span>
              ) : null}

              {intro?.description ? (
                <p className={styles.description}>{intro.description}</p>
              ) : null}
            </div>
          )}

          {features.length ? (
            <div className={styles.pillsSection}>
              <div className={styles.pillsGrid}>
                {features.map((item) => {
                  const Icon = item?.iconKey
                    ? resolveHotelIcon(hotelBrand?.icons, item.iconKey)
                    : null;

                  return (
                    <HotelIconPill
                      key={item.id}
                      label={item.label}
                      Icon={Icon}
                      size="md"
                      className={styles.featurePill}
                      iconClassName={styles.featureIcon}
                      iconCircleClassName={styles.featureIconCircle}
                    />
                  );
                })}
              </div>
            </div>
          ) : null}

          {highlightCard?.title || highlightCard?.text ? (
            <div className={styles.highlightCard}>
              <div className={styles.highlightCardInner}>
                <div className={styles.highlightHeader}>
                  {HighlightIcon ? (
                    <span
                      className={styles.highlightIconSlot}
                      aria-hidden="true"
                    >
                      <span className={styles.highlightIconCircle}>
                        <HighlightIcon className={styles.highlightIcon} />
                      </span>
                    </span>
                  ) : null}

                  {highlightCard?.title ? (
                    <h3 className={styles.highlightTitle}>
                      {highlightCard.title}
                    </h3>
                  ) : null}
                </div>

                {highlightCard?.text ? (
                  <p className={styles.highlightText}>{highlightCard.text}</p>
                ) : null}
              </div>
            </div>
          ) : null}
        </div>

        <div className={styles.rightPanel}>
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
        </div>
      </div>
    </div>
  );
}
