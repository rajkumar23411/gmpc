import HealthService from "@/components/shared/HealthService";
import AuthSpeech from "@/components/shared/AuthSpeech";
import FreeService from "@/components/shared/FreeService";
import QuickFacts from "@/components/shared/QuickFacts";
import NewsEvents from "@/components/shared/NewsEvents";
import Banner from "@/components/shared/Banner";
import Docs from "@/components/shared/Docs";
const Home = () => {
    return (
        <div>
            <Banner />
            <HealthService />
            <AuthSpeech />
            <QuickFacts />
            <Docs />
            <FreeService />
            <NewsEvents />
        </div>
    );
};

export default Home;
