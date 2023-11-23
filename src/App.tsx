import { Routes, Route } from "react-router-dom";
import "./global.css";
import RootLayout from "./_root/RootLayout";
import Home from "./_root/pages/Home";
import AboutUs from "./_root/pages/AboutUs";
import Services from "./_root/pages/Services";
import PatientsCare from "./_root/pages/PatientsCare";
import Appointment from "./_root/pages/Appointment";
import { Contact } from "lucide-react";

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
                </Route>
            </Routes>
        </main>
    );
};

export default App;
