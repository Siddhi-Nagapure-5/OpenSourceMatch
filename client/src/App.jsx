import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Pages
import Splash from "./pages/Splash";
import AuthPage from "./pages/AuthPage";
import Dashboard from "./pages/Dashboard";
import DashboardHome from "./pages/DashboardHome";
import SkillsForm from "./pages/SkillsForm";
import ResultsPage from "./pages/ResultsPage";
import Profile from "./pages/Profile";

// Auth
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <Routes>
      {/* Splash screen */}
      <Route path="/" element={<Splash />} />

      {/* Login/Register page */}
      <Route path="/login" element={<AuthPage />} />

      {/* Dashboard layout with nested routes */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      >
        <Route path="home" element={<DashboardHome />} />
        <Route path="skills" element={<SkillsForm />} />
        <Route path="results" element={<ResultsPage />} />
        <Route path="profile" element={<Profile />} />
        {/* optional redirect for /dashboard → /dashboard/home */}
        <Route index element={<Navigate to="home" />} />
      </Route>

      {/* Fallback route */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
