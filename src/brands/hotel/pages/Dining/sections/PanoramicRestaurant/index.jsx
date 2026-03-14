import TitlePanoramicRestaurant from "./TitlePanoramicRestaurant";
import DescriptionPanoramicRestaurant from "./DescriptionPanoramicRestaurant";
import PanoramicRestaurantPhotoCarousel from "./PanoramicRestaurantPhotoCarousel";
import PanoramicRestaurantDescriptionSection from "./PanoramicRestaurantDescriptionSection";
import PanoramicRestaurantSecondaryGallery from "./PanoramicRestaurantSecondaryGallery";

import styles from "./PanoramicRestaurant.module.css";

export default function PanoramicRestaurantSection() {
  return (
    <section
      id="restaurante-panoramico"
      className={styles.section}
      aria-labelledby="restaurante-panoramico-title"
    >
      <div className={styles.inner}>
        <div className={styles.headerBlock}>
          <TitlePanoramicRestaurant />
          <DescriptionPanoramicRestaurant />
        </div>

        <div className={styles.contentStack}>
          <PanoramicRestaurantPhotoCarousel />
          <PanoramicRestaurantDescriptionSection />
          <PanoramicRestaurantSecondaryGallery />
        </div>
      </div>
    </section>
  );
}
