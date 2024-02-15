import React, { createContext, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import auth from "../Firebase/Console.Firebase";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [loading, setloading] = useState(false);
  const googleProvider = new GoogleAuthProvider();

  const signInGoggle = () => {
    setloading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const creatUser = (email, password) => {
    setloading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logInUser = (email,password) => {
    setloading(true)
    return signInWithEmailAndPassword(auth,email,password)
  }

  const authInfro = { signInGoggle, creatUser,logInUser };
  return (
    <AuthContext.Provider value={authInfro}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
