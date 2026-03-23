import styles from "./Accommodations.module.css";

import TitleAccommodations from "./TitleAccommodations.jsx";
import DescriptionAccommodations from "./DescriptionAccommodations.jsx";

import TitleRoomsAndSuites from "./TitleRoomsAndSuites.jsx";
import DescriptionRoomsAndSuites from "./DescriptionRoomsAndSuites.jsx";

import HotelPhotoCarouselBase from "../../../../shared/ui/HotelPhotoCarouselBase/HotelPhotoCarouselBase.jsx";

import InfoNoteBanner from "./InfoNoteBanner.jsx";
import RoomCardsGrid from "./RoomCardsGrid.jsx";

import hotelBrand from "../../../../config/index.js";

export default function Accommodations() {
  const content =
    hotelBrand?.pages?.accommodation?.sections?.accommodations ?? null;

  if (!content) return null;

  const roomsAndSuites = content.roomsAndSuites ?? null;
  const sectionId = content.id ?? "accommodation-accommodations";
  const titleId = `${sectionId}-title`;
  const galleryItems = content.gallery?.items ?? [];
  const galleryFallbackLabel =
    content.gallery?.fallbackLabel ?? "Galeria de alojamento";

  return (
    <section
      id={sectionId}
      className={styles.section}
      aria-labelledby={titleId}
    >
      <div className={styles.inner}>
        <TitleAccommodations id={titleId} label={content.headerLabel} />

        <DescriptionAccommodations>
          {content.description}
        </DescriptionAccommodations>

        <div className={styles.galleryWrap}>
          <HotelPhotoCarouselBase
            items={galleryItems}
            fallbackLabel={galleryFallbackLabel}
            showIndicators
            showCaption
            className={styles.carouselStage}
          />
        </div>

        {roomsAndSuites ? (
          <section
            id={roomsAndSuites.id ?? "accommodation-rooms-and-suites"}
            className={styles.roomsSection}
            aria-label={roomsAndSuites.headerLabel || "Quartos e Suites"}
          >
            <TitleRoomsAndSuites />
            <DescriptionRoomsAndSuites />
          </section>
        ) : null}

        <RoomCardsGrid />
        <InfoNoteBanner />
      </div>
    </section>
  );
}
