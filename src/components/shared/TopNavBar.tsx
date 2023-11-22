import { socialTags } from "@/lib";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
type SocialIconBoxProps = {
    iconName: string;
    link?: string;
};

export const SocialIconBox = ({ iconName, link }: SocialIconBoxProps) => {
    return (
        <div className="text-xs md:text-sm lg:text-base text-white w-6 h-6 md:w-8 md:h-8 bg-[#1d3557] rounded-full grid-center cursor-pointer hover:animate-wiggle-more animate-thrice duration-100">
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
            } px-6 py-2 lg:px-8 bg-[#1d3557] bg-opacity-20 transition-all duration-150 ease-in-out`}
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
            <div className="flex items-center justify-end">
                <a href={"tel:+916003613726"} className="flex-center gap-2">
                    <div className="text-xs md:text-sm lg:text-base text-white w-6 h-6 md:w-8 md:h-8 bg-[#1d3557] rounded-full grid-center cursor-pointer hover:animate-wiggle-more animate-thrice duration-100">
                        <i className="fas fa-phone-alt" />
                    </div>
                    <p className="font-medium text-[#1d3557] hidden md:block">
                        Appointments: +91&nbsp;60036&nbsp;13726
                    </p>
                </a>
            </div>
        </div>
    );
};

export default TopNavBar;
