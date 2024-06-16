import { Routes, Route } from "react-router-dom";
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
import DashboardLayout from "./_root/dashboard/DashboardLayout";
import DashboardAppointments from "./_root/dashboard/pages/DashboardAppointments";
import DashboardQueries from "./_root/dashboard/pages/DashboardQueries";
import Staff from "./_root/pages/Staff";
import DocTimings from "./_root/pages/DocTimings";

const App = () => {
    return (
        <main className="flex h-screen w-screen">
            <Routes>
                <Route element={<RootLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/care" element={<PatientsCare />} />
                    <Route path="/appointment" element={<Appointment />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/gmpc-staff" element={<Staff />} />
                    <Route path="/doctor-timing" element={<DocTimings />} />
                </Route>
                <Route element={<AuthLayout />}>
                    <Route path="/admin/login" element={<SignInForm />} />
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
