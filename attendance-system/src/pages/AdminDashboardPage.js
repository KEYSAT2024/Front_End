import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function AdminDashboardPage() {
  const username = localStorage.getItem("username");

  return (
    <div>
      <Header></Header>
        <div className="admin-dashboard-container">

      
            <Navbar>
              <Link to="/admin-dashboard" className="nav-link">
                Admin Dashboard
              </Link>
              <Link to="/courses" className="nav-link">
                Courses
              </Link>
              <Link to="/admin-add-remove-users" className="nav-link">
                Students and Instructors
              </Link>
            </Navbar>

            <div className="admin-dash-main-content">
              <h1>Admin Dashboard</h1>
              <p>Welcome, {username}!</p>
            </div>

        </div>


    </div>
  );
}

export default AdminDashboardPage;
