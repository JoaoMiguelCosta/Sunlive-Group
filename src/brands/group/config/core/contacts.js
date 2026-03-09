import { makeBusinessUnits } from "../../../../shared/config/BrandDefault.js";
import { FLAGS } from "./resolvedVisuals.js";

export const GROUP_REGIONAL_OFFICES = Object.freeze([
  {
    key: "malta",
    label: "Malta",
    flagKey: "malta",
    Flag: FLAGS.malta,
    email: null,
    phone: null,
  },
  {
    key: "qatar",
    label: "Qatar",
    flagKey: "qatar",
    Flag: FLAGS.qatar,
    email: null,
    phone: null,
  },
  {
    key: "kuwait",
    label: "Kuwait",
    flagKey: "kuwait",
    Flag: FLAGS.kuwait,
    email: null,
    phone: null,
  },
  {
    key: "lebanon",
    label: "Lebanon",
    flagKey: "lebanon",
    Flag: FLAGS.lebanon,
    email: null,
    phone: null,
  },
  {
    key: "iraq",
    label: "Iraq",
    flagKey: "iraq",
    Flag: FLAGS.iraq,
    email: null,
    phone: null,
  },
]);

export const GROUP_CONTACTS = Object.freeze({
  businessUnits: makeBusinessUnits(),
  regionalOffices: GROUP_REGIONAL_OFFICES,
});

export default GROUP_CONTACTS;
