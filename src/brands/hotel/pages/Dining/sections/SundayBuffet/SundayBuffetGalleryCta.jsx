import { useMemo } from "react";

import hotelBrand from "../../../../config/index.js";
import CTAButton from "../../../../../../shared/ui/CTAButton/CTAButton.jsx";
import HotelPhotoCarouselBase from "../../../../shared/ui/HotelPhotoCarouselBase/HotelPhotoCarouselBase.jsx";

import styles from "./SundayBuffetGalleryCta.module.css";

export default function SundayBuffetGalleryCta() {
  const section = hotelBrand?.pages?.dining?.sections?.sundayBuffet ?? null;

  const gallery = section?.gallery ?? null;
  const cta = section?.cta ?? null;

  const items = useMemo(
    () => (Array.isArray(gallery?.items) ? gallery.items : []),
    [gallery?.items],
  );

  const fallbackLabel = gallery?.fallbackLabel ?? "Buffet de Domingo";

  if (!gallery && !cta) return null;

  return (
    <div className={styles.block}>
      <div className={styles.inner}>
        <div className={styles.card}>
          <HotelPhotoCarouselBase
            items={items}
            fallbackLabel={fallbackLabel}
            className={styles.carouselStage}
            showIndicators={true}
            showCaption={false}
            initialIndex={0}
            fitMode="contain"
            imagePosition="center center"
            imageBackground="#120b06"
            showImageBackdrop={true}
            backdropBlur="16px"
            backdropScale={1.12}
            backdropOpacity={0.6}
          />
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
