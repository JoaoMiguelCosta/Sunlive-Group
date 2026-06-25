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
        "Rua Narciso da Marça,",
        "3780-101 Sangalhos,",
        "Anadia – Aveiro, Portugal",
      ],
    },

    gpsCard: {
      title: "Coordenadas GPS",
      eyebrow: "Navegação direta",
      icon: null,
      latitudeLabel: "Latitude",
      latitude: "40.477198 N",
      longitudeLabel: "Longitude",
      longitude: "-8.459766 W",
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
      href: "https://maps.app.goo.gl/nTX2XFhr8hS9EK7eA",
      embedSrc:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1517.456813434538!2d-8.459624466853285!3d40.47717581216034!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2307ef312f4a0f%3A0xa68997fed9ddee50!2sEstalagem%20De%20Sangalhos!5e0!3m2!1spt-PT!2spt!4v1782404118896!5m2!1spt-PT!2spt",
      ariaLabel: "Mapa interativo da Estalagem de Sangalhos",
      googleMapsLabel: "Ver no Google Maps",
      googleMapsAriaLabel:
        "Abrir a localização da Estalagem de Sangalhos no Google Maps",
    },
  },
};

export default location;
