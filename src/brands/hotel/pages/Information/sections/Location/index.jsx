import styles from "./Location.module.css";

import TitleLocation from "./TitleLocation.jsx";
import DescriptionLocation from "./DescriptionLocation.jsx";
import LocationDetails from "./LocationDetails.jsx";

export default function LocationSection() {
  return (
    <section
      id="info-location"
      className={styles.section}
      aria-label="Localização"
    >
      <div className={styles.inner}>
        <TitleLocation />
        <DescriptionLocation />
        <LocationDetails />
      </div>
    </section>
  );
}
