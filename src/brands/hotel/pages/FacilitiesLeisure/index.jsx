import WellBeingSection from "../../components/FacilitiesLeisure/WeelBeing";
import MobilitySection from "../../components/FacilitiesLeisure/Mobility";
import ComplementaryServicesSection from "../../components/FacilitiesLeisure/ComplementaryServices";
import ReceptionSupportSection from "../../components/FacilitiesLeisure/ReceptionSupport";
import FacilitiesLeisureSection from "../../components/FacilitiesLeisure/FacilitiesLeisure";

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
