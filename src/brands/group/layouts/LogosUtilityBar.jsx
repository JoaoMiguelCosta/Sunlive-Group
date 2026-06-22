import { useLocation } from "react-router-dom";

import UtilityBar from "../../../shared/components/UtilityBar/index.jsx";
import overview from "../config/sections/home/overview.js";

const LOGOS_BASE_PATH = "/sunlive-group/logos";

const LANG_FALLBACK = {
  current: "pt",
  options: [{ label: "PT", name: "Português", code: "pt" }],
};

function normalizePathname(pathname) {
  if (!pathname || pathname === "/") return "/";

  return pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
}

export default function LogosUtilityBar() {
  const location = useLocation();
  const pathname = normalizePathname(location.pathname);

  const socials = overview.socials ?? [];
  const lang = overview.lang ?? LANG_FALLBACK;

  const isLogosHome = pathname === LOGOS_BASE_PATH;

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
