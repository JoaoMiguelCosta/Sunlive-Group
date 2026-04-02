import hotelBrand, { resolveHotelIcon } from "../../../../config/index.js";
import HotelPhotoCarouselBase from "../../../../shared/ui/HotelPhotoCarouselBase/HotelPhotoCarouselBase.jsx";

import styles from "./BreakfastShowcase.module.css";

function normalizeStringArray(items = []) {
  if (!Array.isArray(items)) return [];

  return items.map((item) => String(item ?? "").trim()).filter(Boolean);
}

export default function BreakfastShowcase() {
  const section = hotelBrand?.pages?.dining?.sections?.breakfast ?? null;
  if (!section) return null;

  const intro = section?.intro ?? null;
  const highlightCard = section?.highlightCard ?? null;
  const gallery = section?.gallery ?? null;

  const items = Array.isArray(gallery?.items) ? gallery.items : [];
  const fallbackLabel = gallery?.fallbackLabel ?? "Pequeno-almoço";
  const fallbackEyebrow = gallery?.fallbackEyebrow ?? "Galeria";
  const fallbackTitle = gallery?.fallbackTitle ?? "Pequeno-Almoço";

  const HighlightIcon = highlightCard?.iconKey
    ? resolveHotelIcon(hotelBrand?.icons, highlightCard.iconKey)
    : null;

  const showcaseId = `${section?.id ?? "restaurant-breakfast"}-showcase-title`;
  const introHighlights = normalizeStringArray(intro?.highlights);
  const highlightsAriaLabel =
    intro?.highlightsAriaLabel ?? "Destaques do pequeno-almoço";

  return (
    <div className={styles.block} aria-labelledby={showcaseId}>
      <div className={styles.grid}>
        <article className={styles.contentPanel}>
          {intro?.title ? (
            <header className={styles.header}>
              <div className={styles.headerText}>
                {intro?.eyebrow ? (
                  <span className={styles.headerEyebrow}>{intro.eyebrow}</span>
                ) : null}

                <h3 id={showcaseId} className={styles.title}>
                  {intro.title}
                </h3>
              </div>
            </header>
          ) : null}

          <div className={styles.body}>
            {Array.isArray(intro?.paragraphs) && intro.paragraphs.length ? (
              <div className={styles.paragraphGroup}>
                {intro.paragraphs.map((paragraph, index) => (
                  <p
                    key={`${section?.id ?? "restaurant-breakfast"}-intro-${index}`}
                    className={styles.paragraph}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            ) : null}

            {introHighlights.length ? (
              <div
                className={styles.pillGroup}
                aria-label={highlightsAriaLabel}
              >
                {introHighlights.map((item, index) => (
                  <span
                    key={`${section?.id ?? "restaurant-breakfast"}-highlight-${index}`}
                    className={styles.pill}
                  >
                    {item}
                  </span>
                ))}
              </div>
            ) : null}

            {highlightCard?.title || highlightCard?.text ? (
              <div
                className={styles.highlightCard}
                aria-label="Informação de horário do pequeno-almoço"
              >
                <div className={styles.highlightTop}>
                  {HighlightIcon ? (
                    <span
                      className={styles.highlightIconSlot}
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
            ) : null}
          </div>
        </article>

        <div className={styles.carouselPanel}>
          <div className={styles.carouselCard}>
            <HotelPhotoCarouselBase
              items={items}
              fallbackLabel={fallbackLabel}
              fallbackEyebrow={fallbackEyebrow}
              fallbackTitle={fallbackTitle}
              className={styles.carouselStage}
              showCaption
              showIndicators
              showImageBackdrop
              backdropBlur="22px"
              backdropScale={1.15}
              backdropOpacity={0.64}
              fitMode="cover"
              imagePosition="center center"
              imageBackground="#120b06"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
