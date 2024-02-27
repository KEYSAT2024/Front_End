import { useState, createContext, useContext } from "react";
import axios from "axios";
import { Link, redirect } from "react-router-dom";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [password, setPassword] = useState(null);

  const login = async (user, password) => {
    // store username in local storage. Probably replace this
    localStorage.setItem("username", user.toString());

    // API call

    // const response = await axios.post("http://127.0.0.1:8080/auth/login", {
    //   user,
    //   password,
    // });
    // return response;

    // returns temp headers for testing
    // replace with API call
    if (user.toString() === "admin" && password.toString() === "admin")
      return {
        authorization: "Basic c3VwZXJ1c2VyMjpwYXNzd29yZA==",
        roles: ["ROLE_ADMIN", "ROLE_INSTUCTOR"],
        message: "Logged in successfully.",
      };
    else if (user.toString() === "student" && password.toString() === "student")
      return {
        authorization: "Basic c3VwZXJ1c2VyMjpwYXNzd29yZA==",
        roles: ["ROLE_STUDENT"],
        message: "Logged in successfully.",
      };
    else if (
      user.toString() === "instructor" &&
      password.toString() === "instructor"
    )
      return {
        authorization: "Basic c3VwZXJ1c2VyMjpwYXNzd29yZA==",
        roles: ["ROLE_INSTRUCTOR"],
        message: "Logged in successfully.",
      };
    else console.log("Invalid username or password");
  };

  const logout = () => {
    console.log("logging out");
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <AuthContext.Provider value={{ user, password, login, logout }}>
      {children};
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
