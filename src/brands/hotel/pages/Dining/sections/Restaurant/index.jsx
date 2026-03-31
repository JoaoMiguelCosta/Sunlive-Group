import TitleRestaurant from "./TitleRestaurant.jsx";
import DescriptionRestaurant from "./DescriptionRestaurant.jsx";
import RestaurantPhotoCarousel from "./RestaurantPhotoCarousel.jsx";

import styles from "./Restaurant.module.css";

export default function RestaurantSection() {
  return (
    <section
      id="restauracao"
      className={styles.section}
      aria-labelledby="restauracao-title"
    >
      <div className={styles.inner}>
        <div className={styles.headerBlock}>
          <TitleRestaurant />
          <DescriptionRestaurant />
        </div>

        <div className={styles.galleryBlock}>
          <RestaurantPhotoCarousel />
        </div>
      </div>
    </section>
  );
}
