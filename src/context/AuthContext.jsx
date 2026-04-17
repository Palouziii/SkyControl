import { createContext, useContext, useState } from "react";
import AuthService from "../services/AuthService";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(AuthService.getUser());

  const login = async (login, password) => {
    const data = await AuthService.login(login, password);
    setUser(data.users);

    return data;
  };

  const logout = () => {
    AuthService.logout();
    setUser(null); 
  };

  const value = {
    user,
    login,
    logout,
    isConnected: !!user,
    isAdmin: user?.role === "ADMIN",
  };

  return (
    <AuthContext.Provider value={value}> {children} </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
