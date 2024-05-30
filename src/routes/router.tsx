
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
import Dashboard from "../pages/Dashboard/Dashboard";
import ProtectedRoute from "./protectedRoute";
import useAuthStore from "../stores/authStore";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/dashboard/*" element={<DashboardRoutes />} />
        <Route path="/dashboard/admin/*" element={<DashboardAdminRoutes />} />
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
  )
}

const DashboardRoutes = () => {
  const { user } = useAuthStore()
  return (
    <Routes>
      <Route index
        element={
          <ProtectedRoute role={'ROLE_USER'} userRole={user?.roles}>
            <Dashboard />
          </ProtectedRoute>} />
      <Route path="profile"
        element={
          <ProtectedRoute role={'ROLE_USER'} userRole={user?.roles}>
            <Dashboard />
          </ProtectedRoute>}
      />
      <Route path="bookings"
        element={
          <ProtectedRoute role={'ROLE_USER'} userRole={user?.roles}>
            <Dashboard />
          </ProtectedRoute>} />
    </Routes>
  )
}

const DashboardAdminRoutes = () => {
  const { user } = useAuthStore()
  return (
    <Routes>
      <Route
        path="users"
        element={
          <ProtectedRoute role={'ROLE_ADMIN'} userRole={user?.roles}>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="bookings"
        element={
          <ProtectedRoute role={'ROLE_ADMIN'} userRole={user?.roles}>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="offerts"
        element={
          <ProtectedRoute role={'ROLE_ADMIN'} userRole={user?.roles}>
            <Dashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

