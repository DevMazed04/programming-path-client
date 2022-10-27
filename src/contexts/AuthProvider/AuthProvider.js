import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);

   const providerLogin = (provider) => {
      return signInWithPopup(auth, provider);
   }

   const createUser = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password);
   }

   const logIn = (email, password) => signInWithEmailAndPassword(auth, email, password);

   const logOut = () => {
      return signOut(auth)
   }

   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, currentUser => {
         setUser(currentUser);
         console.log('auth state changed:', currentUser);
         setLoading(false);
      })
      return () => {
         unsubscribe();
      }
   }, [])

   const authInfo = { user, providerLogin, createUser, logIn, logOut }

   return (
      <AuthContext.Provider value={authInfo}>
         {children}
      </AuthContext.Provider>
   );
};

export default AuthProvider;