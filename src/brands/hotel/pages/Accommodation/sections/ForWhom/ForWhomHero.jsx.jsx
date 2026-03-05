import styles from "./ForWhom.module.css";

import TitleForWhom from "./TitleForWhom.jsx";
import DescriptionForWhom from "./DescriptionForWhom.jsx";
import ForWhomHero from "./ForWhomHero.jsx";
import ForWhomProfilesGrid from "./ForWhomProfilesGrid.jsx";

import hotelBrand from "../../../../config/registry/index.js";

export default function ForWhom() {
  const content = hotelBrand?.pages?.estadia?.sections?.forWhom ?? null;
  if (!content) return null;

  return (
    <section
      id={content.id}
      className={styles.section}
      aria-label={content.headerLabel || "Para Quem"}
    >
      <div className={styles.inner}>
        <TitleForWhom label={content.headerLabel} />
        <DescriptionForWhom>{content.description}</DescriptionForWhom>

        {/* ✅ “Hero” dentro da mesma secção */}
        <ForWhomHero />
        <ForWhomProfilesGrid />
      </div>
    </section>
  );
}
