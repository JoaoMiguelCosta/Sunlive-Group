import curiaImg from "../../assets/PartnerHotels/curia.png";
import pateiraImg from "../../assets/PartnerHotels/pateira.png";
import estanciaImg from "../../assets/PartnerHotels/estancia.png";
import goldImg from "../../assets/PartnerHotels/gold.png";
import grandImg from "../../assets/PartnerHotels/grand.png";

const partnerHotels = {
  id: "parceiros-hoteis",
  headline: {
    eyebrow: "Hotéis Parceiros Sunlive Travel",
    title: "Fique com Conforto",
    lead:
      "Em parceria com hotéis selecionados, dispomos de experiências de viagem completas incluindo alojamento de alta qualidade, conforto e excelentes localizações.\n\n" +
      "Combine transporte, tours e alojamento num único pacote personalizado com a Sunlive Travel.",
  },
  hotels: [
    {
      key: "curia",
      name: "Hotel Termas da Curia",
      badge: "Curia",
      summary:
        "Rodeado por natureza: spa, jardins, lago e experiências termais num ambiente relaxante.",
      href: "https://www.termasdacuria.com/",
      picture: { src: curiaImg, alt: "Fachada do Hotel Termas da Curia" },
    },
    {
      key: "pateira",
      name: "Estalagem da Pateira",
      badge: "Fermentelos",
      summary:
        "Junto à Lagoa da Pateira: belas vistas e uma estadia calma em contacto com a natureza.",
      href: "https://pateira.com/",
      picture: {
        src: pateiraImg,
        alt: "Vista para a lagoa e Estalagem da Pateira",
      },
    },
    {
      key: "estancia",
      name: "Residencial Estância",
      badge: "Oliveira do Bairro",
      summary:
        "Ambiente familiar e tranquilo — simplicidade, conforto e boa localização.",
      href: "https://www.facebook.com/residencial.estancia/?locale=pt_PT",
      picture: {
        src: estanciaImg,
        alt: "Residencial Estância em Oliveira do Bairro",
      },
    },
    {
      key: "gold",
      name: "In Gold Hotel & Spa",
      badge: "Águeda",
      summary:
        "Hotel moderno com spa, piscina e restaurante — ideal para lazer ou negócios.",
      href: "https://www.ingoldhotel.pt/pt/Menu/Home.aspx",
      picture: { src: goldImg, alt: "In Gold Hotel & Spa em Águeda" },
    },
    {
      key: "grand",
      name: "Grand Hotel de Luso",
      badge: "Luso",
      summary:
        "Conforto e tradição junto às Termas do Luso, com spa, piscina olímpica e acesso direto às termas.",
      href: "https://www.hoteluso.com/pt/",
      picture: { src: grandImg, alt: "Grand Hotel de Luso à noite" },
    },
  ],
  cta: {
    label: "Contactar",
    href: "#contactar",
    ariaLabel: "Contactar Sunlive Travel",
    iconKey: "phone",
  },
};

export default partnerHotels;
