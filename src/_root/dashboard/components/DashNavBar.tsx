import Logo from "@/components/shared/Logo";
import { Link, useLocation } from "react-router-dom";

const dashboardTags = [
    // {
    //     name: "Home",
    //     link: "/admin/dashboard/",
    // },
    {
        name: "Appointments",
        link: "/admin/dashboard/appointments/",
    },
    {
        name: "Queries",
        link: "/admin/dashboard/query",
    },
];

const DashNavBar = () => {
    const { pathname } = useLocation();
    return (
        <div className="flex justify-between py-2 px-8">
            <Logo />
            <div className="flex-center">
                <ul className="flex gap-8">
                    {dashboardTags.map((tag, index) => {
                        const isActive = pathname === tag.link;
                        return (
                            <Link
                                key={index}
                                to={tag.link}
                                className={`relative after:content-[''] after:absolute after:left-0 after:-bottom-1 hover:after:w-[80%] after:h-1 ${
                                    isActive
                                        ? "after:w-[80%] text-red-700"
                                        : "after:w-0"
                                } after:bg-red-400 after:rounded-t-sm after:transition-all after:duration-300 after:ease-in-out cursor-pointer hover:text-red-700`}
                            >
                                {tag.name}
                            </Link>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default DashNavBar;
