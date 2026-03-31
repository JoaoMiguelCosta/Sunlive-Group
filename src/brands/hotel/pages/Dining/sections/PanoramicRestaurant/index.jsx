import TitlePanoramicRestaurant from "./TitlePanoramicRestaurant.jsx";
import DescriptionPanoramicRestaurant from "./DescriptionPanoramicRestaurant.jsx";
import PanoramicRestaurantPhotoCarousel from "./PanoramicRestaurantPhotoCarousel.jsx";

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

        <div className={styles.galleryBlock}>
          <PanoramicRestaurantPhotoCarousel />
        </div>
      </div>
    </section>
  );
}
