import hotelBrand from "../../../../config/index.js";
import HotelPhotoCarouselBase from "../../../../shared/ui/HotelPhotoCarouselBase/HotelPhotoCarouselBase.jsx";

import styles from "./RestaurantPhotoCarousel.module.css";

export default function RestaurantPhotoCarousel() {
  const section = hotelBrand?.pages?.dining?.sections?.restaurant ?? null;
  const gallery = section?.gallery ?? null;
  const items = Array.isArray(gallery?.items) ? gallery.items : [];

  const fallbackLabel = gallery?.fallbackLabel ?? "Estações de Buffet";
  const fallbackEyebrow = gallery?.ui?.fallbackEyebrow ?? "Galeria";
  const fallbackTitle = gallery?.ui?.fallbackTitle ?? "Estações de Buffet";

  return (
    <div className={styles.frame} aria-label={fallbackLabel}>
      <div className={styles.shell}>
        <div className={styles.card}>
          <HotelPhotoCarouselBase
            items={items}
            fallbackLabel={fallbackLabel}
            fallbackEyebrow={fallbackEyebrow}
            fallbackTitle={fallbackTitle}
            className={styles.carouselStage}
            captionClassName={styles.restaurantCaption}
            indicatorDockClassName={styles.restaurantIndicatorDock}
            indicatorRailClassName={styles.restaurantIndicatorRail}
            showIndicators
            showCaption
            fitMode="cover"
            imagePosition="center center"
            imageBackground="#170d07"
            showImageBackdrop
            backdropBlur="20px"
            backdropScale={1.16}
            backdropOpacity={0.56}
          />
        </div>
      </div>
    </div>
  );
}
