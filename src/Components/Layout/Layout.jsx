import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Pages/Navbar/Navbar";

const Layout = () => {

    const location = useLocation();
    const noNavbar = location.pathname.includes('dashBoard');

    return (
        <div>
            {noNavbar || <Navbar />}
            <Outlet />
        </div>
    );
};

export default Layout;