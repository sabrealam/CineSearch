import React, { createContext, useState, useContext, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword , onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { EclipseIcon } from "lucide-react";

/**
 *
 *
 *
 */

export let AuthContext = createContext();

const firebaseConfig = {
  apiKey: "AIzaSyDUUgx9HZ53PEr0Z_xCZ-8LgdLcTh0-5pg",
  authDomain: "news-4f131.firebaseapp.com",
  databaseURL: "https://news-4f131-default-rtdb.firebaseio.com",
  projectId: "news-4f131",
  storageBucket: "news-4f131.appspot.com",
  messagingSenderId: "1012672873430",
  appId: "1:1012672873430:web:764efd56d64df38c7b9a77",
  measurementId: "G-NENESP1901",
  databaseURL: "https://news-4f131-default-rtdb.firebaseio.com/",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export const useFirebase = () => useContext(AuthContext);
export default function Firebase(props) {
  let [isloggedIn, setIsLoggedIn] = useState(false);


  let createUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        console.log(error);
        // ..
      });
  };

  let setData = () => {
    set(ref(database, "option/"), {
      username: "sabre",
      email: "sabre",
    })
      .then(() => {
        console.log("Data set.");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  let signIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
         setIsLoggedIn(true)
      })
      .catch((error) => {
        console.log(error);
        // ..
      });
  };

  let status = ()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        console.log(uid);
        // ...
      } else {
        // User is signed out
        // ...
        console.log("user Logged out")
      }
    });
  }

  useEffect(()=>{
    history.back();
  },[isloggedIn])
 



  return (
    <AuthContext.Provider value={{ createUser, setData , signIn , isloggedIn}}>
      {props.children}
    </AuthContext.Provider>
  );
}
