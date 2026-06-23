import SPORTS_BOOKS from "../../config/core/books.js";

export function openEducationBook(bookKey) {
  const book = SPORTS_BOOKS?.[bookKey];
  if (!book?.href) {
    console.error(`Book não encontrado para a key: ${bookKey}`);
    return;
  }
  window.open(book.href, "_blank", "noopener,noreferrer");
}
