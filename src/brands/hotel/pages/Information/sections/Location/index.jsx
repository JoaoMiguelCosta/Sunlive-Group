import hotelBrand from "../../../../config/index.js";

import TitleLocation from "./TitleLocation.jsx";
import DescriptionLocation from "./DescriptionLocation.jsx";
import LocationDetails from "./LocationDetails.jsx";

import styles from "./Location.module.css";

export default function LocationSection() {
  const section = hotelBrand?.pages?.information?.sections?.location ?? null;

  if (!section) return null;

  const sectionId = section.id ?? "info-location";
  const titleId = `${sectionId}-title`;

  return (
    <section
      id={sectionId}
      className={styles.section}
      aria-labelledby={titleId}
    >
      <div className={styles.inner}>
        <TitleLocation titleId={titleId} />
        <DescriptionLocation />
        <LocationDetails />
      </div>
    </section>
  );
}
