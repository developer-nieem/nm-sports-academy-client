import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";
import {   GoogleAuthProvider, createUserWithEmailAndPassword,  getAuth, onAuthStateChanged, signInWithEmailAndPassword,  signInWithPopup,  signOut, updateProfile } from "firebase/auth";
import axios from "axios";

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
              if(loggedUser){
                axios.post('https://assignment12-server-developer-nieem.vercel.app/jwt', {email: loggedUser.email})
                .then(data => {
                    console.log(data.data.token);
                    localStorage.setItem('access-tk' , data.data.token);
                    setLoading(false);
                })
              }else{
                localStorage.removeItem('access-tk');
              }
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