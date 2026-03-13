export const location = {
  id: "info-location",
  headerLabel: "Localização",
  description:
    "A Estalagem de Sangalhos – Sport & Nature Hotel está situada no coração da Bairrada, em zona tranquila e com fácil acesso rodoviário.",

  details: {
    addressCard: {
      title: "Morada Completa",
      icon: null,
      lines: [
        "Rua da Estalagem, n.º 23",
        "Sangalhos – 3780-124 Anadia",
        "Portugal",
      ],
    },

    gpsCard: {
      title: "Coordenadas GPS",
      icon: null,
      latitudeLabel: "Latitude",
      latitude: "40.4668 N",
      longitudeLabel: "Longitude",
      longitude: "-8.4561 W",
    },

    contact: {
      label: "Contactar",
      icon: null,
      href: "tel:+351933600337",
      ariaLabel: "Ligar para a Estalagem de Sangalhos",
    },

    map: {
      badge: "Estalagem",
      badgeIcon: null,
      title: "Mapa",
      ctaLabel: "Clique para abrir mapa interativo",
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
