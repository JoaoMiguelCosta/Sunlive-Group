import { useMemo } from "react";

import sustainability from "../../../../config/pages/sustainability.js";
const sustainabilityCommitment = sustainability.sections.sustainabilityCommitment;
import { resolveHotelIcon } from "../../../../config/core/iconKeyMap.js";
import { ICONS } from "../../../../config/core/resolvedVisuals.js";
import HotelHighlightBanner from "../../../../shared/ui/HotelHighlightBanner/HotelHighlightBanner.jsx";

import styles from "./SustainabilityHighlightBanner.module.css";

export default function SustainabilityHighlightBanner() {
  const section = sustainabilityCommitment;

  const banner = section?.highlightBanner ?? null;

  const resolvedBanner = useMemo(() => {
    if (!banner) return null;

    const LeftIcon = banner?.leftIconKey
      ? resolveHotelIcon(ICONS, banner.leftIconKey)
      : null;

    const RightIcon = banner?.rightIconKey
      ? resolveHotelIcon(ICONS, banner.rightIconKey)
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
        headingAs="h3"
        className={styles.banner}
      />
    </div>
  );
}
