import { groupHomePage, groupLogosPage } from "./pages/index.js";
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
