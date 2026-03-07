import { makeBook } from "../../../../../shared/config/BrandDefault.js";

export const book = {
  id: "book",
  ...makeBook({
    label: "Open Book Sunlive Group",
    href: "/books/sunlive-group-book.pdf",
    filename: "Sunlive-Group-Book.pdf",
    ariaLabel: "Download Sunlive Group Book (PDF)",
  }),
};

export default book;


