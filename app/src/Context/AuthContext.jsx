import React, { useState } from "react";
import { createContext, useContext } from "react";
import {
  logInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "../services/authService";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();

  const login = async (email, password) => {
    const result = await logInWithEmailAndPassword(email, password);
    if (result.error) {
      throw new Error(result.message);
    } else {
      setCurrentUser(result);
    }
  };

  const signup = async (email, name, password) => {
    const result = await createUserWithEmailAndPassword(email, name, password);
    if (result.error) {
      throw new Error(result.message);
    } else {
      await login(email, password);
    }
  };

  const logout = () => {
    console.log("Logout");
    setCurrentUser(null);
  };

  const value = { login, signup, currentUser, logout };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
