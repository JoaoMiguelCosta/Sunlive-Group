import PanoramicRestaurantSection from "./sections/PanoramicRestaurant/index.jsx";
import BreakfastSection from "./sections/Breakfast/index.jsx";
import SundayBuffetSection from "./sections/SundayBuffet/index.jsx";
import BarLoungeSection from "./sections/BarLounge/index.jsx";
import CateringServiceSection from "./sections/CateringService/index.jsx";

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
