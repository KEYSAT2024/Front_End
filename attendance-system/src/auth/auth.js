import { useState, createContext, useContext } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate hook

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [username, setUsername] = useState(null); // Changed from 'user' to 'username'
  const [password, setPassword] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate hook

  const login = async (username, password) => { // Changed from 'user' to 'username'
    // Store username in local storage. Probably replace this
    localStorage.setItem('username', username.toString());

    try {
      // Make API call
      const response = await axios.post("http://127.0.0.1:8080/auth/login", {
        username, // Changed from 'user' to 'username'
        password,
      });
      
      // Process response
      const { authorization, roles, message } = response.data;
      localStorage.setItem('auth', authorization); // Store the token
      localStorage.setItem('roles', JSON.stringify(roles));
      console.log(message); // Log success message
      navigate('/'); // Redirect to home page after successful login
      return response; // Return the response
    } catch (error) {
      console.error('Login error:', error); // Log error message
      return Promise.reject(error); // Reject the promise
    }
  };

  const logout = () => {
    console.log('logging out');
    localStorage.clear();
    window.location.href = '/';
  };

  return (
    <AuthContext.Provider value={{ username, password, login, logout }}> {/* Changed from 'user' to 'username' */}
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export const RequireAuth = ({ children, allowedRoles }) => {
  const { token, roles } = useAuth();
  const isAuthorized =
    roles && roles?.some((role) => allowedRoles.includes(role));
  return token && isAuthorized ? children : <Link to="/" />;
};
