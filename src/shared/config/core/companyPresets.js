export const SUNLIVE_HQ_LOCATION = Object.freeze({
  title: "Localização",
  addressLines: [
    "Rua Narciso da Marça, 3780-101",
    "Sangalhos, Anadia – Aveiro",
  ],
  mapHref:
    "https://www.google.com/maps/search/?api=1&query=Rua%20Narciso%20da%20Mar%C3%A7a%203780-101%20Sangalhos",
});

export const CONTACTS_SECTION_TITLE = "Contactos";
export const LOCATION_SECTION_TITLE = "Localização";
export const SOCIALS_SECTION_TITLE = "Redes Sociais";

export const EMPTY_CONTACTS = Object.freeze({
  title: CONTACTS_SECTION_TITLE,
  email: { label: null, href: undefined, ariaLabel: undefined },
  phone: { label: null, href: undefined, ariaLabel: undefined },
  extraPhones: [],
});
