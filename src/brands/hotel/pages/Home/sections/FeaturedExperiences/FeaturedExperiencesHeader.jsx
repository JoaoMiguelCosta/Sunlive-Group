import hotelBrand from "../../../../config/index.js";
import HotelSectionHeader from "../../../../shared/ui/HotelSectionHeader/HotelSectionHeader.jsx";
import styles from "./FeaturedExperiencesHeader.module.css";

/**
 * Header da secção "Experiências em Destaque"
 * Mostra apenas o título principal.
 */
export default function FeaturedExperiencesHeader() {
  const featuredSection =
    hotelBrand?.pages?.home?.sections?.featuredExperiences ?? null;

  const header = featuredSection?.header ?? null;
  if (!header) return null;

  const { title, align = "center" } = header;
  const sectionId = featuredSection.id || "hotel-featured-experiences";
  const alignClass = styles[align] ?? "";

  if (!title) return null;

  return (
    <header
      className={[styles.header, alignClass].filter(Boolean).join(" ")}
      id={`${sectionId}-title`}
    >
      <HotelSectionHeader label={title} as="h2" align={align} />
    </header>
  );
}
