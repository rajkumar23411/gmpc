import { NavTags } from "@/lib";
import Logo from "./Logo";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

type MobileMenuProps = {
    isBarsClicked: boolean;
    setIsBarsClicked: (isBarsClicked: boolean) => void;
};
const MobileMenu = ({ isBarsClicked, setIsBarsClicked }: MobileMenuProps) => {
    const location = useLocation().pathname;

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const parentElement = target.parentElement as HTMLElement;
            if (
                parentElement.classList.contains("mobile-menu") ||
                target.classList.contains("fa-bars")
            )
                setIsBarsClicked(true);
            else setIsBarsClicked(false);
        };

        document.addEventListener("click", handleClick);
        return () => {
            document.removeEventListener("click", handleClick);
        };
    }, [isBarsClicked, setIsBarsClicked]);
    return (
        <>
            {isBarsClicked && (
                <div className="h-screen w-screen bg-black bg-opacity-60 fixed top-0 left-0 right-0 z-50 mobile-menu"></div>
            )}
            <div
                className={`h-screen fixed top-0 ${
                    isBarsClicked
                        ? "w-72 opacity-100 left-0"
                        : "w-0 opacity-0 -left-full"
                } bg-white py-6 transition-all duration-500 ease-in-out z-50`}
            >
                <div className="px-4">
                    <Logo />
                </div>
                <div
                    className="fal fa-times absolute top-2 right-4 text-2xl"
                    onClick={() => setIsBarsClicked(false)}
                ></div>
                <div className="flex flex-col mt-6 w-full">
                    {NavTags.map((tag, index) => {
                        const isActive = location === tag.href;
                        return (
                            <Link
                                to={tag.href}
                                key={index}
                                className={`flex items-center  w-full px-6 py-3 ${
                                    isActive && "bg-main"
                                }`}
                            >
                                <div
                                    className={`${tag.logo} text-2xl h-max w-12 text-red-500`}
                                ></div>
                                <div
                                    className={`text-lg font-medium font-sans ${
                                        isActive ? "text-white" : "text-main"
                                    }`}
                                >
                                    {tag.name}
                                </div>
                            </Link>
                        );
                    })}
                </div>
                <Link
                    to={"/admin/login"}
                    className="absolute bottom-10 px-6 flex gap-2 text-lg items-center bg-main text-white py-2 rounded-e-md"
                >
                    <i className="fal fa-lock text-2xl text-red-600"></i>
                    Admin
                </Link>
            </div>
        </>
    );
};

export default MobileMenu;
