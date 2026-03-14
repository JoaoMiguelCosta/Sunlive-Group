import hotelBrand from "../../../../config/index.js";
import HotelHighlightBanner from "../../../../shared/ui/HotelHighlightBanner/HotelHighlightBanner.jsx";

import styles from "./EventsCelebrationsBanner.module.css";

export default function EventsCelebrationsBanner() {
  const banner =
    hotelBrand?.pages?.events?.sections?.eventsCelebrations?.customizedBanner ??
    null;

  if (!banner?.title && !banner?.description) return null;

  return (
    <div className={styles.wrapper}>
      <HotelHighlightBanner
        title={banner.title}
        description={banner.description}
        variant="centered"
        leftIcon={banner.icons?.left}
        rightIcon={banner.icons?.right}
        iconsEnabled={banner.icons?.enabled ?? false}
        className={styles.banner}
      />
    </div>
  );
}
