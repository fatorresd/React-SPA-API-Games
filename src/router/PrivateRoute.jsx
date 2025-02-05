import { useContext } from "react";
import { AuthContext } from "../auth/context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

//al definir children con higher order component, se puede acceder a las propiedades de la ruta
export const PrivateRoute = ({ children }) => {
  const { logged } = useContext(AuthContext);
  const {pathname, search } = useLocation();

  const lastPath = `${pathname}${search}`;
  localStorage.setItem("lastPath", lastPath);
    
  return (logged) ? children : <Navigate to="/login" />;
};
