import TopNavBar from "./../components/shared/TopNavBar";
import NavBar from "@/components/shared/NavBar";

import Footer from "@/components/shared/Footer";
import { Outlet } from "react-router-dom";
// import BookAppointment from "@/components/shared/BookAppointMent";

const RootLayout = () => {
    return (
        <div className="w-screen overflow-x-hidden">
            <TopNavBar />
            <NavBar />
            <section className="w-full">
                <Outlet />
            </section>
            <Footer />
        </div>
    );
};

export default RootLayout;
