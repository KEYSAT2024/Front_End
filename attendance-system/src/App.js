import React from "react";
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import StudentDashboardPage from "./pages/StudentDashboardPage";
import AdminDashboardPage from "./pages/AdminDashboardPage";
import AdminCoursesPage from "./pages/AdminCoursesPage";
import { AuthProvider } from "./auth/auth";
import { RequireAuth } from "./components/RequireAuth";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route
            path="/student-dashboard"
            element={
              <RequireAuth allowedRoles={["ROLE_STUDENT"]}>
                <StudentDashboardPage />
              </RequireAuth>
            }
          />
          <Route
            path="/admin-dashboard"
            element={
              <RequireAuth allowedRoles={["ROLE_ADMIN"]}>
                <AdminDashboardPage />
              </RequireAuth>
            }
          />
          <Route
            path="/courses"
            element={
              <RequireAuth allowedRoles={["ROLE_ADMIN", "ROLE_INSTRUCTOR"]}>
                <AdminCoursesPage />
              </RequireAuth>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
