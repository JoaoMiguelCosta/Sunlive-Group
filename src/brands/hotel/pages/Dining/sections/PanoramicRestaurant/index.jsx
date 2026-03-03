import TitlePanoramicRestaurant from "./TitlePanoramicRestaurant";
import DescriptionPanoramicRestaurant from "./DescriptionPanoramicRestaurant";
import PanoramicRestaurantPhotoCarousel from "./PanoramicRestaurantPhotoCarousel";
import PanoramicRestaurantDescriptionSection from "./PanoramicRestaurantDescriptionSection";

import styles from "./PanoramicRestaurant.module.css";

export default function PanoramicRestaurantSection() {
  return (
    <section id="restaurant-panoramic" className={styles.section}>
      <div className={styles.inner}>
        <TitlePanoramicRestaurant />
        <DescriptionPanoramicRestaurant />
        <PanoramicRestaurantPhotoCarousel />
        <PanoramicRestaurantDescriptionSection />
      </div>
    </section>
  );
}
