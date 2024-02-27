import { useAuth } from "../auth/auth";
import { Navigate } from "react-router-dom";

export const RequireAuth = ({ children }) => {
  const auth = useAuth();

  if ((!auth.user, !auth.password)) {
    return <Navigate to="/" />;
  }
  return children;
};
