import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import MyEvents from "./pages/Events";
import AboutUs from "./pages/AboutUs";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import PersonalInfoPage from "./pages/PersonalInfoPage";
import PurchasedEvent from "./components/PurchasedEvent";
import ProtectedRoute from "./components/ProtectedRoute";  // Import the ProtectedRoute component

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/events",
    element: (
      <ProtectedRoute>
        <MyEvents />
      </ProtectedRoute>
    ),
  },
  {
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    path: "/purchased-event",
    element: (
      <ProtectedRoute>
        <PurchasedEvent />
      </ProtectedRoute>
    ),
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/PersonalInfoPage",
    element: (
      <ProtectedRoute>
        <PersonalInfoPage />
      </ProtectedRoute>
    ),
  },
]);
