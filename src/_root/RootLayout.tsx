import TopNavBar from "./../components/shared/TopNavBar";
import NavBar from "@/components/shared/NavBar";
import Banner from "./../components/shared/Banner";
import HealthService from "@/components/shared/HealthService";
import AuthSpeech from "@/components/shared/AuthSpeech";
import FreeService from "@/components/shared/FreeService";
import QuickFacts from "@/components/shared/QuickFacts";
import NewsEvents from "@/components/shared/NewsEvents";
import Footer from "@/components/shared/Footer";
// import BookAppointment from "@/components/shared/BookAppointMent";

const RootLayout = () => {
    return (
        <div className="w-screen overflow-x-hidden">
            <TopNavBar />
            <NavBar />
            <Banner />
            <HealthService />
            <AuthSpeech />
            <QuickFacts />
            <FreeService />
            {/* <BookAppointment /> */}
            <NewsEvents />
            <Footer />
        </div>
    );
};

export default RootLayout;
