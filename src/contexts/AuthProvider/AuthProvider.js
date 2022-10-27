import { getAuth, signInWithPopup } from 'firebase/auth';
import React from 'react';
import { createContext } from 'react';
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
   const user = { displayName: "Mazed Islam" }

   const providerLogin = (provider) => {
      return signInWithPopup(auth, provider);
   }

   const authInfo = { user, providerLogin }

   return (
      <AuthContext.Provider value={authInfo}>
         {children}
      </AuthContext.Provider>
   );
};

export default AuthProvider;