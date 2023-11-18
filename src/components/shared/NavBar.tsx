import { useState } from "react";
import MobileMenu from "./MobileMenu";
import { NavTags } from "@/lib";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "./Logo";
const Circle = () => {
    return <div className="h-2 w-2 bg-green-600 rounded-full"></div>;
};
const NavBar = () => {
    const [isBarsClicked, setIsBarsClicked] = useState(false);
    const location = useLocation().pathname;
    return (
        <div className="flex items-center justify-between p-4">
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
            <MobileMenu
                isBarsClicked={isBarsClicked}
                setIsBarsClicked={setIsBarsClicked}
            />
        </div>
    );
};

export default NavBar;
