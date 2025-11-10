// src/brands/sports/pages/configSports.jsx
import {
  LANG_DEFAULT,
  IMG_COMMON,
  makeBackLink,
  withSocialIcons,
  makeFooterInfoHeader,
  makeFooterContacts,
  makePoliciesBar,
  POLICIES_LINKS_DEFAULT,
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
    label: "Voltar Sunlive Group",
  }),
  lang: LANG_DEFAULT,
  socials: SPORTS_SOCIALS,
};

/* ===== Home — Gateway (entra também no footer “Links Rápidos”) ===== */
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

/* ===== Footer — InfoHeader (sobrepor apenas o que muda) ===== */
const footerInfoHeader = makeFooterInfoHeader("sports", {
  brand: {
    title: "Sunlive Sports",
    tagline: "Transformando vidas através do Desporto.",
    about:
      "Na Sunlive Sports, acreditamos que o desporto é uma forma de desenvolvimento pessoal, educativo e profissional. " +
      "Providenciamos programas integrados que elevam a performance, promovem o bem-estar e criam experiências memoráveis.",
    link: { label: "Sunlive Sports", href: "/sunlive-group/sports" },
  },
  location: {
    title: "Localização",
    addressLines: [
      "Rua Narciso da Marça, 3780-101",
      "Sangalhos, Anadia – Aveiro",
    ],
    mapHref:
      "https://maps.google.com/?q=Rua+Narciso+da+Marça+3780-101+Sangalhos+Anadia",
  },
  /* Se quiseres forçar contacto do Sports, sobrepõe aqui: */
  contacts: makeFooterContacts("sports", {
    units: {
      sports: { email: "lucas.sunlive.pt", phone: "+351 933 600 362" }, // usa os que mostraste no mock
    },
  }),
  socials: { title: "Redes Sociais", items: SPORTS_SOCIALS },
});

/* ===== Footer — Links Rápidos (derivado do gateway) ===== */
const footerQuickLinks = gateway
  .filter((g) => g.key !== "contact")
  .map(({ key, label, href }) => ({ key, label, href }));

/* ===== Footer — Chips “Colaboramos com…” (Sports específico) ===== */
const footerCollaborators = [
  {
    key: "orgs",
    label: "Organizações Internacionais",
    href: "/sunlive-group/sports/collab#orgs",
  },
  {
    key: "federations",
    label: "Federações",
    href: "/sunlive-group/sports/collab#federations",
  },
  {
    key: "municipal",
    label: "Municípios",
    href: "/sunlive-group/sports/collab#municipal",
  },
  { key: "clubs", label: "Clubes", href: "/sunlive-group/sports/collab#clubs" },
  {
    key: "schools",
    label: "Escolas",
    href: "/sunlive-group/sports/collab#schools",
  },
  {
    key: "private",
    label: "Privados",
    href: "/sunlive-group/sports/collab#private",
  },
];

/* ===== Footer — Banners de conformidade (assets locais) ===== */
const footerCompliance = {
  items: [
    {
      key: "prr",
      alt: "PRR – Plano de Recuperação e Resiliência",
      src: "/assets/sports/footer/prr.png",
    },
    {
      key: "gov",
      alt: "República Portuguesa",
      src: "/assets/sports/footer/rep-pt.png",
    },
    {
      key: "eu",
      alt: "Financiado pela União Europeia",
      src: "/assets/sports/footer/eu.png",
    },
  ],
};

/* ===== Footer — Políticas & Copyright ===== */
const footerPolicies = makePoliciesBar({
  holder: "Sunlive Sports",
  year: 2025,
  iconAriaLabel: "Segurança e políticas",
  links: POLICIES_LINKS_DEFAULT,
});

/* ===== Export principal ===== */
const sportsBrand = {
  meta: { key: "sports", title: "Sunlive Sports" },
  header,
  home: { gateway },
  footer: {
    infoHeader: footerInfoHeader,
    quickLinks: footerQuickLinks,
    collaborators: footerCollaborators,
    compliance: footerCompliance,
    policies: footerPolicies,
  },
  assets: { IMG_COMMON },
  socials: SPORTS_SOCIALS,
};

export default sportsBrand;
export {
  SPORTS_SOCIALS,
  footerInfoHeader,
  footerQuickLinks,
  footerCollaborators,
  footerCompliance,
  footerPolicies,
};
