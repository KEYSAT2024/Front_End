import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { BsPencilSquare } from "react-icons/bs";
import { useAuth } from "../auth/auth";

function StudentDashboardPage() {
  const auth = useAuth();

  return (
    <div>
      <Header></Header>
      <Navbar>
        <Link to="/student-dashboard" className="nav-link">
          <BsPencilSquare /> Attendance
        </Link>
      </Navbar>
      <div className="main-content">
        <h2>Student Dashboard</h2>
        <p>Welcome, {auth.user}!</p>
      </div>
    </div>
  );
}

export default StudentDashboardPage;
