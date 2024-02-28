import React, { useState } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function AdminCoursesPage() {
  const username = localStorage.getItem("username");
  const [courses, setCourses] = useState(["AWS", "Python", "Java"]);

  const addCourse = () => {
    const newCourse = prompt("Enter the name of the new course:");
    if (newCourse) {
      setCourses([...courses, newCourse]);
    }
  };

  const deleteCourse = (courseIndex) => {
    const updatedCourses = courses.filter((_, index) => index !== courseIndex);
    setCourses(updatedCourses);
  };

  return (
    <div>
      <Header />
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
      <top>
        <center>
          <div className="main-content">
            <h2>Admin Courses Dashboard </h2>
            <p>Welcome, {username}!</p>

            <button onClick={addCourse}>Add Course</button>

            <ul>
              {courses.map((course, index) => (
                <li key={index}>
                  {course}
                  <button onClick={() => deleteCourse(index)}>Delete</button>
                </li>
              ))}
            </ul>
          </div>
        </center>
      </top>
    </div>
  );
}

export default AdminCoursesPage;
