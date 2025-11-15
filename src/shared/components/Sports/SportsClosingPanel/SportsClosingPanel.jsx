// src/shared/components/Sports/ClosingPanel/SportsClosingPanel.jsx
import styles from "./SportsClosingPanel.module.css";
import CTAButton2 from "../../../ui/CTAButton2.jsx";

/**
 * Painel de fecho / transição para próximo passo (Sports)
 *
 * props:
 *  id,
 *  chipLabel,
 *  title,
 *  bodyLines: string[],
 *  primaryCta?: { label, href, ariaLabel?, icon? },
 *  secondaryCta?: { label, href, ariaLabel? },
 *  backCta?: { label, href, ariaLabel? }
 */
export default function SportsClosingPanel({
  id,
  chipLabel,
  title,
  bodyLines,
  primaryCta,
  secondaryCta,
  backCta,
  className = "",
  ...rest
}) {
  const hasPrimary = !!primaryCta?.label;
  const hasSecondary = !!secondaryCta?.label;
  const hasBack = !!backCta?.label;

  const panelClasses = [styles.panel, className].filter(Boolean).join(" ");

  const hasAnyAction = hasPrimary || hasSecondary || hasBack;

  return (
    <section
      id={id}
      className={panelClasses}
      aria-label="Próximo passo — Sunlive Sports"
      {...rest}
    >
      {chipLabel && <div className={styles.chip}>{chipLabel}</div>}

      {title && <h2 className={styles.title}>{title}</h2>}

      {bodyLines && bodyLines.length > 0 && (
        <div className={styles.body}>
          {bodyLines.map((line, idx) => (
            <p key={idx} className={styles.bodyLine}>
              {line}
            </p>
          ))}
        </div>
      )}

      {hasAnyAction && (
        <div className={styles.actions}>
          {hasBack && (
            <a
              href={backCta.href}
              className={`${styles.secondary} ${styles.back}`}
              aria-label={backCta.ariaLabel || backCta.label}
            >
              <span aria-hidden="true">←</span> {backCta.label}
            </a>
          )}

          {hasPrimary && (
            <CTAButton2
              label={primaryCta.label}
              href={primaryCta.href}
              ariaLabel={primaryCta.ariaLabel}
              icon={primaryCta.icon}
            />
          )}

          {hasSecondary && (
            <a
              href={secondaryCta.href}
              className={styles.secondary}
              aria-label={secondaryCta.ariaLabel || secondaryCta.label}
            >
              {secondaryCta.label} <span aria-hidden="true">→</span>
            </a>
          )}
        </div>
      )}
    </section>
  );
}
