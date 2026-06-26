import styles from "./BookSection.module.css";

import homePage from "../../../../config/pages/home.js";
const bookSection = homePage.sections.book;

function isValidText(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function isValidObject(value) {
  return value && typeof value === "object" && !Array.isArray(value);
}

function resolveCta(bookConfig) {
  if (!isValidObject(bookConfig)) return null;

  if (isValidObject(bookConfig.cta)) {
    return bookConfig.cta;
  }

  return bookConfig;
}

export default function BookSection() {
  const bookConfig = bookSection;
  const cta = resolveCta(bookConfig);

  if (!cta) return null;

  const sectionId = isValidText(bookConfig?.id) ? bookConfig.id : "book";

  const label = isValidText(cta.label)
    ? cta.label
    : "Download Book Sunlive Group";

  const href = isValidText(cta.href) ? cta.href : "";

  const filename = isValidText(cta.filename)
    ? cta.filename
    : "Sunlive-Group-Book.pdf";

  const ariaLabel = isValidText(cta.ariaLabel)
    ? cta.ariaLabel
    : `Descarregar ${label}`;

  if (!href) return null;

  return (
    <section
      id={sectionId}
      className={styles.section}
      aria-label="Sunlive Group — Book"
    >
      <a
        className={styles.button}
        href={href}
        download={filename}
        aria-label={ariaLabel}
      >
        <span className={styles.label}>{label}</span>

        <span className={styles.arrow} aria-hidden="true">
          ⬇
        </span>
      </a>
    </section>
  );
}
