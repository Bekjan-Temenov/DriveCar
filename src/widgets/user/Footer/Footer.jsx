import React from "react";
import { FiFacebook, FiInstagram, FiTwitter, FiSend } from "react-icons/fi";
import { FaCar } from "react-icons/fa";
import Container from "../../../shared/helpers/Container";

const Footer = () => {
    return (
        <footer className="bg-black text-white py-8">
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">

                    <div>
                        <h2 className="text-lg font-semibold flex items-center gap-2">
                            <FaCar size={24} />
                            <span>AUTO</span>
                        </h2>
                        <p className="text-gray-400 mt-2 max-w-sm">
                            Мы предлагаем лучшие автомобили самых известных мировых брендов.
                        </p>
                    </div>


                    <div>
                        <h3 className="text-lg font-semibold mb-2">Компания</h3>
                        <ul className="text-gray-400 space-y-1">
                            <li>
                                <a href="/" className="hover:text-white">Главная</a>
                            </li>
                            <li>
                                <a href="/about" className="hover:text-white">О компании</a>
                            </li>
                            <li>
                                <a href="/services" className="hover:text-white">Услуги</a>
                            </li>
                        </ul>
                    </div>


                    <div>
                        <h3 className="text-lg font-semibold mb-2">Наши социальные сети</h3>
                        <div className="flex space-x-4 text-gray-400">
                            <a href="#" className="hover:text-white">
                                <FiSend size={20} />
                            </a>
                            <a href="#" className="hover:text-white">
                                <FiFacebook size={20} />
                            </a>
                            <a href="#" className="hover:text-white">
                                <FiInstagram size={20} />
                            </a>
                            <a href="#" className="hover:text-white">
                                <FiTwitter size={20} />
                            </a>
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

