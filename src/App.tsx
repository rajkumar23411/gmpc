import { Routes, Route } from "react-router-dom";
import "./global.css";
import RootLayout from "./_root/RootLayout";
import Home from "./_root/pages/Home";
import AboutUs from "./_root/pages/AboutUs";
import Services from "./_root/pages/Services";
import PatientsCare from "./_root/pages/PatientsCare";
import Appointment from "./_root/pages/Appointment";
import { Contact } from "lucide-react";
import AuthLayout from "./_auth/AuthLayout";
import SignInForm from "./_auth/forms/SignInForm";
import DashboardHome from "./_root/dashboard/DashboardHome";
import ProtectedRoute from "./_auth/ProtectedRoute";

const App = () => {
    return (
        <main className="flex h-screen w-screen">
            <Routes>
                <Route element={<AuthLayout />}>
                    <Route path="/admin/login" element={<SignInForm />} />
                </Route>
                <Route
                    path="/admin/dashboard/"
                    element={
                        <ProtectedRoute>
                            <DashboardHome />
                        </ProtectedRoute>
                    }
                />
                <Route element={<RootLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/care" element={<PatientsCare />} />
                    <Route path="/appointment" element={<Appointment />} />
                    <Route path="/contact" element={<Contact />} />
                </Route>
            </Routes>
        </main>
    );
};

export default App;
