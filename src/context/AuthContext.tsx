import { createContext, useContext, useEffect, useState } from "react";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase/config";
import { useNavigate } from "react-router-dom";

type ICredentails = {
    email: string;
    password: string;
};

const INITIALSTATE = {
    user: {
        email: "",
    },
    setUser: () => {},
    isLoading: false,
    isAuth: false,
    setIsAuth: () => {},
    logIn: (credentials: ICredentails) => Promise.resolve(),
};

const AuthContext = createContext(INITIALSTATE);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [isAuth, setIsAuth] = useState(false);
    const navigate = useNavigate();

    const logIn = async (credentials: ICredentails) => {
        setIsLoading(true);
        try {
            const { email, password } = credentials;

            await signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    if (user) {
                        setIsAuth(true);
                        setUser({
                            email: user.email,
                        });
                        navigate("/admin/dashboard");
                    } else {
                        setIsAuth(false);
                    }
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode, errorMessage);
                });
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    const checkAuthUser = async () => {
        setIsLoading(true);
        try {
            await onAuthStateChanged(auth, (user) => {
                if (user) {
                    setIsAuth(true);
                    setUser({
                        email: user.email,
                    });
                    return true;
                } else {
                    setIsAuth(false);
                }
            });
            return false;
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };
    useEffect(() => {
        checkAuthUser();
    }, []);

    const value = {
        user,
        setUser,
        isLoading,
        isAuth,
        setIsAuth,
        checkAuthUser,
        logIn,
    };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};
export default AuthProvider;
export const useUserContext = () => useContext(AuthContext);
