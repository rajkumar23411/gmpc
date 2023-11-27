import { socialTags } from "@/lib";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
type SocialIconBoxProps = {
    iconName: string;
    link?: string;
    modify?: boolean;
};

export const SocialIconBox = ({
    iconName,
    link,
    modify,
}: SocialIconBoxProps) => {
    return (
        <div
            className={` text-white ${
                modify && modify
                    ? "h-8 w-8"
                    : "w-6 h-6 md:w-8 md:h-8 text-xs md:text-sm lg:text-base"
            } bg-red-500 rounded-full grid-center cursor-pointer hover:animate-wiggle-more animate-infinite duration-150`}
        >
            <Link to={link!} className={iconName} />
        </div>
    );
};

const TopNavBar = () => {
    const [hide, setHide] = useState(false);
    useEffect(() => {
        window.onscroll = () => {
            if (window.scrollY > 1) {
                setHide(true);
            } else {
                setHide(false);
            }
        };
    }, []);

    return (
        <div
            className={`w-full h-12 ${
                hide ? "h-0 opacity-0" : "flex-between"
            } px-6 py-2 lg:px-8 bg-red-100 bg-opacity-20 transition-all duration-150 ease-in-out`}
        >
            <div className="flex gap-3 lg:gap-6">
                {socialTags.map((tag, index) => (
                    <SocialIconBox
                        key={index}
                        iconName={tag.iconName}
                        link={tag.link}
                    />
                ))}
            </div>
            <div className="flex items-center justify-end gap-4">
                <a href={"tel:+916000453938"} className="flex-center gap-2">
                    <div className="text-xs md:text-sm lg:text-base text-white w-6 h-6 md:w-8 md:h-8 bg-red-500 rounded-full grid-center cursor-pointer hover:animate-wiggle-more animate-thrice duration-100">
                        <i className="fas fa-phone-alt text-sm" />
                    </div>
                    <p className="font-medium text-sm text-red-500 hidden md:block">
                        Appointments: (+91) 60004 53938
                    </p>
                </a>
                <Link
                    to={"/admin/login"}
                    className="hidden md:block bg-main text-white px-2 py-1 text-sm rounded-sm cursor-pointer"
                >
                    ADMIN
                </Link>
            </div>
        </div>
    );
};

export default TopNavBar;
