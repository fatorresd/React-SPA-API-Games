import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";
import { types } from "../types/types";

// const initialState = {
//   logged: false,
// };

const init = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return {
    // If user is not null, then logged is true
    logged: !!user,
    user: user,
  };
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {} , init);

  const login = (name = "") => {
    const user = {
      name: name,
      id: "ABC",
    };
    const action = {
      type: types.login,
      payload: user,
    };
    localStorage.setItem("user", JSON.stringify(user));
    dispatch(action);
  };

  const logout = (navigate) => {
    const action = {
      type: types.logout,
    };
    localStorage.removeItem("user");
    navigate("/login", { replace: true });
    dispatch(action);
  }

  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
