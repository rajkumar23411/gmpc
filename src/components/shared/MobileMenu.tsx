import { NavTags } from "@/lib";
import Logo from "./Logo";

type MobileMenuProps = {
    isBarsClicked: boolean;
    setIsBarsClicked: (isBarsClicked: boolean) => void;
};
const MobileMenu = ({ isBarsClicked, setIsBarsClicked }: MobileMenuProps) => {
    return (
        <>
            {isBarsClicked && (
                <div className="h-screen w-screen bg-black bg-opacity-60 absolute top-0 left-0 right-0"></div>
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
                    {NavTags.map((tag, index) => (
                        <div
                            key={index}
                            className="flex items-center  w-full px-6 py-3"
                        >
                            <div
                                className={`${tag.logo} text-2xl h-max w-12 text-red-500`}
                            ></div>
                            <div className="text-gray-800 text-lg font-medium">
                                {tag.name}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default MobileMenu;
