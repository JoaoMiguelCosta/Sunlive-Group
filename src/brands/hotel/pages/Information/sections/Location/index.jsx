import styles from "./Location.module.css";

import TitleLocation from "./TitleLocation.jsx";
import DescriptionLocation from "./DescriptionLocation.jsx";
import LocationDetails from "./LocationDetails.jsx";

export default function LocationSection() {
  const sectionId = "info-location";
  const titleId = `${sectionId}-title`;

  return (
    <section
      id={sectionId}
      className={styles.section}
      aria-labelledby={titleId}
    >
      <div className={styles.inner}>
        <TitleLocation id={titleId} />
        <DescriptionLocation />
        <LocationDetails />
      </div>
    </section>
  );
}
