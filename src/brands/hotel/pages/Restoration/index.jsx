import PanoramicRestaurantSection from "../../components/Restoration/PanoramicRestaurant";
import BreakfastSection from "../../components/Restoration/Breakfast";
import SundayBuffetSection from "../../components/Restoration/SundayBuffet";
import BarLoungeSection from "../../components/Restoration/BarLounge";
import CateringServiceSection from "../../components/Restoration/CateringService";

export default function RestaurantPageHotel() {
  return (
    <main id="restauracao" style={{ padding: 24, scrollMarginTop: "120px" }}>
      <PanoramicRestaurantSection />
      <BreakfastSection />
      <SundayBuffetSection />
      <BarLoungeSection />
      <CateringServiceSection />
    </main>
  );
}
