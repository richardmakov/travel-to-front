
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "../pages/Home/HomePage";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import AboutUsPage from "../pages/AboutUs/AboutUsPage";
import FlightsPage from "../pages/Display/FlightsPage";
import ContactUsPage from "../pages/ContactUs/ContactUsPage";
import GalleryPage from "../pages/Gallery/GalleryPage";
import CheckOutCircuitView from "../pages/CheckOutCircuit/CheckOutCircuitView";
import CheckOutFlightsView from "../pages/CheckOutFlights/CheckOutFlightsView";

export default function AppRouter() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<SignInPage />} />
          <Route path="/register" element={<SignUpPage />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
          <Route path="/flights" element={<FlightsPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/gallery/:id" element={<GalleryPage />} />
          <Route path="/checkout/circuit/:id" element={<CheckOutCircuitView />} />
          <Route path="/checkout/flights/:id" element={<CheckOutFlightsView />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
