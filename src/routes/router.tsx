
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
import ProtectedRoute from "./protectedRoute";
import useAuthStore from "../stores/authStore";
import { Layout } from "../pages/Layout/Layout";
import Profile from "../pages/Layout/Dashboard/components/profile-panel/Profile";
import Booking from "../pages/Layout/Dashboard/components/profile-panel/Booking";
import UsersControl from "../pages/Layout/Dashboard/components/admin-panel/UsersControl";
import BookingControl from "../pages/Layout/Dashboard/components/admin-panel/BookingControl";
import OffertsControl from "../pages/Layout/Dashboard/components/admin-panel/OffersControl";
import useBadge from "../hooks/useBadge";

export default function AppRouter() {
  const { badges, handleBadgeClick, selectedBadge, setSelectedBadge } = useBadge();
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<HomePage badges={badges} handleBadgeClick={handleBadgeClick} selectedBadge={selectedBadge} setSelectedBadge={setSelectedBadge}/>} />
        <Route path="/dashboard/*" element={<DashboardRoutes />} />
        <Route path="/dashboard/admin/*" element={<DashboardAdminRoutes />} />
        <Route path="/login" element={<SignInPage />} />
        <Route path="/register" element={<SignUpPage />} />
        <Route path="/aboutus" element={<AboutUsPage  badges={badges} handleBadgeClick={handleBadgeClick} selectedBadge={selectedBadge} setSelectedBadge={setSelectedBadge}/>} />
        <Route path="/flights" element={<FlightsPage />} />
        <Route path="/contact" element={<ContactUsPage badges={badges} handleBadgeClick={handleBadgeClick} selectedBadge={selectedBadge} setSelectedBadge={setSelectedBadge}/>} />
        <Route path="/gallery/:id" element={<GalleryPage badges={badges} handleBadgeClick={handleBadgeClick} selectedBadge={selectedBadge} setSelectedBadge={setSelectedBadge}/>} />
        <Route path="/checkout/circuit/:id" element={<CheckOutCircuitView  badges={badges} handleBadgeClick={handleBadgeClick} selectedBadge={selectedBadge} setSelectedBadge={setSelectedBadge}/>} />
        <Route path="/checkout/flights/:id" element={<CheckOutFlightsView  badges={badges} handleBadgeClick={handleBadgeClick} selectedBadge={selectedBadge} setSelectedBadge={setSelectedBadge}/>} />
      </Routes>
    </BrowserRouter>
  )
}

const DashboardRoutes = () => {
  const { user } = useAuthStore()
  return (
    <Routes>

      <Route index path="profile"
        element={
          <Layout>
            <ProtectedRoute role={'ROLE_USER'} userRole={user?.roles}>
              <Profile />
            </ProtectedRoute>
          </Layout>}
      />
      <Route path="bookings"
        element={
          <Layout>
            <ProtectedRoute role={'ROLE_USER'} userRole={user?.roles}>
              <Booking />
            </ProtectedRoute>
          </Layout>} />
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
          <Layout>
            <ProtectedRoute role={'ROLE_ADMIN'} userRole={user?.roles}>
              <UsersControl />
            </ProtectedRoute>
          </Layout>
        }
      />
      <Route
        path="bookings"
        element={
          <Layout>
            <ProtectedRoute role={'ROLE_ADMIN'} userRole={user?.roles}>
              <BookingControl />
            </ProtectedRoute>
          </Layout>
        }
      />
      <Route
        path="offerts"
        element={
          <Layout>
            <ProtectedRoute role={'ROLE_ADMIN'} userRole={user?.roles}>
              <OffertsControl />
            </ProtectedRoute>
          </Layout>
        }
      />
    </Routes>
  );
};

