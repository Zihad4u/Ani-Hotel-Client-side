import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from '../Firebase/Firebase.js';

export const AutoContext = createContext(null);

const AuthContext = ({ children }) => {
    // loading
    const [feature, setFeature] = useState(null);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    // login with email and password
    const loginWithemail = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // feature section data
    useEffect(() => {
        setLoading(true); // Start loading before fetching data
        fetch('https://assignment-11-server-ten-phi.vercel.app/feature')
            .then(res => res.json())
            .then(data => {
                setFeature(data);
                setLoading(false); // End loading after data is fetched
            })
            .catch(() => {
                setLoading(false); // Also end loading in case of an error
            });
    }, []);

    // registration
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // all user store
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('current value of the current user', currentUser);
            setUser(currentUser);
            setLoading(false); // End loading after user state is set
        });

        return () => {
            unSubscribe();
        };
    }, []);

    const authInfo = {
        loading,
        loginWithemail,
        user,
        createUser,
        feature
    };

    return (
        <AutoContext.Provider value={authInfo}>
            {children}
        </AutoContext.Provider>
    );
};

export default AuthContext;
