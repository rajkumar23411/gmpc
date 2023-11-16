import TopNavBar from "./../components/shared/TopNavBar";
import NavBar from "@/components/shared/NavBar";

const RootLayout = () => {
    return (
        <div className="w-full">
            <TopNavBar />
            <NavBar />
        </div>
    );
};

export default RootLayout;
