import { useMemo } from "react";

import facilitiesLeisurePage from "../../../../config/pages/facilitiesLeisure.js";
const mobility = facilitiesLeisurePage.sections.mobility;
import { resolveHotelIcon } from "../../../../config/core/iconKeyMap.js";
import { ICONS } from "../../../../config/core/resolvedVisuals.js";
import HotelFeatureListWithMedia from "../../../../shared/ui/HotelFeatureListWithMedia/HotelFeatureListWithMedia.jsx";

import styles from "./MobilityParkingHighlights.module.css";

export default function MobilityParkingHighlights() {
  const highlights = mobility?.parking?.highlights ?? null;

  const items = useMemo(() => {
    if (!highlights?.items?.length) return [];

    return highlights.items.map((item) => {
      const iconKey = item?.icon?.key ?? null;
      const Icon = iconKey
        ? resolveHotelIcon(ICONS, iconKey)
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
        imageObjectPosition={highlights?.imageObjectPosition ?? "center center"}
        mediaPosition={highlights?.mediaPosition ?? "left"}
        layoutMode="compact"
      />
    </div>
  );
}
