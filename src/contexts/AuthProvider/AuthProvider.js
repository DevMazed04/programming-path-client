import {
   createUserWithEmailAndPassword,
   getAuth,
   onAuthStateChanged,
   signInWithEmailAndPassword,
   signInWithPopup,
   signOut,
   updateProfile,
} from "firebase/auth";
import React, { useEffect, useState } from "react";
import { createContext } from "react";
import app from "../../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);

   const providerLogin = (provider) => {
      setLoading(true);
      return signInWithPopup(auth, provider);
   };

   const createUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
   };

   const logIn = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
   };

   const updateUserProfile = (profile) => {
      return updateProfile(auth.currentUser, profile);
   };

   const logOut = () => {
      setLoading(true);
      return signOut(auth);
   };

   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
         setUser(currentUser);
         console.log("auth state changed:", currentUser);
         setLoading(false);
      });
      return () => {
         unsubscribe();
      };
   }, []);

   const authInfo = {
      user,
      loading,
      providerLogin,
      createUser,
      logIn,
      logOut,
      updateUserProfile,
   };

   return (
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
   );
};

export default AuthProvider;
