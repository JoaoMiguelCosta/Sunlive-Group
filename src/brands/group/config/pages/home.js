import overview from "../sections/home/overview.js";
import people from "../sections/home/people.js";
import presence from "../sections/home/presence.js";
import contacts from "../sections/home/contacts.js";
import partners from "../sections/home/partners.js";
import book from "../sections/home/book.js";

const home = {
  id: "group-page",
  ui: {
    pageAriaLabel: "Sunlive Group",
  },
  sections: {
    overview,
    people,
    presence,
    contacts,
    partners,
    book,
  },
};

export default home;
