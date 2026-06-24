import { useLocation } from "react-router-dom";

import UtilityBar from "../../../shared/components/UtilityBar/index.jsx";
import overview from "../config/sections/home/overview.js";
import { GROUP_BASE_PATH, GROUP_LOGOS_PATH } from "../config/core/paths.js";

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

  const isLogosHome = pathname === GROUP_LOGOS_PATH;

  const utilityBarProps = isLogosHome
    ? {
        backLink: {
          href: GROUP_BASE_PATH,
          label: "Voltar Sunlive Group",
        },
      }
    : {
        homeLink: {
          href: GROUP_LOGOS_PATH,
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
