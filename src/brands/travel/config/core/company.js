export const TRAVEL_COMPANY = Object.freeze({
  key: "travel",
  brandName: "Sunlive Travel",
  tagline: "Transformando viagens em experiências memoráveis.",
  aboutIntro:
    "Na Sunlive Travel, acreditamos que viajar é mais do que deslocar-se — é criar ligações, conhecer culturas e viver experiências com significado.",
  about:
    "Na Sunlive Travel, acreditamos que viajar é mais do que deslocar-se — é criar ligações, conhecer culturas e viver experiências com significado.\n\n" +
    "Comprometemo-nos a oferecer soluções de mobilidade e alojamento com qualidade, conforto e segurança.",
  location: {
    title: "Localização",
    addressLines: [
      "Rua Narciso da Marça, 3780-101",
      "Sangalhos, Anadia – Aveiro",
    ],
    mapHref:
      "https://www.google.com/maps/search/?api=1&query=Rua%20Narciso%20da%20Mar%C3%A7a%203780-101%20Sangalhos",
  },
  contacts: {
    title: "Contactos",
    email: {
      href: "mailto:travel@sunlive.pt",
      label: "travel@sunlive.pt",
      ariaLabel: "Enviar email para a Sunlive Travel",
    },
    phone: {
      href: "tel:+351935630798",
      label: "+351 935 630 798",
      ariaLabel: "Ligar para a Sunlive Travel",
    },
  },
});

export const TRAVEL_CONTACT_CHANNELS = Object.freeze([
  {
    key: "phone",
    iconKey: "phone",
    label: TRAVEL_COMPANY.contacts.phone.label,
    href: TRAVEL_COMPANY.contacts.phone.href,
    ariaLabel: TRAVEL_COMPANY.contacts.phone.ariaLabel,
  },
  {
    key: "mail",
    iconKey: "mail",
    label: TRAVEL_COMPANY.contacts.email.label,
    href: TRAVEL_COMPANY.contacts.email.href,
    ariaLabel: TRAVEL_COMPANY.contacts.email.ariaLabel,
  },
]);
