// src/shared/ui/CTAButton/index.jsx
import styles from "./CTAButton.module.css";
import { useBlink } from "../../shared/hooks/useBlink.js";

/**
 * CTAButton (shared)
 * Props:
 *  - cta: { href:string, label:string, ariaLabel?:string }
 *  - className?: string
 *  - blink?: boolean                 // default: true
 *  - compact?: "auto" | true | false // default: "auto"
 *  - Icon?: React.FC                 // opcional (ícone à esquerda)
 */
export default function CTAButton({
  cta,
  className = "",
  blink = true,
  compact = "auto",
  Icon,
}) {
  if (!cta?.href) return null;

  const isExternal = /^https?:\/\//i.test(cta.href);
  const ariaLabel = cta.ariaLabel || cta.label || "Contactar";

  // Blink: 2s por ciclo (1s OFF + 1s ON)
  const { on, bind } = useBlink({ cycleMs: 2000, disabled: !blink });

  const classes = [styles.button];
  if (blink) classes.push(styles["button--blink"]);
  if (className) classes.push(className);

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
      {Icon ? <Icon className={styles.icon} aria-hidden="true" /> : null}
      <span className={styles.label}>{cta.label}</span>
    </a>
  );
}
