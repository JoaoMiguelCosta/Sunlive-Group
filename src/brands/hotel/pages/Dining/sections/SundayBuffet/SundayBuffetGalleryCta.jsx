import sundayBuffet from "../../../../config/sections/dining/sundayBuffet.js";
import CTAButton from "../../../../../../shared/ui/CTAButton/CTAButton.jsx";

import styles from "./SundayBuffetGalleryCta.module.css";

export default function SundayBuffetGalleryCta() {
  const section = sundayBuffet;

  if (!section) return null;

  const gallery = section?.gallery ?? null;
  const cta = section?.cta ?? null;
  const detailsCard = section?.detailsCard ?? null;

  const featuredImage = gallery?.featuredImage ?? null;
  const secondaryImage = gallery?.secondaryImage ?? null;
  const galleryAriaLabel = gallery?.ariaLabel ?? "Galeria do buffet de domingo";

  const hasFeaturedImage = Boolean(featuredImage?.src);
  const hasSecondaryImage = Boolean(secondaryImage?.src);
  const hasDetailsCard = Boolean(detailsCard?.title || detailsCard?.text);

  if (
    !hasFeaturedImage &&
    !hasSecondaryImage &&
    !hasDetailsCard &&
    !cta?.label
  ) {
    return null;
  }

  return (
    <div className={styles.block}>
      <div className={styles.layout} aria-label={galleryAriaLabel}>
        <div className={styles.visualStage}>
          {hasFeaturedImage ? (
            <figure className={styles.featuredCard}>
              <img
                src={featuredImage.src}
                alt={featuredImage.alt ?? "Buffet de Domingo"}
                className={styles.featuredImage}
                loading="eager"
                decoding="async"
                style={{
                  objectPosition:
                    featuredImage.imagePosition ?? "center center",
                }}
              />

              {featuredImage.label ? (
                <figcaption className={styles.featuredCaption}>
                  <span>{featuredImage.label}</span>
                </figcaption>
              ) : null}
            </figure>
          ) : null}

          <div className={styles.asideColumn}>
            {hasSecondaryImage ? (
              <figure className={styles.secondaryCard}>
                <img
                  src={secondaryImage.src}
                  alt={secondaryImage.alt ?? "Buffet de Domingo"}
                  className={styles.secondaryImage}
                  loading="lazy"
                  decoding="async"
                  style={{
                    objectPosition:
                      secondaryImage.imagePosition ?? "center center",
                  }}
                />

                {secondaryImage.label ? (
                  <figcaption className={styles.secondaryCaption}>
                    <span>{secondaryImage.label}</span>
                  </figcaption>
                ) : null}
              </figure>
            ) : null}

            {hasDetailsCard ? (
              <article className={styles.detailsCard}>
                {detailsCard?.eyebrow ? (
                  <span className={styles.detailsEyebrow}>
                    {detailsCard.eyebrow}
                  </span>
                ) : null}

                {detailsCard?.title ? (
                  <h3 className={styles.detailsTitle}>{detailsCard.title}</h3>
                ) : null}

                {detailsCard?.text ? (
                  <p className={styles.detailsText}>{detailsCard.text}</p>
                ) : null}
              </article>
            ) : null}
          </div>
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
