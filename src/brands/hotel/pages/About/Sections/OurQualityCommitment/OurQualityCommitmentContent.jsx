import hotelBrand from "../../../../config/index.js";
import HotelHighlightPill from "../../../../shared/ui/HotelHighlightPill/HotelHighlightPill.jsx";
import styles from "./OurQualityCommitmentContent.module.css";

/**
 * OurQualityCommitmentContent
 * Layout:
 * - esquerda: texto editorial + frase de destaque
 * - direita: painel premium com compromissos
 */
export default function OurQualityCommitmentContent() {
  const section =
    hotelBrand?.pages?.about?.sections?.ourQualityCommitment ?? null;

  if (!section) return null;

  const paragraphs = Array.isArray(section?.text?.paragraphs)
    ? section.text.paragraphs
    : [];

  const pillText = section?.text?.highlightPill?.text ?? "";

  const commitmentItems = Array.isArray(section?.commitments)
    ? section.commitments
    : [];

  const commitmentsPanel = section?.commitmentsPanel ?? null;

  const panelAriaLabel = commitmentsPanel?.ariaLabel ?? "";
  const panelKicker = commitmentsPanel?.kicker ?? "";
  const panelTitle = commitmentsPanel?.title ?? "";

  const [leadParagraph, ...otherParagraphs] = paragraphs;

  return (
    <div className={styles.content}>
      <div className={styles.textCol}>
        <div className={styles.paragraphs}>
          {leadParagraph ? (
            <p className={`${styles.paragraph} ${styles.lead}`}>
              {leadParagraph}
            </p>
          ) : null}

          {otherParagraphs.map((paragraph, index) => (
            <p
              key={`${index}-${paragraph}`}
              className={`${styles.paragraph} ${
                index === 0 ? styles.paragraphSecondary : ""
              }`}
            >
              {paragraph}
            </p>
          ))}
        </div>

        {pillText ? (
          <div className={styles.pillWrap}>
            <HotelHighlightPill className={styles.pill}>
              {pillText}
            </HotelHighlightPill>
          </div>
        ) : null}
      </div>

      <aside
        className={styles.commitmentsCol}
        aria-label={panelAriaLabel || undefined}
      >
        <div className={styles.commitmentsInner}>
          <div className={styles.panelGlow} aria-hidden="true" />

          {(panelKicker || panelTitle) && (
            <header className={styles.commitmentsHeader}>
              {panelKicker ? (
                <span className={styles.kicker}>{panelKicker}</span>
              ) : null}

              {panelTitle ? (
                <h3 className={styles.commitmentsTitle}>{panelTitle}</h3>
              ) : null}
            </header>
          )}

          <ul className={styles.commitmentsList}>
            {commitmentItems.map((item, index) => (
              <li
                key={item.id ?? `${item.text}-${index}`}
                className={styles.commitmentItem}
              >
                <span className={styles.checkMark} aria-hidden="true">
                  ✓
                </span>

                <span className={styles.commitmentText}>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
}
