import { Outlet, useLocation } from "react-router-dom";

import styles from "./GroupPageLayout.module.css";

import GroupUtilityBar from "./GroupUtilityBar.jsx";
import LogosUtilityBar from "./LogosUtilityBar.jsx";
import { GROUP_LOGOS_PATH } from "../config/core/paths.js";

function normalizePathname(pathname) {
  if (!pathname || pathname === "/") return "/";

  return pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
}

function isLogosRoute(pathname) {
  return (
    pathname === GROUP_LOGOS_PATH || pathname.startsWith(`${GROUP_LOGOS_PATH}/`)
  );
}

export default function GroupShell() {
  const location = useLocation();
  const pathname = normalizePathname(location.pathname);

  const isLogosPage = isLogosRoute(pathname);

  return (
    <div className={styles.shell} data-brand="group">
      <header className={styles.headerContainer}>
        <div className={styles.headerInner}>
          {isLogosPage ? <LogosUtilityBar /> : <GroupUtilityBar />}
        </div>
      </header>

      <Outlet />
    </div>
  );
}
