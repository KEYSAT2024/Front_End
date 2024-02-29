import React, { useState } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

import { IoHomeOutline } from "react-icons/io5";
import { IoNewspaperOutline } from "react-icons/io5";
import { FaPlusMinus } from "react-icons/fa6";

function CourseTable({ courses, handleDeleteCourse }) {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Instructor</th>
            <th>Edit/Delete</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, index) => (
            <tr key={index}>
              <td>{course.name}</td>
              <td>{course.instructor}</td>
              <td>
                <button onClick={() => handleDeleteCourse(index)}>Edit</button>
                <button onClick={() => handleDeleteCourse(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function AdminAddRemoveCourses() {
  const [courses, setCourses] = useState([]);
  const [courseName, setCourseName] = useState("");
  const [instructorName, setInstructorName] = useState("");

  const handleDeleteCourse = (index) => {
    const newCourses = [...courses];
    newCourses.splice(index, 1);
    setCourses(newCourses);
  };

  const handleAddCourse = () => {
    const newCourse = {
      name: courseName,
      instructor: instructorName,
    };
    setCourses([...courses, newCourse]);
    setCourseName("");
    setInstructorName("");
  };

  return (
    <div>
      <Header />
      <div className="addremove-container">
      <Navbar>
              <Link to="/admin-dashboard" className="nav-link">
              <span style={{ display: 'flex', alignItems: 'center' }}>
               <IoHomeOutline style={{ marginRight: "5px" }} /> Admin Dashboard
               </span>
              </Link>

              <Link to="/courses" className="nav-link">
              <span style={{ display: 'flex', alignItems: 'center' }}>
              <IoNewspaperOutline style={{ marginRight: "5px" }} />Courses
              </span>
              </Link>

              <Link to="/admin-add-remove-users" className="nav-link">
              <span style={{ display: 'flex', alignItems: 'center' }}>
              <FaPlusMinus style={{ marginRight: "5px" }}/>Students and Instructors
              </span>
              </Link>
            </Navbar>

        <div className="course-section">
          <h1>Add/Remove Courses</h1>
          <div className="forms-container">
            <div className="course-form">
              <h2>Add Course</h2>
              <label htmlFor="courseName">Course Name:</label>
              <input
                type="text"
                id="courseName"
                value={courseName}
                onChange={(e) => setCourseName(e.target.value)}
              />
              <label htmlFor="instructorName">Instructor Name:</label>
              <input
                type="text"
                id="instructorName"
                value={instructorName}
                onChange={(e) => setInstructorName(e.target.value)}
              />
              <button type="button" onClick={handleAddCourse}>
                Add Course
              </button>
            </div>

            <CourseTable
              courses={courses}
              handleDeleteCourse={handleDeleteCourse}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminAddRemoveCourses;
