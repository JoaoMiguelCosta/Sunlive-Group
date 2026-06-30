import { makeBook } from "../../../../../shared/config/index.js";
import { GROUP_BOOKS } from "../../core/books.js";

const groupBook = GROUP_BOOKS.company;

const book = makeBook({
  id: "book",
  label: "Abrir livro Sunlive Group",
  href: groupBook.href,
  filename: groupBook.filename,
  ariaLabel: "Descarregar o livro da Sunlive Group em formato PDF",
  meta: {
    filetype: groupBook.type,
  },
});

export default book;
