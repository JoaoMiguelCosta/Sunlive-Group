import { makeBusinessUnits } from "../../../../shared/config/index.js";
import { ICONS, FLAGS } from "./resolvedVisuals.js";

const GROUP_HUB_CONTACTS = Object.freeze({
  email: "lucas@sunlive.pt",
  phone: "+351 933 600 364",
});

export const BUSINESS_UNIT_CONTACTS_DEFAULT = Object.freeze({
  travel: {
    email: "travel@sunlive.pt",
    phone: "+351 935 630 798",
  },
  business: {
    email: "lucas@sunlive.pt",
    phone: "+351 933 600 362",
  },
  sports: {
    email: "lucas@sunlive.pt",
    phone: "+351 933 600 362",
  },
  international: {
    email: "j.guilherme@sunlive.pt",
    phone: "+351 935 630 798",
  },
  hotel: {
    email: "hotel@sunlive.pt",
    phone: "+351 933 600 337",
  },
  commercial: {
    email: "org@sunlive.pt",
    phone: "+351 913 093 702",
  },
});

export const GROUP_BUSINESS_UNITS = Object.freeze(
  makeBusinessUnits([
    {
      key: "travel",
      slug: "viagens",
      anchorId: "unidade-viagens",
      label: "Travel",
      email: BUSINESS_UNIT_CONTACTS_DEFAULT.travel.email,
      phone: BUSINESS_UNIT_CONTACTS_DEFAULT.travel.phone,
      defaultOpen: false,
    },
    {
      key: "business",
      slug: "negocios",
      anchorId: "unidade-negocios",
      label: "Business",
      email: BUSINESS_UNIT_CONTACTS_DEFAULT.business.email,
      phone: BUSINESS_UNIT_CONTACTS_DEFAULT.business.phone,
      defaultOpen: false,
    },
    {
      key: "sports",
      slug: "desporto",
      anchorId: "unidade-desporto",
      label: "Sports",
      email: BUSINESS_UNIT_CONTACTS_DEFAULT.sports.email,
      phone: BUSINESS_UNIT_CONTACTS_DEFAULT.sports.phone,
      defaultOpen: false,
    },
    {
      key: "international",
      slug: "internacional",
      anchorId: "unidade-internacional",
      label: "International",
      email: BUSINESS_UNIT_CONTACTS_DEFAULT.international.email,
      phone: BUSINESS_UNIT_CONTACTS_DEFAULT.international.phone,
      defaultOpen: false,
    },
    {
      key: "hotel",
      slug: "hotel",
      anchorId: "unidade-hotel",
      label: "Hotel",
      email: BUSINESS_UNIT_CONTACTS_DEFAULT.hotel.email,
      phone: BUSINESS_UNIT_CONTACTS_DEFAULT.hotel.phone,
      defaultOpen: false,
    },
    {
      key: "commercial",
      slug: "comercial",
      anchorId: "unidade-comercial",
      label: "Commercial",
      email: BUSINESS_UNIT_CONTACTS_DEFAULT.commercial.email,
      phone: BUSINESS_UNIT_CONTACTS_DEFAULT.commercial.phone,
      defaultOpen: false,
    },
  ]),
);

export const GROUP_REGIONAL_OFFICES = Object.freeze([
  {
    key: "malta",
    slug: "malta",
    anchorId: "pais-malta",
    label: "Malta",
    flagKey: "malta",
    Flag: FLAGS.malta,
    email: "malta@sunlive.pt",
    phone: "+351 916 626 270",
    defaultOpen: false,
  },
  {
    key: "qatar",
    slug: "catar",
    anchorId: "pais-catar",
    label: "Catar",
    flagKey: "qatar",
    Flag: FLAGS.qatar,
    email: "qatar@sunlive.pt",
    phone: "+351 916 626 270",
    defaultOpen: false,
  },
  {
    key: "kuwait",
    slug: "kuwait",
    anchorId: "pais-kuwait",
    label: "Kuwait",
    flagKey: "kuwait",
    Flag: FLAGS.kuwait,
    email: "kuwait@sunlive.pt",
    phone: "+96 599 255 116",
    defaultOpen: false,
  },
  {
    key: "lebanon",
    slug: "libano",
    anchorId: "pais-libano",
    label: "Líbano",
    flagKey: "lebanon",
    Flag: FLAGS.lebanon,
    email: "lebanon@sunlive.pt",
    phone: null,
    defaultOpen: false,
  },
  {
    key: "iraq",
    slug: "iraque",
    anchorId: "pais-iraque",
    label: "Iraque",
    flagKey: "iraq",
    Flag: FLAGS.iraq,
    email: "iraq@sunlive.pt",
    phone: null,
    defaultOpen: false,
  },
]);

export const GROUP_CONTACTS = Object.freeze({
  id: "contacts",

  groupHub: {
    title: "Sunlive Group",
    slug: "grupo",
    anchorId: "unidade-grupo",
    email: GROUP_HUB_CONTACTS.email,
    phone: GROUP_HUB_CONTACTS.phone,
    defaultOpen: false,
  },

  businessUnits: GROUP_BUSINESS_UNITS,

  icons: {
    Mail: ICONS.MailIcon,
    Phone: ICONS.PhoneIcon,
  },

  regionalOffices: GROUP_REGIONAL_OFFICES,
});

export default GROUP_CONTACTS;
