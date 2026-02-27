// src/brands/hotel/components/About/OurQualityCommitment/OurQualityCommitmentContent.jsx
import hotelBrand from "../../../../configHotel.jsx";
import HotelHighlightPill from "../../../../shared/ui/HotelHighlightPill/HotelHighlightPill.jsx";
import styles from "./OurQualityCommitmentContent.module.css";

/**
 * OurQualityCommitmentContent
 * Layout em 2 colunas:
 *  - Esquerda: texto + frase em pill
 *  - Direita: lista de compromissos
 */
export default function OurQualityCommitmentContent() {
  const section =
    hotelBrand?.pages?.sobre?.sections?.ourQualityCommitment ?? null;

  if (!section) return null;

  const { text, commitments } = section;
  const paragraphs = text?.paragraphs ?? [];
  const pillText = text?.highlightPill?.text ?? "";

  return (
    <div className={styles.content}>
      {/* Coluna de texto + pill */}
      <div className={styles.textCol}>
        <div className={styles.paragraphs}>
          {paragraphs.map((paragraph, index) => (
            <p key={index} className={styles.paragraph}>
              {paragraph}
            </p>
          ))}
        </div>

        {pillText && (
          <HotelHighlightPill className={styles.pill}>
            <span>{pillText}</span>
          </HotelHighlightPill>
        )}
      </div>

      {/* Coluna de compromissos */}
      <aside
        className={styles.commitmentsCol}
        aria-label="Comprometemo-nos com"
      >
        <h3 className={styles.commitmentsTitle}>Comprometemo-nos com:</h3>

        <ul className={styles.commitmentsList}>
          {commitments?.map((item) => (
            <li key={item.id} className={styles.commitmentItem}>
              <span className={styles.checkMark} aria-hidden="true">
                ✓
              </span>
              <span className={styles.commitmentText}>{item.text}</span>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}
