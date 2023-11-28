import { useEffect, useState } from "react";
import { useUserContext } from "@/context/AuthContext";
import Loader from "@/components/shared/Loader";
import { Link } from "react-router-dom";

const SignInForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { logIn, isLoading, error, setError } = useUserContext();
    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!email || !password) {
            setError("Please fill all the fields");
            return;
        }

        logIn({ email, password });
    };
    useEffect(() => {
        if (error !== "") {
            setTimeout(() => {
                setError("");
            }, 5000);
        }
    }, [error]);
    return (
        <div className="flex-center flex-col">
            <Link to="/">
                <img src="/assets/logo.jpg" alt="logo" className="w-40" />
            </Link>
            <h2 className="font-medium text-2xl pt-5 sm:pt-12 text-main tracking-tighter">
                Log in to your account
            </h2>
            <p className="text-purple-950 font-light">
                Welcome back! please enter your account details
            </p>
            <form className="mt-6 w-full md:w-96" onSubmit={handleFormSubmit}>
                {error && (
                    <div className="h-12 bg-red-50 text-red-600 flex-center rounded-lg border border-red-400 animate-shake animate-twice animate-duration-200 animate-ease-in">
                        {error}
                    </div>
                )}
                <div className="w-full pt-6">
                    <label htmlFor="email" className="text-main">
                        Email*
                    </label>
                    <input
                        type="email"
                        className="w-full border border-gray-500 h-12 rounded-lg pl-2 outline-1 outline-green-500"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="w-full pt-4">
                    <label htmlFor="password" className="text-main">
                        Password*
                    </label>
                    <input
                        type="password"
                        className="w-full border border-gray-500 h-12 rounded-lg pl-2 outline-1 outline-green-500"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                {isLoading ? (
                    <div className="h-12 w-full text-white bg-blue-900 cursor-not-allowed mt-6 font-light gap-2 flex-center rounded-lg">
                        <Loader />
                        Signing in...
                    </div>
                ) : (
                    <button
                        type="submit"
                        className="w-full bg-main text-white h-12 rounded-lg cursor-pointer mt-6"
                    >
                        Sign in
                    </button>
                )}
            </form>
        </div>
    );
};

export default SignInForm;
