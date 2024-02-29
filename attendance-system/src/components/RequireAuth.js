import { BsExclamationOctagon } from "react-icons/bs";
import { Navigate } from "react-router-dom";

const authToken = () => {
  const token = localStorage.getItem("authorization");
  const roles = JSON.parse(localStorage.getItem("roles"));
  return { token, roles };
};

export const RequireAuth = ({ children, allowedRoles }) => {
  const { token, roles } = authToken();

  const isAuthorized =
    roles && roles?.some((role) => allowedRoles.includes(role));
  return token && isAuthorized ? children : <Navigate to="/" />;
};

