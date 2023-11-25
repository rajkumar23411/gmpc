import { useState, useEffect } from "react";
import MobileMenu from "./MobileMenu";
import { NavTags } from "@/lib";
import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "./Logo";
const Circle = () => {
    return <div className="h-2 w-2 bg-green-600 rounded-full"></div>;
};
const NavBar = () => {
    const [isBarsClicked, setIsBarsClicked] = useState(false);
    const location = useLocation().pathname;
    // const [isWindowScrolled, setIsWindowScrolled] = useState(false);
    // const isWindowScrolledRef = useRef(isWindowScrolled);

    useEffect(() => {
        // const handleScroll = () => {
        //     if (window.scrollY > 1) {
        //         console.log("scrolled");
        //         if (!isWindowScrolledRef.current) {
        //             setIsWindowScrolled(true);
        //         }
        //     } else {
        //         console.log("not scrolled");
        //         if (isWindowScrolledRef.current) {
        //             setIsWindowScrolled(false);
        //         }
        //     }
        // };
        const handleClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const parentElement = target.parentElement as HTMLElement;
            if (
                parentElement.classList.contains("mobile-menu") ||
                target.classList.contains("fa-bars")
            )
                setIsBarsClicked(true);
        };

        document.addEventListener("click", handleClick);
        // window.addEventListener("scroll", handleScroll);
        // Cleanup function to remove the event listener when the component unmounts
        return () => {
            document.removeEventListener("click", handleClick);
            // window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            className={`flex items-center w-full justify-between p-4 overflow-hidden bg-white`}
        >
            <div>
                <Logo />
            </div>
            <div>
                <p
                    className={`fal fa-bars text-3xl md:hidden`}
                    onClick={() => setIsBarsClicked(true)}
                ></p>
                <div className="hidden md:flex items-center gap-8">
                    {NavTags.map((tag, index) => {
                        const isActive = location === tag.href;
                        return (
                            <NavLink
                                to={tag.href}
                                key={index}
                                className={`${
                                    isActive && "text-green-600 font-medium"
                                } flex items-center justify-center gap-2 cursor-pointer hover:text-green-600 transition-all duration-150`}
                            >
                                {isActive && <Circle />}
                                {tag.name}
                            </NavLink>
                        );
                    })}
                </div>
            </div>
            <Link
                to={"/appointment"}
                className="bg-[#1d3557] text-white px-8 py-2 rounded-lg cursor-pointer hover:bg-red-950 hidden md:block"
            >
                Book An Appointment
            </Link>
            <MobileMenu
                isBarsClicked={isBarsClicked}
                setIsBarsClicked={setIsBarsClicked}
            />
        </div>
    );
};

export default NavBar;
