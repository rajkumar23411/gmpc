import TopNavBar from "./../components/shared/TopNavBar";
import NavBar from "@/components/shared/NavBar";
import Banner from "./../components/shared/Banner";
import HealthService from "@/components/shared/HealthService";
import AuthSpeech from "@/components/shared/AuthSpeech";
import FreeService from "@/components/shared/FreeService";
import QuickFacts from "@/components/shared/QuickFacts";

const RootLayout = () => {
    return (
        <div className="w-full">
            <TopNavBar />
            <NavBar />
            <Banner />
            <HealthService />
            <AuthSpeech />
            <FreeService />
            <QuickFacts />
        </div>
    );
};

export default RootLayout;
