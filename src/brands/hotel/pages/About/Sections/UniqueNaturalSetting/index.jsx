import hotelBrand from "../../../../config/index.js";
import HotelHighlightPill from "../../../../shared/ui/HotelHighlightPill/HotelHighlightPill.jsx";

import styles from "./UniqueNaturalSetting.module.css";

function isValidText(value) {
  return typeof value === "string" && value.trim().length > 0;
}

export default function UniqueNaturalSetting() {
  const block =
    hotelBrand?.pages?.about?.sections?.uniqueNaturalSetting ?? null;

  if (!block) return null;

  const sectionId = block.id ?? "sobre-envolvente-natural";
  const titleId = `${sectionId}-title`;
  const descriptionId = `${sectionId}-description`;

  const ariaLabel = block.ariaLabel ?? "Envolvente natural da Estalagem";

  const kicker = block?.header?.kicker ?? "";
  const title = block?.header?.title ?? "";
  const description = block?.header?.description ?? "";

  const imageSrc = block?.image?.src ?? "";
  const imageAlt =
    block?.image?.alt ??
    "Entrada da Estalagem enquadrada pela envolvente exterior";

  const overlayEyebrow = block?.overlay?.eyebrow ?? "";
  const pillText = block?.highlightPill?.text ?? "";

  const hasHeaderContent =
    isValidText(kicker) || isValidText(title) || isValidText(description);

  const hasOverlayContent =
    isValidText(overlayEyebrow) || isValidText(pillText);
  const hasImage = isValidText(imageSrc);

  if (!hasHeaderContent && !hasOverlayContent && !hasImage) return null;

  return (
    <section
      id={sectionId}
      className={styles.section}
      aria-label={!title ? ariaLabel : undefined}
      aria-labelledby={title ? titleId : undefined}
      aria-describedby={description ? descriptionId : undefined}
    >
      <div className={styles.inner}>
        <div className={styles.shell}>
          {hasHeaderContent ? (
            <div className={styles.contentColumn}>
              {kicker ? <p className={styles.kicker}>{kicker}</p> : null}

              {title ? (
                <h2 id={titleId} className={styles.title}>
                  {title}
                </h2>
              ) : null}

              {description ? (
                <p id={descriptionId} className={styles.description}>
                  {description}
                </p>
              ) : null}
            </div>
          ) : null}

          <div className={styles.mediaColumn}>
            <figure className={styles.mediaFrame}>
              <div className={styles.mediaGlow} aria-hidden="true" />

              <div className={styles.mediaCard}>
                {hasImage ? (
                  <img
                    className={styles.image}
                    src={imageSrc}
                    alt={imageAlt}
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <div
                    className={styles.imageFallback}
                    role="img"
                    aria-label="Imagem da envolvente disponível em breve"
                  />
                )}

                <div className={styles.imageOverlay} aria-hidden="true" />
                <div className={styles.imageVignette} aria-hidden="true" />
                <div className={styles.imageInnerBorder} aria-hidden="true" />

                {hasOverlayContent ? (
                  <figcaption className={styles.overlayContent}>
                    {overlayEyebrow ? (
                      <span className={styles.overlayEyebrow}>
                        {overlayEyebrow}
                      </span>
                    ) : null}

                    {pillText ? (
                      <div className={styles.pillWrap}>
                        <HotelHighlightPill
                          className={styles.highlightPill}
                          cardClassName={styles.highlightPillCard}
                          innerClassName={styles.highlightPillInner}
                          textClassName={styles.highlightPillText}
                        >
                          {pillText}
                        </HotelHighlightPill>
                      </div>
                    ) : null}
                  </figcaption>
                ) : null}
              </div>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
