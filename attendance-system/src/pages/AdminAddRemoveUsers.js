import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { useAuth } from "../auth/auth";

function AdminAddRemoveUsers() {
    const username = localStorage.getItem("username");
    return (
        <div>
            <Header></Header>

            <div className="addremove-container">

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

                <div className="student-section">
                <h2>Add/Remove Instructors and Students</h2>

                <div className="student-form">

                    <label htmlFor="studentName">Student Name:</label>
                        <input type="text" id="studentName" />
                        <label htmlFor="studentEmail">Student Email:</label>
                        <input type="email" id="studentEmail" />
                        <button type="submit">Add Student</button>
                    </div>

                    
                <div className="instructor-section">
    
                    <div className="instructor-form">

                        <label htmlFor="instructorName">Instructor Name:</label>
                        <input type="text" id="instructorName" />
                        <label htmlFor="instructorEmail">Instructor Email:</label>
                        <input type="email" id="instructorEmail" />
                        <button type="submit">Add Instructor</button>
                    </div>
                </div>

                <div className="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Student Name</th>
                                <th>Group</th>
                                <th>Email</th>
                                <th>Edit/Delete</th>
                                <th>Instructor Name</th>
                                <th>Email</th>
                                <th>Edit/Delete</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>John Doe</td>
                                <td>Group A</td>
                                <td>john.doe@example.com</td>
                                <td>
                                    <button>Edit</button>
                                    <button>Delete</button>
                                </td>
                                <td>Jane Smith</td>
                                <td>jane.smith@example.com</td>
                                <td><button>Edit</button>
                                    <button>Delete</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>


                </div>
            </div>
  
        </div>
    );
}

export default AdminAddRemoveUsers;
