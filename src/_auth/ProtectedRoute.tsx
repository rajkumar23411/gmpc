import { useUserContext } from "@/context/AuthContext";

import { Navigate } from "react-router-dom";
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const { isAuth } = useUserContext();

    return <>{isAuth ? children : <Navigate to="/admin/login" />}</>;
};

export default ProtectedRoute;
