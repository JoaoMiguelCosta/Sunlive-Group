// src/brands/group/config/sections/contacts.js  (ajusta o path se necessário)
import {
  makeBusinessUnits,
  DEFAULT_GROUP_CONTACTS,
} from "../../../../../shared/config/BrandDefault.js";

import { GLOBAL_ICONS } from "../../../../../shared/config/icons/global.icons.js";
import { GLOBAL_FLAGS } from "../../../../../shared/config/icons/flags.icons.js";

export const contacts = {
  id: "contacts",

  groupHub: {
    title: "Sunlive Group",
    email: DEFAULT_GROUP_CONTACTS.email,
    phone: DEFAULT_GROUP_CONTACTS.phone,
    defaultOpen: false,
  },

  businessUnits: makeBusinessUnits(),

  icons: {
    Mail: GLOBAL_ICONS.MailIcon,
    Phone: GLOBAL_ICONS.PhoneIcon,
  },

  regionalOffices: [
    {
      key: "malta",
      label: "Malta",
      Flag: GLOBAL_FLAGS.malta,
      email: "malta@sunlive.pt",
      phone: "+351 916 626 270",
      defaultOpen: false,
    },
    {
      key: "qatar",
      label: "Qatar",
      Flag: GLOBAL_FLAGS.qatar,
      email: "qatar@sunlive.pt",
      phone: "+351 916 626 270",
      defaultOpen: false,
    },
    {
      key: "kuwait",
      label: "Kuwait",
      Flag: GLOBAL_FLAGS.kuwait,
      email: "kuwait@sunlive.pt",
      phone: "+96 599 255 116",
      defaultOpen: false,
    },
    {
      key: "lebanon",
      label: "Lebanon",
      Flag: GLOBAL_FLAGS.lebanon,
      email: "lebanon@sunlive.pt",
      phone: null,
      defaultOpen: false,
    },
    {
      key: "iraq",
      label: "Iraq",
      Flag: GLOBAL_FLAGS.iraq,
      email: "iraq@sunlive.pt",
      phone: null,
      defaultOpen: false,
    },
  ],
};

export default contacts;
