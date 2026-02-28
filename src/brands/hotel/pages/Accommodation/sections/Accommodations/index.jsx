// src/brands/hotel/components/Accommodation/Accommodations/index.jsx
import styles from "./Accommodations.module.css";

import TitleAccomodations from "./TitleAccomodations.jsx";
import DescriptionAccomodations from "./DescriptionAccomodations.jsx";

import TitleRoomsAndSuites from "./TitleRoomsAndSuites.jsx";
import DescriptionRoomsAndSuites from "./DescriptionRoomsAndSuites.jsx";

import HotelPhotoCarousel from "../../../../shared/ui/HotelPhotoCarousel/HotelPhotoCarousel.jsx";

import InfoNoteBanner from "./InfoNoteBanner.jsx"
import RoomCardsGrid from "./RoomCardsGrid.jsx";

import hotelBrand from "../../../../config/index.js";

export default function Accommodations() {
  const content = hotelBrand?.pages?.estadia?.sections?.accommodations ?? null;
  if (!content) return null;

  return (
    <section
      id={content.id}
      className={styles.section}
      aria-label="Accommodations"
    >
      <div className={styles.inner}>
        {/* Secção principal */}
        <TitleAccomodations label={content.headerLabel} />
        <DescriptionAccomodations>
          {content.description}
        </DescriptionAccomodations>

        {/* Galeria */}
        <div className={styles.galleryWrap}>
          <HotelPhotoCarousel
            items={content.gallery?.items ?? []}
            fallbackLabel={content.gallery?.fallbackLabel ?? "Fotos"}
          />
        </div>

        {/* Subsecção: Quartos e Suites (mesmo estilo) */}
        <TitleRoomsAndSuites />
        <DescriptionRoomsAndSuites />

        {/* ✅ Nota informativa (consome content) */}

        {/* ✅ Filtro + grelha com os 5 cards */}
        <RoomCardsGrid />
        <InfoNoteBanner />
      </div>
    </section>
  );
}
