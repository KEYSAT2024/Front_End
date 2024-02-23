import { useState, createContext, useContext } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [password, setPassword] = useState(null);

  const login = (user, password) => {
    setUser(user);
    setPassword(password);

    // basic authentication. TODO: implement with backend
    if (user.toString() === "admin" && password.toString() === "admin")
      return "admin";
    else if (user.toString() === "student" && password.toString() === "student")
      return "student";
    else return false;
  };

  const logout = () => {
    setUser(null);
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
