import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <Link to="/">
            <img
                src="/assets/logo.jpg"
                alt="logo"
                className="h-full w-28 lg:w-32 object-cover mix-blend-multiply"
            />
        </Link>
    );
};

export default Logo;
