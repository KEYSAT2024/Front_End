import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { useAuth } from "../auth/auth";

function InstructorDashboardPage() {
  const auth = useAuth();
  console.log(auth.user);
  return (
    <div>
      <Header></Header>
      <Navbar>
        <Link to="/instructor-dashboard" className="nav-link">
          Instructor Dashboard
        </Link>
        <Link to="/courses" className="nav-link">
          Courses
        </Link>
      </Navbar>
      <div className="main-content">
        <h2>Instructor Dashboard</h2>
        <p>Welcome, {auth.user}!</p>
        {/* Add additional content specific to Instructor Dashboard */}
        <p>Your Courses:</p>
        {/* Display instructor-specific courses */}
        <ul>
          <li>Course 1</li>
          <li>Course 2</li>
          {/* Add dynamic rendering of instructor's courses */}
        </ul>
      </div>
    </div>
  );
}

export default InstructorDashboardPage;
