import { useCallback, useEffect, useMemo, useState } from "react";

import hotelBrand, { resolveHotelIcon } from "../../../../config/index.js";
import HotelIconPill from "../../../../shared/ui/HotelIconPill/HotelIconPill.jsx";
import HotelPhotoCarouselBase from "../../../../shared/ui/HotelPhotoCarouselBase/HotelPhotoCarouselBase.jsx";

import styles from "./BarLoungeShowcase.module.css";

function clampIndex(index, length) {
  if (length <= 0) return 0;
  return ((index % length) + length) % length;
}

export default function BarLoungeShowcase() {
  const section = hotelBrand?.pages?.dining?.sections?.barAndLounge ?? null;

  if (!section) return null;

  const intro = section?.intro ?? null;

  const features = Array.isArray(section?.features?.items)
    ? section.features.items
    : [];

  const atmosphereCard = section?.atmosphereCard ?? null;
  const highlightCard = section?.highlightCard ?? null;
  const gallery = section?.gallery ?? null;

  const items = useMemo(
    () => (Array.isArray(gallery?.items) ? gallery.items : []),
    [gallery?.items],
  );

  const fallbackLabel = gallery?.fallbackLabel ?? "Bar & Lounge";
  const fallbackEyebrow = gallery?.ui?.fallbackEyebrow ?? "Lounge";
  const fallbackTitle = gallery?.ui?.fallbackTitle ?? "Ambiente interior";

  const AtmosphereIcon = atmosphereCard?.iconKey
    ? resolveHotelIcon(hotelBrand?.icons, atmosphereCard.iconKey)
    : null;

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
          {(intro?.eyebrow || intro?.title || intro?.description) && (
            <div className={styles.introCard}>
              <div className={styles.introInner}>
                {intro?.eyebrow ? (
                  <span className={styles.eyebrow}>{intro.eyebrow}</span>
                ) : null}

                {intro?.title ? (
                  <h3 className={styles.title}>{intro.title}</h3>
                ) : null}

                {intro?.description ? (
                  <p className={styles.description}>{intro.description}</p>
                ) : null}
              </div>
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

          <div className={styles.bottomCards}>
            {atmosphereCard?.title || atmosphereCard?.text ? (
              <article className={styles.atmosphereCard}>
                {atmosphereCard?.eyebrow ? (
                  <span className={styles.atmosphereEyebrow}>
                    {atmosphereCard.eyebrow}
                  </span>
                ) : null}

                <div className={styles.atmosphereHeader}>
                  {AtmosphereIcon ? (
                    <span
                      className={styles.atmosphereIconSlot}
                      aria-hidden="true"
                    >
                      <AtmosphereIcon className={styles.atmosphereIcon} />
                    </span>
                  ) : null}

                  {atmosphereCard?.title ? (
                    <h4 className={styles.atmosphereTitle}>
                      {atmosphereCard.title}
                    </h4>
                  ) : null}
                </div>

                {atmosphereCard?.text ? (
                  <p className={styles.atmosphereText}>{atmosphereCard.text}</p>
                ) : null}
              </article>
            ) : null}

            {highlightCard?.title || highlightCard?.text ? (
              <article className={styles.highlightCard}>
                <div className={styles.highlightCardInner}>
                  <div className={styles.highlightHeader}>
                    {HighlightIcon ? (
                      <span
                        className={styles.highlightIconCircle}
                        aria-hidden="true"
                      >
                        <HighlightIcon className={styles.highlightIcon} />
                      </span>
                    ) : null}

                    {highlightCard?.title ? (
                      <h4 className={styles.highlightTitle}>
                        {highlightCard.title}
                      </h4>
                    ) : null}
                  </div>

                  {highlightCard?.text ? (
                    <p className={styles.highlightText}>{highlightCard.text}</p>
                  ) : null}
                </div>
              </article>
            ) : null}
          </div>
        </div>

        <div className={styles.rightPanel}>
          <div className={styles.galleryShell}>
            <div className={styles.galleryCard}>
              <HotelPhotoCarouselBase
                items={items}
                activeIndex={activeIndex}
                onPrev={goPrev}
                onNext={goNext}
                onSelectIndex={setActiveIndex}
                fallbackLabel={fallbackLabel}
                fallbackEyebrow={fallbackEyebrow}
                fallbackTitle={fallbackTitle}
                className={styles.galleryStage}
                showCaption
                showIndicators
                fitMode="cover"
                imagePosition="center center"
                imageBackground="#120b06"
                showImageBackdrop
                backdropBlur="18px"
                backdropScale={1.12}
                backdropOpacity={0.46}
                captionClassName={styles.galleryCaption}
                indicatorDockClassName={styles.galleryIndicatorDock}
                indicatorRailClassName={styles.galleryIndicatorRail}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
