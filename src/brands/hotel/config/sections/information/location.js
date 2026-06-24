import { HOTEL_COMPANY } from "../../core/company.js";

export const location = {
  id: "informacoes-localizacao",
  headerLabel: "Localização",
  description:
    "A Estalagem de Sangalhos – Sport & Nature Hotel está situada no coração da Bairrada, em zona tranquila e com fácil acesso rodoviário.",

  backgroundMedia: {
    imageSrc: null,
    imageAlt: "",
  },

  details: {
    quickAccessPills: [
      { id: "bairrada", label: "Coração da Bairrada" },
      { id: "quiet-area", label: "Zona tranquila" },
      { id: "road-access", label: "Fácil acesso rodoviário" },
    ],

    addressCard: {
      title: "Morada Completa",
      eyebrow: "Referência local",
      icon: null,
      lines: [
        "Rua da Estalagem, n.º 23",
        "Sangalhos – 3780-124 Anadia",
        "Portugal",
      ],
    },

    gpsCard: {
      title: "Coordenadas GPS",
      eyebrow: "Navegação direta",
      icon: null,
      latitudeLabel: "Latitude",
      latitude: "40.4668 N",
      longitudeLabel: "Longitude",
      longitude: "-8.4561 W",
    },

    contact: {
      label: "Contactar",
      icon: null,
      href: HOTEL_COMPANY.contacts.phone.href,
      ariaLabel: "Ligar para a Estalagem de Sangalhos",
    },

    map: {
      badge: "Estalagem",
      badgeIcon: null,
      title: "Mapa Interativo",
      supportingText:
        "Consulte a localização exata e abra direções imediatas no Google Maps.",
      ctaLabel: "Abrir no Google Maps",
      ctaIcon: null,
      href: "https://maps.app.goo.gl/pvkGhuMEs4Gwaeif9",
      embedSrc:
        "https://www.google.com/maps?q=40.4668,-8.4561&z=16&output=embed",
      ariaLabel: "Abrir localização da Estalagem de Sangalhos no Google Maps",
      googleMapsLabel: "Ver no Google Maps",
      googleMapsAriaLabel: "Abrir Google Maps da Estalagem de Sangalhos",
    },
  },
};

export default location;
