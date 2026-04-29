import styles from "./ModalityIconFrame.module.css";

import { getIconComponent, isValidText } from "./modalityDetailUtils.js";

export default function ModalityIconFrame({
  iconKey,
  className = "",
  size = "default",
}) {
  if (!isValidText(iconKey)) return null;

  const Icon = getIconComponent(iconKey);

  if (!Icon) return null;

  const sizeClassName = size === "sm" ? styles.iconFrameSmall : "";
  const frameClassName = `${styles.iconFrame} ${sizeClassName} ${className}`
    .trim()
    .replace(/\s+/g, " ");

  return (
    <span className={frameClassName} aria-hidden="true">
      <Icon className={styles.icon} focusable="false" />
    </span>
  );
}
