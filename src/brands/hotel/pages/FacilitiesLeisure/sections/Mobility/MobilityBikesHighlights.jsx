import { useMemo } from "react";

import hotelBrand, { resolveHotelIcon } from "../../../../config/index.js";
import HotelFeatureListWithMedia from "../../../../shared/ui/HotelFeatureListWithMedia/HotelFeatureListWithMedia.jsx";

import styles from "./MobilityBikesHighlights.module.css";

export default function MobilityBikesHighlights() {
  const highlights =
    hotelBrand?.pages?.facilities?.sections?.mobility?.bikes?.highlights ??
    null;

  const items = useMemo(() => {
    if (!highlights?.items?.length) return [];

    return highlights.items.map((item) => {
      const iconKey = item?.icon?.key ?? null;
      const Icon = iconKey
        ? resolveHotelIcon(hotelBrand?.icons, iconKey)
        : null;

      return {
        ...item,
        icon: {
          ...item.icon,
          component: Icon ? <Icon /> : null,
        },
      };
    });
  }, [highlights]);

  if (!items.length) return null;

  return (
    <div className={styles.block}>
      <HotelFeatureListWithMedia
        items={items}
        image={highlights?.image ?? null}
        imageAlt={highlights?.imageAlt ?? ""}
        mediaPosition={highlights?.mediaPosition ?? "right"}
      />
    </div>
  );
}