import React, { useState, useEffect, useContext } from 'react';
import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  logout
} from '../../firebase';
import axios from 'axios';
import config from '../../config';

export const AuthContext = React.createContext<any>({} as any);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(setUser);
  }, []);

  const firebaseSignUp = (email:string, password:string, username:string, birthdate:Date) => {
    // auth
    //   .createUserWithEmailAndPassword(email, password)
    //   .then(userCredentials => {
    //     const user = userCredentials.user;
    //     console.log('Registered with:', user.email);
    //   })
    //   .catch(error => {
    //     console.log(error.message);
    //     alert("Signup unsuccessful.");
    //   })
    axios.post(`${config.SERVER_URL}/users/register`, {
      username: username,
      password: password,
      nickname: username,
      birthdate: birthdate,
      created_on: new Date()
    })
    .then(function(response) {
      createUserWithEmailAndPassword(auth, email, password)
        .then(userCredentials => {
          const user = userCredentials.user;
          console.log('Registered with:', user.email);
        })
        .catch(error => {
          console.log(error.message);
          alert("Signup unsuccessful.");
        })
    })
    .catch(function(err) {
      console.log("Failed to create database entry for user.\n" + err);
    })
  }

  const firebaseLogin = (email:string, password:string) => {
    // auth
    //   .signInWithEmailAndPassword(email, password)
    //   .then(userCredentials => {
    //     const user = userCredentials.user;
    //     console.log('Logged in with:', user.email);
    //   })
    //   .catch(error => {
    //     console.log(error.message);
    //     alert("Login unsuccessful.");
    //   })
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Logged in with:', user.email);
      })
      .catch(error => {
        console.log(error.message);
        alert("Login unsuccessful.");
      })
  }

  const firebaseLogout = (email:string, password:string) => {
    // auth
    //   .logout()
    //   .then(userCredentials => {
    //     const user = userCredentials.user;
    //     console.log('Logged out of:', user.email);
    //   })
    //   .catch(error => {
    //     console.log(error.message);
    //     alert("Logout unsuccessful.");
    //   })
    logout(auth)
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
    firebaseSignUp,
    firebaseLogin,
    firebaseLogout
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
