import { useMemo } from "react";

import eventsCelebrations from "../../../../config/sections/events/eventsCelebrations.js";
import { resolveHotelIcon } from "../../../../config/core/iconKeyMap.js";
import { ICONS } from "../../../../config/core/resolvedVisuals.js";
import HotelHighlightBanner from "../../../../shared/ui/HotelHighlightBanner/HotelHighlightBanner.jsx";

import styles from "./EventsCelebrationsBanner.module.css";

export default function EventsCelebrationsBanner() {
  const banner = eventsCelebrations?.customizedBanner ?? null;

  const resolvedBanner = useMemo(() => {
    if (!banner) return null;

    const leftIconKey = banner?.icons?.left?.key ?? null;
    const rightIconKey = banner?.icons?.right?.key ?? null;

    const LeftIcon = leftIconKey
      ? resolveHotelIcon(ICONS,leftIconKey)
      : null;

    const RightIcon = rightIconKey
      ? resolveHotelIcon(ICONS,rightIconKey)
      : null;

    return {
      ...banner,
      icons: {
        ...banner.icons,
        left: LeftIcon ? <LeftIcon /> : null,
        right: RightIcon ? <RightIcon /> : null,
      },
    };
  }, [banner]);

  if (!resolvedBanner?.title && !resolvedBanner?.description) return null;

  return (
    <div id={resolvedBanner.id} className={styles.wrapper}>
      <HotelHighlightBanner
        eyebrow={resolvedBanner.eyebrow}
        title={resolvedBanner.title}
        description={resolvedBanner.description}
        variant="centered"
        theme="sectionFeatured"
        leftIcon={resolvedBanner.icons?.left ?? null}
        rightIcon={resolvedBanner.icons?.right ?? null}
        iconsEnabled={resolvedBanner.icons?.enabled ?? false}
        className={styles.banner}
      />
    </div>
  );
}
