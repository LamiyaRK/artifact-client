import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from '../firebase/Firebase.init';



const AuthProvider = ({children}) => {
    const provider=new GoogleAuthProvider()
    const [user,setUser]=useState(null);
    const [loader,setLoader]=useState(true);

 const handlesignup=(email,pass)=>{
    setLoader(true)
          return createUserWithEmailAndPassword(auth,email,pass);
 }
const handlelogin=(email,pass)=>{
    setLoader(true)
    return signInWithEmailAndPassword(auth,email,pass)
}
const logout=()=>{
    return signOut(auth);
}
const glogin=()=>{
     
return signInWithPopup(auth,provider)
}
useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,(cuser)=>{
        setUser(cuser)
        setLoader(false)

    })
    return ()=>unsubscribe();
},[])
    const info={
      handlelogin,
      handlesignup,
      user,
      setUser,
      loader,
      setLoader,
      logout,
      glogin
    }
    
    return (
        <div>
            <AuthContext.Provider value={info}>
              {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;