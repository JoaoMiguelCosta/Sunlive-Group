import hotelBrand from "../../../../config/index.js";
import HotelHighlightPill from "../../../../shared/ui/HotelHighlightPill/HotelHighlightPill.jsx";
import styles from "./UniqueNaturalSetting.module.css";

export default function UniqueNaturalSetting() {
  const block =
    hotelBrand?.pages?.about?.sections?.uniqueNaturalSetting ?? null;

  if (!block) return null;

  const sectionId = block?.id ?? "sobre-envolvente-natural";
  const ariaLabel = block?.ariaLabel ?? "Envolvente natural da Estalagem";

  const kicker = block?.header?.kicker ?? "";
  const title = block?.header?.title ?? "";
  const description = block?.header?.description ?? "";

  const imageSrc = block?.image?.src ?? "";
  const imageAlt =
    block?.image?.alt ??
    "Entrada da Estalagem enquadrada pela envolvente exterior";

  const overlayEyebrow = block?.overlay?.eyebrow ?? "";
  const pillText = block?.highlightPill?.text ?? "";

  const hasContent = Boolean(
    kicker || title || description || overlayEyebrow || pillText,
  );

  const hasImage = Boolean(imageSrc);

  if (!hasContent) return null;

  return (
    <section id={sectionId} aria-label={ariaLabel} className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.shell}>
          <div className={styles.contentColumn}>
            {kicker ? <p className={styles.kicker}>{kicker}</p> : null}

            {title ? <h2 className={styles.title}>{title}</h2> : null}

            {description ? (
              <p className={styles.description}>{description}</p>
            ) : null}
          </div>

          <div className={styles.mediaColumn}>
            <div className={styles.mediaFrame}>
              <div className={styles.mediaGlow} aria-hidden="true" />

              <div className={styles.mediaCard}>
                {hasImage ? (
                  <img
                    className={styles.image}
                    src={imageSrc}
                    alt={imageAlt}
                    loading="lazy"
                  />
                ) : (
                  <div className={styles.imageFallback} aria-hidden="true" />
                )}

                <div className={styles.imageOverlay} aria-hidden="true" />
                <div className={styles.imageVignette} aria-hidden="true" />
                <div className={styles.imageInnerBorder} aria-hidden="true" />

                {(overlayEyebrow || pillText) && (
                  <div className={styles.overlayContent}>
                    {overlayEyebrow ? (
                      <span className={styles.overlayEyebrow}>
                        {overlayEyebrow}
                      </span>
                    ) : null}

                    {pillText ? (
                      <div className={styles.pillWrap}>
                        <HotelHighlightPill className={styles.highlightPill}>
                          {pillText}
                        </HotelHighlightPill>
                      </div>
                    ) : null}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
