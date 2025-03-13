import React from "react";
import { FiFacebook, FiInstagram, FiTwitter, FiSend } from "react-icons/fi";
import { useLocation } from "react-router-dom";
import Container from "../../../shared/helpers/Container.jsx";
import GlowEffect from "../../../shared/assets/shape.png";
import AutoIcon from "../../../shared/assets/Vector.png";

const Footer = () => {
    const location = useLocation();
    const hiddenPages = ["/AdminCarPage", "/AdminAddCar", "/login", "/Forgot", "/VerifyForgot"];
    const isHiddenPage = hiddenPages.some((path) => location.pathname.startsWith(path));

    if (isHiddenPage) return null;

    return (
        <footer className="relative bg-black text-white w-[1440px] h-[395px] py-8 overflow-hidden">
            {/* Светящиеся элементы */}
            <img
                src={GlowEffect}
                alt="glow"
                className="absolute w-[600px] h-[600px] top-[-150px] left-[-150px] opacity-50 blur-[160px] text-cyan-300"
                style={{ boxShadow: "60px 0 60px rgba(0, 255, 255, 0.3)" }}
            />
            <img
                src={GlowEffect}
                alt="glow"
                className="absolute w-[600px] h-[600px] bottom-[-150px] right-[-150px] opacity-50 blur-[160px] text-cyan-300"
            />

            <Container>
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
                    <div>
                        <h2 className="text-lg font-semibold flex items-center gap-2">
                            <img src={AutoIcon} alt="AUTO" className="w-8 h-8" />
                            <span>AUTO</span>
                        </h2>
                        <p className="text-gray-400 mt-2 max-w-sm">
                            Мы предлагаем лучшие автомобили самых известных мировых брендов.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-2">Компания</h3>
                        <ul className="text-gray-400 space-y-1">
                            <li><a href="/" className="hover:text-white">Главная</a></li>
                            <li><a href="/about" className="hover:text-white">О компании</a></li>
                            <li><a href="/services" className="hover:text-white">Услуги</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-2">Наши социальные сети</h3>
                        <div className="flex space-x-4 text-white">
                            <a href="#" className="hover:text-white"><FiSend size={24} /></a>
                            <a href="#" className="hover:text-white"><FiFacebook size={24} /></a>
                            <a href="#" className="hover:text-white"><FiInstagram size={24} /></a>
                            <a href="#" className="hover:text-white"><FiTwitter size={24} /></a>
                        </div>
                    </div>
                </div>

                {/* Копирайт */}
                <div className="text-center text-gray-600 mt-8 text-sm">
                    © Bedimcode. All rights reserved
                </div>
            </Container>
        </footer>
    );
};

export default Footer;