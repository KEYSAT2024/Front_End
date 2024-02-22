import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import StudentDashboardPage from './pages/StudentDashboardPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import AdminCoursesPage from './pages/AdminCoursesPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/student-dashboard' element={<StudentDashboardPage />} />
        <Route path='/admin-dashboard' element={<AdminDashboardPage />} />
        <Route path='/courses' element={<AdminCoursesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
