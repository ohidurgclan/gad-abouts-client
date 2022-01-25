import { signInWithPopup, GoogleAuthProvider,onAuthStateChanged, signOut, getAuth } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Login/Firebase/firebase.init";


initializeAuthentication()
const useFirebase = () =>{
    const [users, setUsers] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();
    const signInUsingGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
            .finally(() => setIsLoading(false));
    }
    useEffect(() =>
    {
        const unsubscribed = onAuthStateChanged(auth, users =>
        {
            if (users)
            {
                setUsers(users);
            }
            else
            {
                setUsers({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, []);

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
    }

    return {
        users,
        isLoading,
        signInUsingGoogle,
        logOut
    }
};

export default useFirebase;