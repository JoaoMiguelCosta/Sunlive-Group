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

  return (
    <div className={styles.content}>
      <div className={styles.textCol}>
        <div className={styles.paragraphs}>
          {paragraphs.map((paragraph, index) => (
            <p key={`${index}-${paragraph}`} className={styles.paragraph}>
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
        aria-label="Comprometemo-nos com"
      >
        <div className={styles.commitmentsInner}>
          <h3 className={styles.commitmentsTitle}>Comprometemo-nos com:</h3>

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