import React from "react";
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
              <RequireAuth>
                <StudentDashboardPage />
              </RequireAuth>
            }
          />
          <Route
            path="/admin-dashboard"
            element={
              <RequireAuth>
                <AdminDashboardPage />
              </RequireAuth>
            }
          />
          <Route
            path="/courses"
            element={
              <RequireAuth>
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
