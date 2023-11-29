import { NavTags, socialTags } from "@/lib";
import { Link } from "react-router-dom";
import { SocialIconBox } from "./TopNavBar";
type AddressBoxProps = {
    icon: string;
    text: string;
};

const AddressBox = ({ icon, text }: AddressBoxProps) => {
    return (
        <div className="flex items-center gap-2">
            <p className="h-8 w-8 bg-red-500 rounded-full flex-center">
                <i className={`${icon} text-white`}></i>
            </p>
            <p className="text-white font-sans">{text}</p>
        </div>
    );
};

const FooterHeading = ({ heading }: { heading: string }) => {
    return (
        <h1 className=" text-white text-lg relative before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-12 before:h-1 before:bg-red-600">
            {heading}
        </h1>
    );
};
const Footer = () => {
    return (
        <div className="bg-[#1d3557] h-max flex-center flex-col">
            <div className="flex flex-col md:flex-row justify-between p-8 md:p-10 md:gap-6">
                <div className="flex-1">
                    <FooterHeading heading="About Us" />
                    <div className="flex flex-col gap-4 py-10">
                        <p className="text-white font-sans">
                            GMPC ( Gohpur Medicos & Pharma Clinic ) is a
                            multi-speciality health care unit where we strive to
                            provide exceptional healthcare service to our valued
                            patients.
                        </p>
                        <div className="flex flex-col gap-4 mt-8">
                            <AddressBox
                                icon="fal fa-map-marker-alt"
                                text=" Address: Kalabari, Gohpur, Biswanath, 784178"
                            />
                            <AddressBox
                                icon="fal fa-phone"
                                text="Phone: (+91) 60004 53938"
                            />
                            <AddressBox
                                icon="fal fa-phone"
                                text="Emergency: (+91) 60036 13726"
                            />
                            <AddressBox
                                icon="fal fa-envelope"
                                text="Email: gmpcplus2023@gmail.com"
                            />
                        </div>
                        <div className="flex items-center justify-center md:justify-start gap-4 lg:gap-6 mt-6">
                            {socialTags.map((tag, index) => (
                                <SocialIconBox
                                    key={index}
                                    iconName={tag.iconName}
                                    link={tag.link}
                                    modify={true}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex-1">
                    <FooterHeading heading="Quick Links" />
                    <div className="py-10 flex flex-col gap-4">
                        {NavTags.map((tag, index) => (
                            <Link
                                to={tag.href}
                                key={index}
                                className="hover:translate-x-3 cursor-pointer group transition-all duration-150 w-max"
                            >
                                <i className="fal fa-angle-right text-white w-6 text-lg group-hover:text-red-500"></i>
                                <span className="font-sans text-white group-hover:text-red-500">
                                    {tag.name}
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="flex-1">
                    <FooterHeading heading="Post Your Query" />
                    <div className="pt-10 flex flex-col gap-4">
                        <input
                            type="text"
                            placeholder="Name*"
                            className="w-full h-12 pl-2 rounded-lg bg-transparent border border-white placeholder:text-red-500 text-white resize-none outline-none focus:border-red-500"
                        />
                        <input
                            type="text"
                            placeholder="Phone*"
                            className="w-full h-12 pl-2 rounded-lg bg-transparent border border-white placeholder:text-red-500 text-white resize-none outline-none focus:border-red-500"
                        />
                        <input
                            type="text"
                            placeholder="Email*"
                            className="w-full h-12 pl-2 rounded-lg bg-transparent border border-white placeholder:text-red-500 text-white resize-none outline-none focus:border-red-500"
                        />
                        <textarea
                            rows={5}
                            placeholder="Your Query*"
                            className="w-full pl-2 rounded-lg bg-transparent border border-white placeholder:text-red-500 text-white resize-none outline-none focus:border-red-500"
                        />
                        <button className="bg-red-600 h-12 font-medium rounded-lg uppercase text-white font-sans hover:bg-red-700">
                            Send Query
                        </button>
                    </div>
                </div>
            </div>
            <div className="text-white py-4 text-center ">
                &copy; Copyright 2023 | GMPC - All Rights Reserved | Developed
                By{" "}
                <Link
                    to={
                        "https://www.linkedin.com/in/rajkumar-kalita-9a854a270/"
                    }
                    className="text-red-600 font-medium"
                >
                    Rajkumar
                </Link>
            </div>
        </div>
    );
};

export default Footer;
