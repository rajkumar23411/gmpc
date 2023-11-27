import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <Link to="/">
            <img
                src="/assets/logo.jpg"
                alt="logo"
                className="h-full w-28 sm:w-32 md:w-36 lg:w-40 object-cover mix-blend-multiply"
            />
        </Link>
    );
};

export default Logo;
