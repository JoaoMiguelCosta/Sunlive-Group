import styles from "./Accommodations.module.css";

import TitleAccomodations from "./TitleAccomodations.jsx";
import DescriptionAccomodations from "./DescriptionAccomodations.jsx";

import TitleRoomsAndSuites from "./TitleRoomsAndSuites.jsx";
import DescriptionRoomsAndSuites from "./DescriptionRoomsAndSuites.jsx";

import HotelPhotoCarousel from "../../../../shared/ui/HotelPhotoCarousel/HotelPhotoCarousel.jsx";

import InfoNoteBanner from "./InfoNoteBanner.jsx";
import RoomCardsGrid from "./RoomCardsGrid.jsx";

import hotelBrand from "../../../../config/index.js";

export default function Accommodations() {
  const content =
    hotelBrand?.pages?.accommodation?.sections?.accommodations ?? null;
  if (!content) return null;

  const roomsAndSuites = content.roomsAndSuites ?? null;

  return (
    <section
      id={content.id}
      className={styles.section}
      aria-label="Accommodations"
    >
      <div className={styles.inner}>
        <TitleAccomodations label={content.headerLabel} />

        <DescriptionAccomodations>
          {content.description}
        </DescriptionAccomodations>

        <div className={styles.galleryWrap}>
          <HotelPhotoCarousel
            items={content.gallery?.items ?? []}
            fallbackLabel={content.gallery?.fallbackLabel ?? "Fotos"}
          />
        </div>

        {roomsAndSuites ? (
          <section
            id={roomsAndSuites.id}
            className={styles.roomsSection}
            aria-label={roomsAndSuites.headerLabel}
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
