import { useEffect, useState } from "react";

import barAndLounge from "../../../../config/sections/dining/barAndLounge.js";
import { resolveHotelIcon } from "../../../../config/core/iconKeyMap.js";
import { ICONS } from "../../../../config/core/resolvedVisuals.js";
import HotelIconPill from "../../../../shared/ui/HotelIconPill/HotelIconPill.jsx";
import HotelPhotoCarouselBase from "../../../../shared/ui/HotelPhotoCarouselBase/HotelPhotoCarouselBase.jsx";

import styles from "./BarLoungeShowcase.module.css";

function clampIndex(index, length) {
  if (length <= 0) {
    return 0;
  }

  return ((index % length) + length) % length;
}

export default function BarLoungeShowcase() {
  const section = barAndLounge;

  const intro = section?.intro ?? null;

  const features = Array.isArray(section?.features?.items)
    ? section.features.items
    : [];

  const atmosphereCard = section?.atmosphereCard ?? null;
  const highlightCard = section?.highlightCard ?? null;
  const gallery = section?.gallery ?? null;

  const items = Array.isArray(gallery?.items) ? gallery.items : [];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setActiveIndex((currentIndex) => clampIndex(currentIndex, items.length));
  }, [items.length]);

  if (!section) {
    return null;
  }

  const hasItems = items.length > 0;

  const fallbackLabel = gallery?.fallbackLabel ?? "Bar & Lounge";
  const fallbackEyebrow = gallery?.ui?.fallbackEyebrow ?? "Lounge";
  const fallbackTitle = gallery?.ui?.fallbackTitle ?? "Ambiente interior";

  const AtmosphereIcon = atmosphereCard?.iconKey
    ? resolveHotelIcon(ICONS,atmosphereCard.iconKey)
    : null;

  const HighlightIcon = highlightCard?.iconKey
    ? resolveHotelIcon(ICONS,highlightCard.iconKey)
    : null;

  const goToPreviousItem = () => {
    if (!hasItems) {
      return;
    }

    setActiveIndex((currentIndex) =>
      clampIndex(currentIndex - 1, items.length),
    );
  };

  const goToNextItem = () => {
    if (!hasItems) {
      return;
    }

    setActiveIndex((currentIndex) =>
      clampIndex(currentIndex + 1, items.length),
    );
  };

  const hasContent =
    Boolean(intro) ||
    features.length > 0 ||
    Boolean(highlightCard) ||
    Boolean(gallery);

  if (!hasContent) {
    return null;
  }

  return (
    <div className={styles.block}>
      <div className={styles.grid}>
        <div className={styles.leftPanel}>
          {intro?.eyebrow || intro?.title || intro?.description ? (
            <div className={styles.introCard}>
              <div className={styles.introInner}>
                {intro.eyebrow ? (
                  <span className={styles.eyebrow}>{intro.eyebrow}</span>
                ) : null}

                {intro.title ? (
                  <h3 className={styles.title}>{intro.title}</h3>
                ) : null}

                {intro.description ? (
                  <p className={styles.description}>{intro.description}</p>
                ) : null}
              </div>
            </div>
          ) : null}

          {features.length > 0 ? (
            <div className={styles.pillsSection}>
              <div className={styles.pillsGrid}>
                {features.map((item) => {
                  const Icon = item?.iconKey
                    ? resolveHotelIcon(ICONS,item.iconKey)
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
                {atmosphereCard.eyebrow ? (
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

                  {atmosphereCard.title ? (
                    <h4 className={styles.atmosphereTitle}>
                      {atmosphereCard.title}
                    </h4>
                  ) : null}
                </div>

                {atmosphereCard.text ? (
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

                    {highlightCard.title ? (
                      <h4 className={styles.highlightTitle}>
                        {highlightCard.title}
                      </h4>
                    ) : null}
                  </div>

                  {highlightCard.text ? (
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
                onPrev={goToPreviousItem}
                onNext={goToNextItem}
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
