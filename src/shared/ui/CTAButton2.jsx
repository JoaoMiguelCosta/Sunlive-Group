// src/shared/components/CTAButton2/CTAButton2.jsx
import styles from "./CTAButton2.module.css";
import { PhoneIcon } from "../ui/icons"; // ajusta se o path for diferente

const ICON_MAP = {
  phone: PhoneIcon,
};

export default function CTAButton2({
  label,
  href,
  ariaLabel,
  icon, // ex: "phone"
  as = "a", // "a" | "button"
  type = "button", // para quando usares como <button>
  children,
  ...rest
}) {
  const IconComp =
    typeof icon === "string" && ICON_MAP[icon] ? ICON_MAP[icon] : null;

  const content = (
    <>
      {IconComp && (
        <span className={styles.icon} aria-hidden="true">
          <IconComp />
        </span>
      )}
      <span className={styles.label}>{label ?? children}</span>
    </>
  );

  if (as === "button") {
    return (
      <button
        type={type}
        className={styles.ctaButton}
        aria-label={ariaLabel || label}
        {...rest}
      >
        {content}
      </button>
    );
  }

  // default: <a>
  return (
    <a
      href={href}
      className={styles.ctaButton}
      aria-label={ariaLabel || label}
      {...rest}
    >
      {content}
    </a>
  );
}
