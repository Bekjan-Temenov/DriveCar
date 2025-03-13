import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Layout = () => {
    const location = useLocation();
    const hideHeaderAndFooter = location.pathname === "/register";

    return (
        <div>
            {/*{!hideHeaderAndFooter && <Header />}*/}
            <Outlet />

        </div>
    );
};

export default Layout;
