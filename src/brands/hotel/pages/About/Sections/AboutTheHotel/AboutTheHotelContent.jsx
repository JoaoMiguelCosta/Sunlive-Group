// src/brands/hotel/components/About/AboutTheHotel/AboutTheHotelContent.jsx
import hotelBrand from "../../../../config/index.js";
import HotelHighlightPill from "../../../../shared/ui/HotelHighlightPill/HotelHighlightPill.jsx";
import styles from "./AboutTheHotelContent.module.css";

const BRAND_NAME = "Estalagem de Sangalhos – Sport & Nature Hotel";
const HIGHLIGHT_KEY = "Sport & Nature";

function renderHighlightedBrand(text) {
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

function renderHighlightedPillText(text) {
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

/**
 * AboutTheHotelContent
 * Coluna de texto + coluna de imagem + pill "Sport & Nature".
 */
export default function AboutTheHotelContent() {
  const aboutSection =
    hotelBrand?.pages?.about?.sections?.aboutTheHotel ?? null;

  if (!aboutSection) return null;

  const { text, media } = aboutSection;
  const paragraphs = text?.paragraphs ?? [];
  const highlightText = text?.highlightPill?.text ?? "";
  const imageSrc = media?.imageSrc ?? null;
  const imageAlt = media?.imageAlt ?? "";

  const firstParagraph = paragraphs[0] ?? null;
  const otherParagraphs = paragraphs.slice(1);

  return (
    <div className={styles.content}>
      <div className={styles.textCol}>
        {firstParagraph && (
          <p className={styles.paragraph}>
            {renderHighlightedBrand(firstParagraph)}
          </p>
        )}

        {otherParagraphs.map((paragraph, index) => (
          <p key={`${paragraph}-${index}`} className={styles.paragraph}>
            {paragraph}
          </p>
        ))}

        {highlightText && (
          <div className={styles.highlightWrap}>
            <HotelHighlightPill>
              {renderHighlightedPillText(highlightText)}
            </HotelHighlightPill>
          </div>
        )}
      </div>

      <div className={styles.mediaCol}>
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
        </div>
      </div>
    </div>
  );
}
