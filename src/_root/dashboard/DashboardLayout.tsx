import { Outlet } from "react-router-dom";
import DashNavBar from "./components/DashNavBar";

const DashboardLayout = () => {
    return (
        <div className="w-full flex flex-col">
            <DashNavBar />
            <Outlet />
        </div>
    );
};

export default DashboardLayout;
