import { makeBook } from "../../../../../shared/config/BrandDefault.js";
import { GROUP_BOOKS } from "../../core/books.js";

const groupBook = GROUP_BOOKS.company;

const bookSectionConfig = makeBook({
  id: groupBook.id,
  label: "Open Book Sunlive Group",
  href: groupBook.href,
  filename: "Sunlive-Group-Book.pdf",
  ariaLabel: "Download Sunlive Group Book (PDF)",
  meta: {
    filetype: groupBook.type,
  },
});

export const book = {
  ...bookSectionConfig,
  id: "book",
};

export default book;
