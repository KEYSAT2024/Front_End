import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { useAuth } from "../auth/auth";

function AdminDashboardPage() {
  const auth = useAuth();
  console.log(auth.user);
  return (
    <div>
      <Navbar>
        <Link to="/admin-dashboard" className="nav-link">
          Admin Dashboard
        </Link>
        <Link to="/courses" className="nav-link">
          Courses
        </Link>
      </Navbar>
      <div className="main-content">
        <h2>Admin Dashboard</h2>
        <p>Welcome, {auth.user}!</p>
      </div>
    </div>
  );
}

export default AdminDashboardPage;
