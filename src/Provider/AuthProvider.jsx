import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/Firebase.init";
import { GoogleAuthProvider } from "firebase/auth";

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Sign Up
  const createUser = (email, password) =>
      {
         setLoading(true);
    createUserWithEmailAndPassword(auth, email, password);
      }
  // sign in
  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // sign out
  const logOut = () => {
    return signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  // User update
const updateUser =(updatedData)=>{
    return updateProfile(auth.currentUser,updatedData)
} 

// signIN with google 
const googleProvider= new GoogleAuthProvider()
const SignInWithGoogle=()=>{
  return signInWithPopup(auth,googleProvider)
}

  const authData = {
    user,
    setUser,
    loading,
    setLoading,
    createUser,
    logIn,
    logOut,
    updateUser,
    SignInWithGoogle
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
