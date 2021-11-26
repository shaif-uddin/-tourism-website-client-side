import { useEffect, useState } from 'react';
import {
    getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, onAuthStateChanged,
    signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, updateProfile
} from "firebase/auth";
import initializeAuthentication from '../Firebase/Firebase.init';

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState();
    const [loading, setLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();

    const createNewUser = (email, pass) => {
        return createUserWithEmailAndPassword(auth, email, pass)
            .finally(() => {
                setLoading(false);
            });
    }

    // This setUserInfo set user name during registration and showed in header after updated this in shorter duration
    const setUserInfo = (userName) => {
        setLoading(true);
        updateProfile(auth.currentUser, {
            displayName: userName
        }).then(() => {
            setLoading(false);
        }).catch((error) => {
        });
    }

    const signWithEmailPass = (email, pass) => {
        return signInWithEmailAndPassword(auth, email, pass)
            .finally(() => {
                setLoading(false);
            });
    }

    const signWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
            .finally(() => setLoading(false));
    }

    const signWithGithub = () => {
        return signInWithPopup(auth, gitHubProvider)
            .finally(() => setLoading(false));
    }

    const logOut = () => {
        setLoading(true);
        signOut(auth)
            .then(() => setUser({}))
            .catch(error => setError(error.message))
            .finally(() => setLoading(false));
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setLoading(false);
        });
        return () => unsubscribe;
    }, [auth]);

    return {
        auth,
        user,
        setUser,
        setUserInfo,
        loading,
        setLoading,
        error,
        setError,
        signWithGoogle,
        signWithGithub,
        createNewUser,
        signWithEmailPass,
        logOut
    };
};

export default useFirebase;