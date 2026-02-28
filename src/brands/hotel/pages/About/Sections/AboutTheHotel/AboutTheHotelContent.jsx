// src/brands/hotel/components/About/AboutTheHotel/AboutTheHotelContent.jsx
import hotelBrand from "../../../../config/index.js";
import HotelHighlightPill from "../../../../shared/ui/HotelHighlightPill/HotelHighlightPill.jsx";
import styles from "./AboutTheHotelContent.module.css";

const BRAND_NAME = "Estalagem de Sangalhos – Sport & Nature Hotel";

/**
 * AboutTheHotelContent
 * Coluna de texto + coluna de imagem + pill "Sport & Nature".
 */
export default function AboutTheHotelContent() {
  const aboutSection =
    hotelBrand?.pages?.sobre?.sections?.aboutTheHotel ?? null;

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
      {/* COLUNA TEXTO */}
      <div className={styles.textCol}>
        {firstParagraph && (
          <p className={styles.paragraph}>
            {firstParagraph.includes(BRAND_NAME)
              ? (() => {
                  const [before, after] = firstParagraph.split(BRAND_NAME);
                  return (
                    <>
                      {before}
                      <span className={styles.brandName}>{BRAND_NAME}</span>
                      {after}
                    </>
                  );
                })()
              : firstParagraph}
          </p>
        )}

        {otherParagraphs.map((p, idx) => (
          <p key={idx} className={styles.paragraph}>
            {p}
          </p>
        ))}

        {highlightText && (
          <div className={styles.highlightWrap}>
            <HotelHighlightPill>
              {highlightText.includes("Sport & Nature")
                ? (() => {
                    const key = "Sport & Nature";
                    const [before, after] = highlightText.split(key);
                    return (
                      <>
                        {before}
                        <strong>{key}</strong>
                        {after}
                      </>
                    );
                  })()
                : highlightText}
            </HotelHighlightPill>
          </div>
        )}
      </div>

      {/* COLUNA MEDIA / FOTO */}
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
