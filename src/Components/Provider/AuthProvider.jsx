import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const provider = new GoogleAuthProvider();

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const createAndLogInWithGoogle = () =>{
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    const signIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const userLogout = () =>{
        setLoading(true)
        return signOut(auth);
    }


    const setDisplayName = (user, name) =>{
        updateProfile(user, {
            displayName: name
        })
    }


    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false);
        })

        return () =>{
            unSubscribe()
        }
    },[])

    const authInfo = {
        user,
        loading,
        createUser,
        createAndLogInWithGoogle,
        signIn,
        userLogout,
        setDisplayName
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;