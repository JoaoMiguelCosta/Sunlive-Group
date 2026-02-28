// src/brands/travel/config/nav.js
export const TRAVEL_NAV = [
  { key: "logistica", label: "Logística", href: "#logistica" },
  {
    key: "destinos",
    label: "Destinos",
    submenu: [
      {
        key: "destinos-nacionais",
        label: "Nacionais",
        href: "#destinos-nacionais",
      },
      {
        key: "destinos-internacionais",
        label: "Internacionais",
        href: "#destinos-internacionais",
      },
    ],
  },
  {
    key: "parceiros",
    label: "Parceiros",
    submenu: [
      { key: "hoteis", label: "Hotéis", href: "#parceiros-hoteis" },
      { key: "viagens", label: "Viagens", href: "#parceiros-viagens" },
    ],
  },
  { key: "testemunhos", label: "Testemunhos", href: "#testemunhos" },
];

export default TRAVEL_NAV;
