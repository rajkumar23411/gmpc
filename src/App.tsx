import { Routes, Route } from "react-router-dom";
import "./global.css";
import RootLayout from "./_root/RootLayout";
import Home from "./_root/pages/Home";

const App = () => {
    return (
        <main className="flex h-screen w-screen">
            <Routes>
                <Route element={<RootLayout />}>
                    <Route path="/" element={<Home />} />
                </Route>
            </Routes>
        </main>
    );
};

export default App;
