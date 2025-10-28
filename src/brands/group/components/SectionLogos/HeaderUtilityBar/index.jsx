import styles from "./HeaderUtilityBar.module.css";
import UtilityBar from "../../SectionGroup/OverviewSection/UtilityBar.jsx";
import BackButton from "../../../../../shared/ui/BackButton.jsx";
import configGroupLogos from "../../../ConfigGroupLogos.jsx";

export default function HeaderUtilityBar() {
  return (
    <div className={styles.wrap} aria-label="Header — Partners Logos">
      <UtilityBar leftSlot={<BackButton {...configGroupLogos.backLink} />} />
    </div>
  );
}
