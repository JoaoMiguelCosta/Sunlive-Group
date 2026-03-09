import {
  overview,
  people,
  presence,
  contacts,
  partners,
  book,
} from "../sections/home/index.js";

import { GROUP_CONTACTS } from "../core/contacts.js";

const home = {
  id: "home",
  sections: {
    overview,
    people,
    presence,
    contacts: {
      ...contacts,
      ...GROUP_CONTACTS,
    },
    partners,
    book,
  },
};

export default home;
export { home as groupHomePage };
