// src/brands/hotel/components/Home/WhoWeHost/index.jsx
import styles from "./WhoWeHost.module.css";

import hotelBrand from "../../../../config/index.js";
import WhoWeHostHeader from "./WhoWeHostHeader.jsx";
import WhoWeHostCards from "./WhoWeHostCards.jsx";

export default function WhoWeHostSection() {
  const section = hotelBrand?.pages?.home?.sections?.whoWeHost;

  if (!section) return null;

  return (
    <section id={section.id} className={styles.section}>
      <WhoWeHostHeader label={section.headerLabel} />
      <WhoWeHostCards items={section.items} />
    </section>
  );
}
