// src/brands/hotel/components/Home/WhoWeHost/index.jsx
import styles from "./WhoWeHost.module.css";

import hotelBrand from "../../../../config/index.js";
import WhoWeHostHeader from "./WhoWeHostHeader.jsx";
import WhoWeHostCards from "./WhoWeHostCards.jsx";

export default function WhoWeHostSection() {
  const section = hotelBrand?.pages?.home?.sections?.whoWeHost ?? null;
  if (!section) return null;

  const sectionId = section.id ?? "hotel-who-we-host";
  const titleId = `${sectionId}-title`;

  return (
    <section
      id={sectionId}
      className={styles.section}
      aria-labelledby={titleId}
    >
      <WhoWeHostHeader label={section.headerLabel} titleId={titleId} />
      <WhoWeHostCards items={section.items ?? []} />
    </section>
  );
}
