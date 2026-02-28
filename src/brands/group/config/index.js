// src/brands/group/config/index.js
import { groupHomePage } from "./pages/home.js";
import { groupLogosPage } from "./pages/logos.js";
import { makeGroupFooter } from "./footer.js";

export const groupBrand = {
  key: "group",
  pages: {
    home: groupHomePage,
    logos: groupLogosPage,
  },
  sections: {
    footer: makeGroupFooter({ contacts: groupHomePage.contacts }),
  },
};

export default groupBrand;
