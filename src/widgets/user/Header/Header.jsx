import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../../shared/assets/Vector.png";
import { FaSearch } from "react-icons/fa";
import bgImage from "../../../shared/assets/background.png";
import Container from "../../../shared/helpers/Container.jsx";

const Header = () => {
    const location = useLocation();
    const hiddenPages = ["/AdminCarPage", "/AdminAddCar","/login", "/Forgot", "/VerifyForgot"];
    const isHiddenPage = hiddenPages.some((path) => location.pathname.startsWith(path));

    if (isHiddenPage) return null;

    const isAllCarsPage = location.pathname === "/AllCars";
    const [searchTerm, setSearchTerm] = useState("");

    const headerContent = (
        <header
            className={`w-full h-[120px] flex justify-center z-50 transition-all duration-300 ${
                isAllCarsPage ? "relative" : "fixed top-0 left-0 bg-transparent"
            }`}
            style={isAllCarsPage ? {
                backgroundImage: `linear-gradient(270.77deg, #0D0D0E -30.17%, rgba(10, 10, 11, 0.85) 54.39%, #0D0D0E 128.85%), url(${bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                filter: "brightness(2)"
            } : {}}
        >
            <div className={`flex justify-between items-center ${isAllCarsPage ? "w-full px-12" : "w-[1400px] px-12 py-5"}`}>
                <div className={`flex items-center ${isAllCarsPage ? "gap-[20px]" : "gap-[300px]"}`}>
                    <div className="flex items-center gap-2">
                        <img src={logo} alt="Logo" className="w-[40px] h-[40px]" />
                        <span className="text-[30px] font-medium leading-[40px] font-exo text-white">AUTO</span>
                    </div>

                    {isAllCarsPage && (
                        <div className="relative w-[357px] h-[42px] bg-[#0B111C82] border border-white rounded-[30px] flex items-center">
                            <FaSearch className="text-white absolute left-6" />
                            <input
                                type="text"
                                placeholder="Поиск..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="bg-transparent w-full text-white outline-none pl-[50px] pr-4 placeholder-white"
                            />
                        </div>
                    )}

                    <nav className="flex gap-[40px] text-[22px] font-medium leading-[30px] font-montserrat text-white">
                        <Link to="/" className="hover:text-blue-500 ml-[25px]">Главная</Link>
                        <Link to="/about" className="hover:text-blue-500 ml-[25px]">О компании</Link>
                        <Link to="/services" className="hover:text-blue-500 ml-[25px]">Услуги</Link>
                        <Link to="/favorites" className="hover:text-blue-500 ml-[25px]">Избранное</Link>
                    </nav>
                </div>
                <Link
                    to="/register"
                    className="border border-white w-[200px] h-[45px] flex items-center justify-center rounded-[10px] text-white bg-transparent hover:bg-blue-500 transition"
                >
                    Регистрация
                </Link>
            </div>
        </header>
    );

    return isAllCarsPage ? headerContent : <Container>{headerContent}</Container>;
};

export default Header;
