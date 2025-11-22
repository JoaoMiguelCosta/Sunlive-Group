// src/shared/components/Sports/ClosingPanel/SportsClosingPanel.jsx
import styles from "./SportsClosingPanel.module.css";
import CTAButton2 from "../../../ui/CTAButton2.jsx";

/**
 * Destaca 1+ palavras no body com o estilo dourado (.bodyAccent)
 * - accentWords: array de palavras a destacar
 */
function highlightAccentWords(line, accentWords) {
  if (!accentWords?.length || typeof line !== "string") return line;

  // escapar caracteres especiais de regex
  const escaped = accentWords.map((word) =>
    word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  );

  const regex = new RegExp(`(${escaped.join("|")})`, "g");
  const parts = line.split(regex);

  return parts.map((part, idx) => {
    // partes ímpares são os matches quando usas split com grupo capturado
    const isMatch = idx % 2 === 1;
    if (!isMatch) return part;

    return (
      <span key={idx} className={styles.bodyAccent}>
        {part}
      </span>
    );
  });
}

/**
 * Painel de fecho / transição para próximo passo (Sports)
 *
 * props:
 *  id,
 *  chipLabel,
 *  title,
 *  bodyLines: string[],
 *  accentWord?: string
 *  accentWords?: string[]
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
  accentWord,
  accentWords,
  className = "",
  ...rest
}) {
  const hasPrimary = !!primaryCta?.label;
  const hasSecondary = !!secondaryCta?.label;
  const hasBack = !!backCta?.label;

  const panelClasses = [styles.panel, className].filter(Boolean).join(" ");

  const hasAnyAction = hasPrimary || hasSecondary || hasBack;

  // normalizar: suportar accentWord (string) + accentWords (array)
  const accentList = [
    ...(accentWord ? [accentWord] : []),
    ...(Array.isArray(accentWords) ? accentWords.filter(Boolean) : []),
  ];

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
              {highlightAccentWords(line, accentList)}
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
