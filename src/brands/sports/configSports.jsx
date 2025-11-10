// src/brands/sports/pages/configSports.jsx
import {
  IMG_COMMON,
  LANG_DEFAULT,
  makeBackLink,
  withSocialIcons,
  makePoliciesBar,
  makeFooterInfoHeader,
  ICONS,
} from "../../shared/config/BrandDefault.jsx";

/* ===== Redes sociais (Sports) ===== */
const SPORTS_SOCIALS = withSocialIcons([
  {
    key: "fb",
    label: "Facebook",
    href: "https://www.facebook.com/sunlivesports/?locale=pt_PT",
  },
  {
    key: "ig",
    label: "Instagram",
    href: "https://www.instagram.com/sunlivesports/",
  },
]);

/* ===== Header utilitário ===== */
const header = {
  backLink: makeBackLink({
    href: "/sunlive-group",
    label: "Voltar ao Sunlive Group",
  }),
  lang: LANG_DEFAULT,
  socials: SPORTS_SOCIALS,
};

/* ===== Home — Gateway ===== */
const gateway = [
  {
    key: "training-camps",
    label: "Training Camps",
    href: "/sunlive-group/sports/training-camps",
  },
  {
    key: "academies",
    label: "Academias",
    href: "/sunlive-group/sports/academies",
  },
  { key: "events", label: "Eventos", href: "/sunlive-group/sports/events" },
  {
    key: "sunlive-athletes",
    label: "Atletas Sunlive",
    href: "/sunlive-group/sports/sunlive-athletes",
  },
  {
    key: "specialised-services",
    label: "Serviços Especializados",
    href: "/sunlive-group/sports/specialised-services",
  },
  {
    key: "education",
    label: "Educação",
    href: "/sunlive-group/sports/education",
  },
  {
    key: "leisure-sports-tourism",
    label: "Turismo Desportivo",
    href: "/sunlive-group/sports/leisure-sports-tourism",
  },
  {
    key: "sports-disciplines",
    label: "Modalidades",
    href: "/sunlive-group/sports/sports-disciplines",
  },
  {
    key: "infrastructures",
    label: "Infraestruturas",
    href: "/sunlive-group/sports/infrastructures",
  },
  {
    key: "logistics",
    label: "Logística",
    href: "/sunlive-group/sports/logistics",
  },
  {
    key: "consultancy",
    label: "Consultoria",
    href: "/sunlive-group/sports/consultancy",
  },
  { key: "contact", label: "Contactar", href: "#contactar", variant: "cta" },
];

/* ===== Links Rápidos (chips a partir do gateway) ===== */
const SPORTS_QUICK_LINKS = gateway
  .filter((item) => item.key !== "contact")
  .map(({ key, label, href }) => ({ key, label, href }));

/* ===== “Colaboramos com” (chips, sem ícones) ===== */
const SPORTS_COLLAB_GROUPS = [
  { key: "orgs", label: "Organizações Internacionais" },
  { key: "feds", label: "Federações" },
  { key: "cities", label: "Municípios" },
  { key: "clubs", label: "Clubes" },
  { key: "schools", label: "Escolas" },
  { key: "private", label: "Privados" },
];

const sportsBrand = {
  id: "sports",
  header,
  sections: {
    home: { gateway },

    footer: {
      infoHeader: makeFooterInfoHeader("sports", {
        brand: {
          Icon: ICONS.MedalIcon,
          title: "Sunlive Sports",
          tagline: "Transformando vidas através do Desporto.",
          about:
            "Na Sunlive Sports, acreditamos no desporto como motor de desenvolvimento pessoal, educativo e profissional — " +
            "providenciamos programas integrados que elevam a performance, promovem o bem-estar e criam experiências memoráveis.",
          aboutIntro:
            "Na Sunlive Sports, acreditamos no desporto como motor de desenvolvimento pessoal, educativo e profissional.",
        },
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
          email: { href: "mailto:lucas@sunlive.pt", label: "lucas@sunlive.pt" },
          phone: { href: "tel:+351933600362", label: "+351 933 600 362" },
        },
        socials: { title: "Redes Sociais", items: SPORTS_SOCIALS },
      }),

      linkDirectory: {
        left: {
          columns: [
            {
              key: "quick-links",
              title: "Links Rápidos",
              // 👇 só texto, sem ícones
              items: SPORTS_QUICK_LINKS,
            },
          ],
        },

        partners: {
          collaborators: {
            title: "Colaboramos com:",
            // 👇 sem iconKeys
            items: SPORTS_COLLAB_GROUPS,
          },
        },
      },

      acknowledgements: undefined,
      policiesBar: makePoliciesBar({
        holder: "Sunlive Sports. Todos os direitos reservados.",
      }),
    },
  },
};

export default sportsBrand;