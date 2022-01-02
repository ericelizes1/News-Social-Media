/*
import React, { useState, useEffect, useContext } from 'react';
import { auth } from '../../firebase';

const AuthContext = React.createContext<any>({} as any);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(setUser);
  }, []);

  const handleSignUp = (email:string, password:string) => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Registered with:', user.email);
      })
      .catch(error => {
        console.log(error.message);
        alert("Signup unsuccessful.");
      })
  }

  const handleLogin = (email:string, password:string) => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Logged in with:', user.email);
      })
      .catch(error => {
        console.log(error.message);
        alert("Login unsuccessful.");
      })
  }

  const handleLogout = (email:string, password:string) => {
    auth
      .logout()
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Logged out of:', user.email);
      })
      .catch(error => {
        console.log(error.message);
        alert("Logout unsuccessful.");
      })
  }

  const value = {
    user,
    handleSignUp,
    handleLogin,
    handleLogout
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
*/