import { Routes, Route, useLocation } from "react-router-dom";
import "./global.css";
import RootLayout from "./_root/RootLayout";
import Home from "./_root/pages/Home";
import AboutUs from "./_root/pages/AboutUs";
import Services from "./_root/pages/Services";
import PatientsCare from "./_root/pages/PatientsCare";
import Appointment from "./_root/pages/Appointment";
import AuthLayout from "./_auth/AuthLayout";
import SignInForm from "./_auth/forms/SignInForm";
import DashboardHome from "./_root/dashboard/pages/DashboardHome";
import ProtectedRoute from "./_auth/ProtectedRoute";
import Contact from "./_root/pages/Contact";
import { useEffect } from "react";
import DashboardLayout from "./_root/dashboard/DashboardLayout";
import DashboardAppointments from "./_root/dashboard/pages/DashboardAppointments";
import DashboardQueries from "./_root/dashboard/pages/DashboardQueries";

const App = () => {
    const { pathname } = useLocation();
    window.addEventListener("contextmenu", (e) => e.preventDefault());
    window.addEventListener("keydown", (e) => {
        if (e.keyCode === 123) e.preventDefault();
        if (e.ctrlKey && e.shiftKey && e.keyCode === 73) e.preventDefault();
        if (e.ctrlKey && e.shiftKey && e.keyCode === 74) e.preventDefault();
        if (e.ctrlKey && e.keyCode === 85) e.preventDefault();
    });
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }, [pathname]);

    return (
        <main className="flex h-screen w-screen">
            <Routes>
                <Route element={<AuthLayout />}>
                    <Route path="/admin/login" element={<SignInForm />} />
                </Route>

                <Route element={<RootLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/care" element={<PatientsCare />} />
                    <Route path="/appointment" element={<Appointment />} />
                    <Route path="/contact" element={<Contact />} />
                </Route>

                <Route
                    element={
                        <ProtectedRoute>
                            <DashboardLayout />
                        </ProtectedRoute>
                    }
                >
                    <Route
                        path="/admin/dashboard/"
                        element={<DashboardHome />}
                    />
                    <Route
                        path="/admin/dashboard/appointments"
                        element={<DashboardAppointments />}
                    />
                    <Route
                        path="/admin/dashboard/query"
                        element={<DashboardQueries />}
                    />
                </Route>
            </Routes>
        </main>
    );
};

export default App;
