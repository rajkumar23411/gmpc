import { useEffect } from "react";
import { getAuth } from "firebase/auth";
const DashboardHome = () => {
    const auth = getAuth();
    console.log(auth);

    useEffect(() => {
        // on refreshing the page, the user is redirected to the login page
    }, []);
    return <div>DashboardHome</div>;
};

export default DashboardHome;
