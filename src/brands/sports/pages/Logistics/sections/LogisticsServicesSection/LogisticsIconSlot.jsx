import { getIconComponent } from "./logisticsServicesSection.utils.js";

import styles from "./LogisticsIconSlot.module.css";

export default function LogisticsIconSlot({
  variant = "selector",
  iconSet,
  iconKey,
  resolveIcon,
}) {
  const Icon = getIconComponent(iconSet, iconKey, resolveIcon);

  if (!Icon) return null;

  const isPanel = variant === "panel";

  return (
    <span
      className={`${styles.iconWrap} ${
        isPanel ? styles.iconWrapPanel : styles.iconWrapSelector
      }`}
      aria-hidden="true"
    >
      <Icon
        className={`${styles.icon} ${
          isPanel ? styles.iconPanel : styles.iconSelector
        }`}
        focusable="false"
      />
    </span>
  );
}
