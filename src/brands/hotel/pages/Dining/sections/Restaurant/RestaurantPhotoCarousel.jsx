import hotelBrand from "../../../../config/index.js";
import HotelPhotoCarouselBase from "../../../../shared/ui/HotelPhotoCarouselBase/HotelPhotoCarouselBase.jsx";

import styles from "./RestaurantPhotoCarousel.module.css";

export default function RestaurantPhotoCarousel() {
  const section = hotelBrand?.pages?.dining?.sections?.restaurant ?? null;

  const gallery = section?.gallery ?? null;
  const items = Array.isArray(gallery?.items) ? gallery.items : [];
  const fallbackLabel = gallery?.fallbackLabel ?? "Estações de Buffet";

  return (
    <div className={styles.frame} aria-label={fallbackLabel}>
      <div className={styles.shell}>
        <div className={styles.card}>
          <HotelPhotoCarouselBase
            items={items}
            fallbackLabel={fallbackLabel}
            fallbackEyebrow="Galeria"
            fallbackTitle="Estações de Buffet"
            className={styles.carouselStage}
            showIndicators
            showCaption
            fitMode="cover"
            imagePosition="center center"
            imageBackground="#170d07"
            showImageBackdrop
            backdropBlur="22px"
            backdropScale={1.14}
            backdropOpacity={0.72}
          />
        </div>
      </div>
    </div>
  );
}
