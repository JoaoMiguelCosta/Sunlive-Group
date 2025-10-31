import styles from "./CTAButton.module.css";
import { useBlink } from "../../../../shared/hooks/useBlink.js";

/**
 * CTAButton — “Contactar”
 * Props:
 *  - cta: { href:string, label:string, ariaLabel?:string }
 *  - className?: string
 *  - blink?: boolean           // default: true
 *  - compact?: "auto" | true | false  // default: "auto"
 */
export default function CTAButton({
  cta,
  className = "",
  blink = true,
  compact = "auto",
}) {
  if (!cta?.href) return null;

  const isExternal = /^https?:\/\//i.test(cta.href);
  const classes = [styles.button];
  if (blink) classes.push(styles["button--blink"]);
  if (className) classes.push(className);

  const ariaLabel = cta.ariaLabel || cta.label || "Contactar";

  // Blink: 2s por ciclo (1s OFF + 1s ON)
  const { on, bind } = useBlink({ cycleMs: 2000, disabled: !blink });

  return (
    <a
      href={cta.href}
      aria-label={ariaLabel}
      className={classes.join(" ")}
      data-compact={compact}
      data-on={on ? "true" : "false"}
      {...bind}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <span className={styles.label}>{cta.label}</span>
    </a>
  );
}
