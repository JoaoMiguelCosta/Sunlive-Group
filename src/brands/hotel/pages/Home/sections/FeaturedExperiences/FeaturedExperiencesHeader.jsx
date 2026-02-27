// src/brands/hotel/components/Home/FeaturedExperiences/FeaturedExperiencesHeader.jsx
import hotelBrand from "../../../../configHotel.jsx";
import HotelSectionHeader from "../../../../shared/ui/HotelSectionHeader/HotelSectionHeader.jsx";
import styles from "./FeaturedExperiencesHeader.module.css";

/**
 * Header da secção "Experiências em Destaque"
 * Agora só mostra o título principal, sem kicker/subtitle,
 * deixando a área visual para as fotografias dos cards.
 */
export default function FeaturedExperiencesHeader() {
  const featuredSection =
    hotelBrand?.pages?.home?.sections?.featuredExperiences;

  const header = featuredSection?.header;
  if (!header) return null;

  const { title, align = "center" } = header;

  const alignClass = styles[align] ?? "";
  const sectionId = featuredSection.id || "hotel-featured-experiences";

  return (
    <header
      className={`${styles.header} ${alignClass}`.trim()}
      id={`${sectionId}-title`}
    >
      {/* Só título principal na barra reutilizável */}
      <HotelSectionHeader label={title} as="h2" align={align} />
    </header>
  );
}
