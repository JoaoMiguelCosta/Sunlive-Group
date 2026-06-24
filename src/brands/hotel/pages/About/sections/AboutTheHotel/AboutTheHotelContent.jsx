import aboutTheHotel from "../../../../config/sections/about/aboutTheHotel.js";
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

function getValidParagraphs(paragraphs) {
  return Array.isArray(paragraphs)
    ? paragraphs.filter(
        (paragraph) =>
          typeof paragraph === "string" && paragraph.trim().length > 0,
      )
    : [];
}

export default function AboutTheHotelContent() {
  const aboutSection = aboutTheHotel;

  if (!aboutSection) return null;

  const paragraphs = getValidParagraphs(aboutSection?.text?.paragraphs);

  const highlightText = aboutSection?.text?.highlightPill?.text ?? "";
  const imageSrc = aboutSection?.media?.imageSrc ?? null;
  const imageAlt =
    aboutSection?.media?.imageAlt ??
    "Imagem da Estalagem de Sangalhos – Sport & Nature Hotel.";
  const mediaCaption = aboutSection?.media?.caption ?? "Sport & Nature Hotel";

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

          {otherParagraphs.map((paragraph) => (
            <p key={paragraph} className={styles.paragraph}>
              {paragraph}
            </p>
          ))}
        </div>

        {highlightText ? (
          <div className={styles.highlightWrap}>
            <HotelHighlightPill
              className={styles.highlightPill}
              cardClassName={styles.highlightCard}
              innerClassName={styles.highlightInner}
              textClassName={styles.highlightText}
            >
              {highlightPillText(highlightText)}
            </HotelHighlightPill>
          </div>
        ) : null}
      </div>

      <div className={styles.mediaCol}>
        <figure className={styles.mediaShell}>
          <div className={styles.mediaFrame}>
            {imageSrc ? (
              <img
                src={imageSrc}
                alt={imageAlt}
                className={styles.mediaImage}
                loading="lazy"
                decoding="async"
                draggable="false"
              />
            ) : (
              <div
                className={styles.mediaPlaceholder}
                role="img"
                aria-label="Imagem brevemente"
              >
                <span className={styles.mediaLabel}>Imagem brevemente</span>
              </div>
            )}

            <div className={styles.mediaOverlay} aria-hidden="true" />
            <div className={styles.mediaGlow} aria-hidden="true" />

            {mediaCaption ? (
              <figcaption className={styles.mediaCaption}>
                <span className={styles.mediaCaptionText}>{mediaCaption}</span>
              </figcaption>
            ) : null}
          </div>
        </figure>
      </div>
    </div>
  );
}
