import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";
import {  FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword,  getAuth, onAuthStateChanged, signInWithEmailAndPassword,  signInWithPopup,  signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const auth = getAuth(app)
    const [user , setUser] =  useState(null);
    const [loading, setLoading] =  useState(true);

    // user created with email & pass
    const registerUser =(email, pass)=>{
        
            return createUserWithEmailAndPassword(auth, email, pass)
    }

    // Update profile

    const userProfile = (name, photo) =>{
       return  updateProfile(auth.currentUser,{
        displayName:name, photoURL:photo
       })
    }

    // social login 
    const providerGl = new GoogleAuthProvider();

    const glLogin =  () => {
        return signInWithPopup(auth, providerGl)
    }
     // Login user 
     const signInUser = (email,pass) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, pass)
    }


    // manage current user 

    useEffect(()=>{
        const unsubscribe =   onAuthStateChanged(auth, (loggedUser) =>{
              setUser(loggedUser);
              setLoading(false);
      })
      return () =>{
          unsubscribe()
      }
      },[])
         
  
      // log out
      const logOut = () =>{
        return  signOut(auth);
      }


    const authInfo ={
        user,
        loading,
        registerUser,
        userProfile,
        glLogin,
        signInUser,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
            </AuthContext.Provider>
    );
};

export default AuthProvider;