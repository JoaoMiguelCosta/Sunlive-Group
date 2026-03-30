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
  const gallery = content.gallery ?? {};
  const galleryItems = gallery.items ?? [];

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

        {roomsAndSuites ? (
          <section
            id={roomsAndSuites.id ?? "accommodation-rooms-and-suites"}
            className={styles.roomsSection}
            aria-labelledby={`${sectionId}-rooms-title`}
          >
            <TitleRoomsAndSuites
              id={`${sectionId}-rooms-title`}
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
