import WellBeingSection from "./sections/WeelBeing/index.jsx";
import MobilitySection from "./sections/Mobility/index.jsx";
import ComplementaryServicesSection from "./sections/ComplementaryServices/index.jsx";
import ReceptionSupportSection from "./sections/ReceptionSupport/index.jsx";
import FacilitiesLeisureSection from "./sections/FacilitiesLeisure/index.jsx";

export default function FacilitiesLeisurePageHotel() {
  return (
    <main id="instalacoes" style={{ padding: 24, scrollMarginTop: "120px" }}>
      <FacilitiesLeisureSection />
      <WellBeingSection />
      <MobilitySection />
      <ComplementaryServicesSection />
      <ReceptionSupportSection />
    </main>
  );
}
