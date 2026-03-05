import {
  ICONS,
  FLAGS,
  makeBusinessUnits,
  DEFAULT_GROUP_CONTACTS,
} from "../../../../../shared/config/BrandDefault.js";

export const contacts = {
  id: "contacts",

  groupHub: {
    title: "Sunlive Group",
    email: DEFAULT_GROUP_CONTACTS.email,
    phone: DEFAULT_GROUP_CONTACTS.phone,
    defaultOpen: false,
  },

  businessUnits: makeBusinessUnits(),
  icons: { Mail: ICONS.MailIcon, Phone: ICONS.PhoneIcon },

  regionalOffices: [
    {
      key: "malta",
      label: "Malta",
      Flag: FLAGS.malta,
      email: "malta@sunlive.pt",
      phone: "+351 916 626 270",
      defaultOpen: false,
    },
    {
      key: "qatar",
      label: "Qatar",
      Flag: FLAGS.qatar,
      email: "qatar@sunlive.pt",
      phone: "+351 916 626 270",
      defaultOpen: false,
    },
    {
      key: "kuwait",
      label: "Kuwait",
      Flag: FLAGS.kuwait,
      email: "kuwait@sunlive.pt",
      phone: "+96 599 255 116",
      defaultOpen: false,
    },
    {
      key: "lebanon",
      label: "Lebanon",
      Flag: FLAGS.lebanon,
      email: "lebanon@sunlive.pt",
      phone: null,
      defaultOpen: false,
    },
    {
      key: "iraq",
      label: "Iraq",
      Flag: FLAGS.iraq,
      email: "iraq@sunlive.pt",
      phone: null,
      defaultOpen: false,
    },
  ],
};

export default contacts;
