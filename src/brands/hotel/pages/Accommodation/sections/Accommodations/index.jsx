import styles from "./Accommodations.module.css";

import TitleAccommodations from "./TitleAccommodations.jsx";
import DescriptionAccommodations from "./DescriptionAccommodations.jsx";

import TitleRoomsAndSuites from "./TitleRoomsAndSuites.jsx";
import DescriptionRoomsAndSuites from "./DescriptionRoomsAndSuites.jsx";

import HotelPhotoCarouselBase from "../../../../shared/ui/HotelPhotoCarouselBase/HotelPhotoCarouselBase.jsx";

import InfoNoteBanner from "./InfoNoteBanner.jsx";
import RoomCardsGrid from "./RoomCardsGrid.jsx";

import accommodation from "../../../../config/pages/accommodation.js";
const accommodations = accommodation.sections.accommodations;

export default function Accommodations() {
  const content = accommodations;

  if (!content) return null;

  const roomsAndSuites = content.roomsAndSuites ?? null;
  const sectionId = content.id ?? "accommodation-accommodations";
  const titleId = `${sectionId}-title`;
  const roomsTitleId = `${sectionId}-rooms-title`;

  const gallery = content.gallery ?? {};
  const galleryItems = Array.isArray(gallery.items) ? gallery.items : [];

  return (
    <section
      id={sectionId}
      className={styles.section}
      aria-labelledby={titleId}
    >
      <div className={styles.inner}>
        <div className={styles.headerBlock}>
          <TitleAccommodations
            id={titleId}
            label={content.headerLabel}
            className={styles.titleWrap}
          />

          <DescriptionAccommodations className={styles.introPanel}>
            {content.description}
          </DescriptionAccommodations>
        </div>

        {galleryItems.length > 0 ? (
          <div className={styles.galleryWrap}>
            <HotelPhotoCarouselBase
              items={galleryItems}
              fallbackLabel={gallery.fallbackLabel ?? "Galeria de alojamento"}
              fallbackEyebrow={gallery.fallbackEyebrow ?? "Alojamento"}
              fallbackTitle={gallery.fallbackTitle ?? "Galeria de alojamento"}
              previousLabel={gallery.previousLabel ?? "Imagem anterior"}
              nextLabel={gallery.nextLabel ?? "Imagem seguinte"}
              indicatorsLabel={
                gallery.indicatorsLabel ?? "Navegação da galeria de alojamento"
              }
              showIndicators
              showCaption
              showImageBackdrop
              backdropBlur="20px"
              backdropScale={1.16}
              backdropOpacity={0.52}
              className={styles.carouselStage}
            />
          </div>
        ) : null}

        {roomsAndSuites ? (
          <section
            id={roomsAndSuites.id ?? "accommodation-rooms-and-suites"}
            className={styles.roomsSection}
            aria-labelledby={roomsTitleId}
          >
            <TitleRoomsAndSuites
              id={roomsTitleId}
              label={roomsAndSuites.headerLabel}
              className={styles.titleWrap}
            />

            <DescriptionRoomsAndSuites className={styles.roomsIntroPanel}>
              {roomsAndSuites.description}
            </DescriptionRoomsAndSuites>
          </section>
        ) : null}

        <RoomCardsGrid />
        <InfoNoteBanner />
      </div>
    </section>
  );
}
