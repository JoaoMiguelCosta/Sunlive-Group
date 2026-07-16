import { Outlet } from "react-router-dom";

import styles from "./GroupPageLayout.module.css";

import GroupUtilityBar from "./GroupUtilityBar.jsx";

export default function GroupShell() {
  return (
    <div className={styles.shell} data-brand="group">
      <header className={styles.headerContainer}>
        <div className={styles.headerInner}>
          <GroupUtilityBar />
        </div>
      </header>

      <Outlet />
    </div>
  );
}
