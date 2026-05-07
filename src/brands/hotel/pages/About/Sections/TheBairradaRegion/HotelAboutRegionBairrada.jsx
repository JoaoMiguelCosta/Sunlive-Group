import styles from "./HotelAboutRegionBairrada.module.css";

function getValidParagraphs(description) {
  if (!description) return [];

  if (typeof description.text === "string" && description.text.trim()) {
    return [description.text.trim()];
  }

  return Array.isArray(description.paragraphs)
    ? description.paragraphs.filter(
        (paragraph) =>
          typeof paragraph === "string" && paragraph.trim().length > 0,
      )
    : [];
}

function renderHighlightedText(text, highlightWord) {
  if (!highlightWord || !text.includes(highlightWord)) return text;

  const parts = text.split(highlightWord);

  return parts.map((part, index) => (
    <span key={`${part}-${index}`}>
      {part}
      {index < parts.length - 1 ? (
        <span className={styles.highlight}>{highlightWord}</span>
      ) : null}
    </span>
  ));
}

export default function HotelAboutRegionBairrada({ description }) {
  const paragraphs = getValidParagraphs(description);

  if (!paragraphs.length) return null;

  const align = description?.align === "left" ? "left" : "center";
  const highlightWord = description?.highlightWord ?? "";

  return (
    <div className={styles.wrap} data-align={align}>
      <div className={styles.panel}>
        <div className={styles.inner}>
          {paragraphs.map((paragraph) => (
            <p key={paragraph} className={styles.text}>
              {renderHighlightedText(paragraph, highlightWord)}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
