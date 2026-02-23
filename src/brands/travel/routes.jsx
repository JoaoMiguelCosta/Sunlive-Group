import { Route } from "react-router-dom";
import TravelPage from "./page"; // ✅ apanha ./page/index.jsx

export default function travelRoutes() {
  return (
    <>
      <Route path="/sunlive-group/travel" element={<TravelPage />} />
    </>
  );
}
