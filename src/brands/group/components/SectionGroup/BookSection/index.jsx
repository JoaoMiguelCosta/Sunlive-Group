import styles from "./BookSection.module.css";
import { book as bookConfig } from "../../../ConfigGroup.jsx";

/**
 * Booksection — CTA em formato “pill” que descarrega o PDF do Book.
 * O PDF deve estar em /public/books/... e a URL vem de pages/ConfigGroup.jsx (section 6 — book).
 * Usa BASE_URL para funcionar em sub-paths (ex.: GitHub Pages).
 */
export default function Booksection() {
  const cta = bookConfig?.cta ?? {
    label: "Open Book Sunlive Group",
    href: "books/sunlive-group-book.pdf",
    filename: "Sunlive-Group-Book.pdf",
    ariaLabel: "Download Sunlive Group Book (PDF)",
  };

  // Gera URL final respeitando o BASE_URL do Vite (p. ex., "/sunlive-group/")
  const rawHref = cta.href || "books/sunlive-group-book.pdf";
  const finalHref = rawHref.startsWith("http")
    ? rawHref
    : `${import.meta.env.BASE_URL}${rawHref}`.replace(/\/\/+/g, "/");

  return (
    <section
      id={bookConfig?.id ?? "book"}
      className={styles.sectionWrap}
      aria-label="Sunlive Group — Book"
    >
      <div className={styles.inner}>
        <a
          className={styles.button}
          href={finalHref}
          download={cta.filename}
          aria-label={cta.ariaLabel || cta.label}
          target="_blank" // ⬅️ nova aba
          rel="noopener" // ⬅️ segurança
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
