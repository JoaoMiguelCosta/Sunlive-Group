import { useLocation } from "react-router-dom";

import UtilityBar from "../../../shared/components/UtilityBar/index.jsx";
import { groupHomePage } from "../config/pages/index.js";

const LOGOS_BASE_PATH = "/sunlive-group/logos";

const LANG_FALLBACK = {
  current: "pt",
  options: [{ label: "PT", name: "Português", code: "pt" }],
};

export default function LogosUtilityBar() {
  const location = useLocation();

  const overview = groupHomePage?.sections?.overview;

  const socials = overview?.socials ?? [];
  const lang = overview?.lang ?? LANG_FALLBACK;

  const isLogosHome =
    location.pathname === LOGOS_BASE_PATH ||
    location.pathname === `${LOGOS_BASE_PATH}/`;

  const utilityBarProps = isLogosHome
    ? {
        backLink: {
          href: "/sunlive-group",
          label: "Voltar Sunlive Group",
        },
      }
    : {
        homeLink: {
          href: LOGOS_BASE_PATH,
          label: "Início Logos",
        },
      };

  return (
    <UtilityBar
      variant="logos-header"
      socials={socials}
      lang={lang}
      ariaLabel="Utility bar — Logos"
      data-page={isLogosHome ? "logos-home" : "logos-inner"}
      {...utilityBarProps}
    />
  );
}
