import acaLogo from "../../../assets/Academies/aca.png";
import basketLogo from "../../../assets/Academies/basket.png";
import footLogo from "../../../assets/Academies/foot.png";
import karateLogo from "../../../assets/Academies/karate.png";

const academiesCards = [
  {
    key: "cycling-academy",
    title: "Anadia Cycling Academy (ACA)",
    logo: { src: acaLogo, alt: "Logótipo Anadia Cycling Academy (ACA)" },
    description:
      "Academia contínua de ciclismo para jovens atletas com treinos técnicos e alojamento.",
    instagram: null,
    facebook: null,
    more: null,
    book: { label: "Abrir Book", href: "/books/cycling-academie.pdf" },
  },
  {
    key: "karate-academy",
    title: "Sunlive Karate Academy (SKA)",
    logo: { src: karateLogo, alt: "Logótipo Sunlive Karate Academy (SKA)" },
    description:
      "Academia contínua de karaté para jovens atletas com treinos técnicos e alojamento.",
    instagram: { href: "https://www.instagram.com/sunlivekarateacademy/" },
    facebook: { href: "https://www.facebook.com/sunlivekarateacademy/" },
    more: { label: "Ver mais", href: "https://karate.sunlive.pt/" },
    book: null,
  },
  {
    key: "basket-academy",
    title: "Academia Basquetebol Sunlive",
    logo: { src: basketLogo, alt: "Logótipo Academia Basquetebol Sunlive" },
    description:
      "Academia contínua de basquetebol para jovens atletas, com treinos especializados, desenvolvimento físico e técnico, e alojamento incluído.",
    instagram: { href: "https://www.instagram.com/sunlivebball/" },
    facebook: { href: "https://www.facebook.com/SunliveBball/" },
    more: { label: "Ver mais", href: "https://www.basketball.sunlive.pt/" },
    book: null,
  },
  {
    key: "pro-football-academy",
    title: "Pro Football Academy",
    logo: { src: footLogo, alt: "Logótipo Pro Football Academy" },
    description:
      "Academia contínua de futebol para jovens talentos, com treinos técnicos, táticos e físicos, inserida num ambiente escolar e com alojamento.",
    instagram: { href: "https://www.instagram.com/profootballportugal/" },
    facebook: {
      href: "https://www.facebook.com/profootballportugal/mentions/?_rdr",
    },
    more: {
      label: "Ver mais",
      href: "https://www.pro-footballacademyportugal.com/our-academy",
    },
    book: { label: "Abrir Book", href: "/books/football-academie.pdf" },
  },
];

export default academiesCards;
