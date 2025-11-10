import styles from "./UtilityHeaderBar.module.css";
import UtilityBar from "../../../../shared/components/UtilityBar/index.jsx";
import BackButton from "../../../../shared/ui/BackButton.jsx";
import sportsBrand from "../../configSports.jsx";

export default function UtilityHeaderBar() {
  const { backLink, socials = [], lang = {} } = sportsBrand.header || {};
  return (
    <div className={styles.wrap} aria-label="Header — Sports">
      <UtilityBar
        variant="sports-header"        
        leftSlot={<BackButton {...backLink} />}
        socials={socials}
        lang={lang}
        ariaLabel="Utility bar — Sports Header"
      />
    </div>
  );
}
