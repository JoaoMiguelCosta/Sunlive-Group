import { useMemo } from "react";

import hotelBrand, { resolveHotelIcon } from "../../../../config/index.js";
import HotelHighlightBanner from "../../../../shared/ui/HotelHighlightBanner/HotelHighlightBanner.jsx";

import styles from "./SustainabilityHighlightBanner.module.css";

export default function SustainabilityHighlightBanner() {
  const section =
    hotelBrand?.pages?.sustainability?.sections?.sustainabilityCommitment ??
    null;

  const banner = section?.highlightBanner ?? null;

  const resolvedBanner = useMemo(() => {
    if (!banner) return null;

    const LeftIcon = banner?.leftIconKey
      ? resolveHotelIcon(hotelBrand?.icons, banner.leftIconKey)
      : null;

    const RightIcon = banner?.rightIconKey
      ? resolveHotelIcon(hotelBrand?.icons, banner.rightIconKey)
      : null;

    return {
      ...banner,
      leftIcon: LeftIcon ? <LeftIcon /> : null,
      rightIcon: RightIcon ? <RightIcon /> : null,
    };
  }, [banner]);

  if (!resolvedBanner?.title && !resolvedBanner?.description) return null;

  return (
    <div className={styles.wrapper}>
      <HotelHighlightBanner
        eyebrow={resolvedBanner.eyebrow}
        title={resolvedBanner.title}
        description={resolvedBanner.description}
        variant={resolvedBanner.variant ?? "centered"}
        iconsEnabled={resolvedBanner.iconsEnabled ?? false}
        leftIcon={resolvedBanner.leftIcon}
        rightIcon={resolvedBanner.rightIcon}
        className={styles.banner}
      />
    </div>
  );
}
