import featuredExperiences from "../../../../config/sections/home/featuredExperiences.js";
import HotelSectionHeader from "../../../../shared/ui/HotelSectionHeader/HotelSectionHeader.jsx";

import styles from "./FeaturedExperiencesHeader.module.css";

export default function FeaturedExperiencesHeader({ titleId }) {
  const featuredSection = featuredExperiences;

  const header = featuredSection?.header ?? null;
  if (!header) return null;

  const { kicker, title, subtitle, align = "center" } = header;
  const alignClass = styles[align] ?? styles.center;

  if (!title && !kicker && !subtitle) return null;

  return (
    <header className={[styles.header, alignClass].filter(Boolean).join(" ")}>
      {kicker ? <p className={styles.kicker}>{kicker}</p> : null}

      {title ? (
        <HotelSectionHeader id={titleId} label={title} as="h2" align={align} />
      ) : null}

      {subtitle ? <p className={styles.subtitle}>{subtitle}</p> : null}
    </header>
  );
}
