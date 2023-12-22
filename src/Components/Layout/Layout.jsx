import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Pages/Navbar/Navbar";
import Footer from "../Pages/Footer/Footer";

const Layout = () => {

    const location = useLocation();
    const noNavbar = location.pathname.includes('dashBoard');

    return (
        <div>
            {noNavbar || <Navbar />}
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;