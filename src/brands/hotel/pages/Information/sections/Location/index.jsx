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

  const backgroundImageSrc = section?.backgroundMedia?.imageSrc ?? null;
  const backgroundImageAlt = section?.backgroundMedia?.imageAlt ?? "";

  return (
    <section
      id={sectionId}
      className={styles.section}
      aria-labelledby={titleId}
    >
      {backgroundImageSrc ? (
        <div className={styles.mediaLayer} aria-hidden="true">
          <img
            src={backgroundImageSrc}
            alt={backgroundImageAlt}
            className={styles.backgroundImage}
          />
        </div>
      ) : null}

      <div className={styles.overlayLayer} aria-hidden="true" />

      <div className={styles.inner}>
        <TitleLocation titleId={titleId} />
        <DescriptionLocation />
        <LocationDetails />
      </div>
    </section>
  );
}
