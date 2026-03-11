import hotelBrand from "../../../../config/index.js";
import HotelSectionHeader from "../../../../shared/ui/HotelSectionHeader/HotelSectionHeader.jsx";
import HotelSectionDescription from "../../../../shared/ui/HotelSectionDescription/HotelSectionDescription.jsx";

import styles from "./Mobility.module.css";

export default function MobilityBikesIntro() {
  const bikes =
    hotelBrand?.pages?.facilities?.sections?.mobility?.bikes ?? null;

  if (!bikes) return null;

  return (
    <div className={styles.innerBlock}>
      <HotelSectionHeader label={bikes.headerLabel} />

      {bikes.description ? (
        <HotelSectionDescription>{bikes.description}</HotelSectionDescription>
      ) : null}
    </div>
  );
}
