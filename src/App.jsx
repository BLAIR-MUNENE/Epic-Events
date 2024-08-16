import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MyEvents from "./pages/Events";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProfileDashboard from "./components/ProfileDashboard";
import HistoryPage from "./pages/HistoryPage";
import PersonalInfoPage from "./pages/PersonalInfoPage";
import PurchasedEvent from "./components/PurchasedEvent";
import { RouterProvider } from 'react-router-dom';
import { router } from './route';

const NotFound = () => <h1>404 - Page Not Found</h1>;

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('access_token');
  return token ? children : <Navigate to="/login" />;
};

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />  {/* Accessible to everyone */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route 
            path="/my_events" 
            element={<ProtectedRoute><MyEvents /></ProtectedRoute>} 
          />
          
          <Route 
            path="/profile/*" 
            element={<ProtectedRoute><ProfileDashboard /></ProtectedRoute>} 
          />
          
          <Route 
            path="/profile/personal-info" 
            element={<ProtectedRoute><PersonalInfoPage /></ProtectedRoute>} 
          />
          
          <Route 
            path="/profile/history" 
            element={<ProtectedRoute><HistoryPage /></ProtectedRoute>} 
          />
          
          <Route 
            path="/purchased-event" 
            element={<ProtectedRoute><PurchasedEvent /></ProtectedRoute>} 
          />

          <RouterProvider router={router} />

          {/* Catch-all route for 404 errors */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
