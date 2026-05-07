import hotelBrand from "../../../../config/index.js";
import HotelPhotoCarouselBase from "../../../../shared/ui/HotelPhotoCarouselBase/HotelPhotoCarouselBase.jsx";

import styles from "./PanoramicRestaurantPhotoCarousel.module.css";

export default function PanoramicRestaurantPhotoCarousel() {
  const section =
    hotelBrand?.pages?.dining?.sections?.panoramicRestaurant ?? null;

  const gallery = section?.gallery ?? null;
  const items = Array.isArray(gallery?.items) ? gallery.items : [];

  const fallbackLabel = gallery?.fallbackLabel ?? "Restaurante Panorâmico";
  const fallbackEyebrow = gallery?.ui?.fallbackEyebrow ?? "Panorâmica";
  const fallbackTitle = gallery?.ui?.fallbackTitle ?? "Experiência com vista";

  return (
    <div className={styles.frame} aria-label={fallbackLabel}>
      <div className={styles.shell}>
        <div className={styles.card}>
          <HotelPhotoCarouselBase
            items={items}
            fallbackLabel={fallbackLabel}
            fallbackEyebrow={fallbackEyebrow}
            fallbackTitle={fallbackTitle}
            previousLabel="Imagem anterior do restaurante panorâmico"
            nextLabel="Imagem seguinte do restaurante panorâmico"
            indicatorsLabel="Navegação da galeria do restaurante panorâmico"
            className={styles.carouselStage}
            captionClassName={styles.panoramicCaption}
            indicatorDockClassName={styles.panoramicIndicatorDock}
            indicatorRailClassName={styles.panoramicIndicatorRail}
            showIndicators
            showCaption
            fitMode="cover"
            imagePosition="center center"
            imageBackground="#130c08"
            showImageBackdrop
            backdropBlur="18px"
            backdropScale={1.14}
            backdropOpacity={0.5}
          />
        </div>
      </div>
    </div>
  );
}
