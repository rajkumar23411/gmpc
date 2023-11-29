import { createContext, useContext, useEffect, useState } from "react";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase/config";
import { useNavigate } from "react-router-dom";

type ICredentials = {
    email: string;
    password: string;
};

type IUser = {
    email: string | null | undefined;
};

type IAuthContext = {
    user: IUser | null;
    setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
    isLoading: boolean;
    isAuth: boolean;
    setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
    error: string | null | undefined;
    setError: React.Dispatch<React.SetStateAction<string>>;
    logIn: (credentials: ICredentials) => Promise<void>;
};

const INITIAL_STATE: IAuthContext = {
    user: null,
    setUser: () => {},
    isLoading: false,
    isAuth: false,
    setIsAuth: () => {},
    logIn: async () => {},
    error: "",
    setError: () => {},
};

const AuthContext = createContext<IAuthContext>(INITIAL_STATE);

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [user, setUser] = useState<IUser | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isAuth, setIsAuth] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const logIn = async (credentials: ICredentials) => {
        setIsLoading(true);
        try {
            const { email, password } = credentials;

            await signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const loggedInUser = userCredential.user;
                    if (loggedInUser) {
                        setIsAuth(true);
                        setUser({ email: loggedInUser.email });
                        navigate("/admin/dashboard/appointments/");
                    } else {
                        setIsAuth(false);
                    }
                })
                .catch((error) => {
                    switch (error.code) {
                        case "auth/too-many-requests":
                            setError(
                                "Too many requests, please try again later"
                            );
                            break;
                        case "auth/invalid-login-credentials":
                            setError("Invalid login credentials");
                            break;
                        default:
                            setError("Something went wrong, please try again");
                            break;
                    }
                });
        } catch (error) {
            return setError("Something went wrong, please try again");
        } finally {
            setIsLoading(false);
        }
    };

    const checkAuthUser = async () => {
        setIsLoading(true);
        try {
            await onAuthStateChanged(auth, (loggedInUser) => {
                if (loggedInUser) {
                    setIsAuth(true);
                    setUser({ email: loggedInUser.email });
                } else {
                    setIsAuth(false);
                    setUser(null);
                    navigate("/");
                }
            });
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        checkAuthUser();
    }, []);

    const value: IAuthContext = {
        user,
        setUser,
        isLoading,
        isAuth,
        setIsAuth,
        logIn,
        error,
        setError,
    };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
export const useUserContext = () => useContext(AuthContext);
