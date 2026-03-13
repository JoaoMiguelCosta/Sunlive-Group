import hotelBrand from "../../../../config/index.js";
import HotelHighlightPill from "../../../../shared/ui/HotelHighlightPill/HotelHighlightPill.jsx";
import styles from "./AboutTheHotelContent.module.css";

const BRAND_NAME = "Estalagem de Sangalhos – Sport & Nature Hotel";
const HIGHLIGHT_KEY = "Sport & Nature";

function highlightBrandName(text) {
  if (!text || !text.includes(BRAND_NAME)) return text;

  const [before, after] = text.split(BRAND_NAME);

  return (
    <>
      {before}
      <span className={styles.brandName}>{BRAND_NAME}</span>
      {after}
    </>
  );
}

function highlightPillText(text) {
  if (!text || !text.includes(HIGHLIGHT_KEY)) return text;

  const [before, after] = text.split(HIGHLIGHT_KEY);

  return (
    <>
      {before}
      <strong>{HIGHLIGHT_KEY}</strong>
      {after}
    </>
  );
}

export default function AboutTheHotelContent() {
  const aboutSection =
    hotelBrand?.pages?.about?.sections?.aboutTheHotel ?? null;

  if (!aboutSection) return null;

  const { text, media } = aboutSection;

  const paragraphs = Array.isArray(text?.paragraphs) ? text.paragraphs : [];
  const highlightText = text?.highlightPill?.text ?? "";
  const imageSrc = media?.imageSrc ?? null;
  const imageAlt = media?.imageAlt ?? "Imagem da Estalagem de Sangalhos";

  const [firstParagraph, ...otherParagraphs] = paragraphs;

  return (
    <div className={styles.content}>
      <div className={styles.textCol}>
        <div className={styles.copy}>
          {firstParagraph ? (
            <p className={`${styles.paragraph} ${styles.lead}`}>
              {highlightBrandName(firstParagraph)}
            </p>
          ) : null}

          {otherParagraphs.map((paragraph, index) => (
            <p key={`${index}-${paragraph}`} className={styles.paragraph}>
              {paragraph}
            </p>
          ))}
        </div>

        {highlightText ? (
          <div className={styles.highlightWrap}>
            <HotelHighlightPill className={styles.highlightPill}>
              {highlightPillText(highlightText)}
            </HotelHighlightPill>
          </div>
        ) : null}
      </div>

      <div className={styles.mediaCol}>
        <div className={styles.mediaShell}>
          <div className={styles.mediaFrame}>
            {imageSrc ? (
              <img
                src={imageSrc}
                alt={imageAlt}
                className={styles.mediaImage}
                loading="lazy"
              />
            ) : (
              <div className={styles.mediaPlaceholder}>
                <span className={styles.mediaLabel}>Imagem brevemente</span>
              </div>
            )}

            <div className={styles.mediaOverlay} aria-hidden="true" />
          </div>
        </div>
      </div>
    </div>
  );
}
