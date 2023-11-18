import TopNavBar from "./../components/shared/TopNavBar";
import NavBar from "@/components/shared/NavBar";
import Banner from "./../components/shared/Banner";
import HealthService from "@/components/shared/HealthService";

const RootLayout = () => {
    return (
        <div className="w-full">
            <TopNavBar />
            <NavBar />
            <Banner />
            <HealthService />
        </div>
    );
};

export default RootLayout;
