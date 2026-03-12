import TitleLocation from "./TitleLocation.jsx";
import DescriptionLocation from "./DescriptionLocation.jsx";

import styles from "./Location.module.css";

export default function LocationSection() {
  return (
    <section id="info-location" className={styles.section}>
      <TitleLocation />
      <DescriptionLocation />
    </section>
  );
}
