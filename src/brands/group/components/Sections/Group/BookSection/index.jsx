import styles from "./BookSection.module.css";
import { groupHomePage } from "../../../../config/pages/index.js";

export default function BookSection() {
  const bookConfig = groupHomePage?.sections?.book;

  const cta = bookConfig?.cta ?? {
    label: "Open Book Sunlive Group",
    href: "",
    filename: "Sunlive-Group-Book.pdf",
    ariaLabel: "Download Sunlive Group Book (PDF)",
  };

  if (!cta.href) return null;

  return (
    <section
      id={bookConfig?.id ?? "book"}
      className={styles.sectionWrap}
      aria-label="Sunlive Group — Book"
    >
      <div className={styles.inner}>
        <a
          className={styles.button}
          href={cta.href}
          download={cta.filename}
          aria-label={cta.ariaLabel || cta.label}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.label}>{cta.label}</span>
          <span className={styles.arrow} aria-hidden="true">
            ➜
          </span>
        </a>
      </div>
    </section>
  );
}
