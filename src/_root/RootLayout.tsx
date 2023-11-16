import TopNavBar from "./../components/shared/TopNavBar";
import NavBar from "@/components/shared/NavBar";
import Banner from "./../components/shared/Banner";

const RootLayout = () => {
    return (
        <div className="w-full">
            <TopNavBar />
            <NavBar />
            <Banner />
        </div>
    );
};

export default RootLayout;
