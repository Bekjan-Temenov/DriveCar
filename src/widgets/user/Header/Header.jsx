import React from "react";
import Container from "../../../shared/helpers/Container";
import backgroundImage from "../../../shared/assets/background.png";
import { FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";

const Header = () => {
    return (
        <header
            className="relative w-full h-[50vh] text-white bg-cover bg-center font-montserrat"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >

            <div className="w-full flex justify-between items-center py-4 px-6 bg-black bg-opacity-50">
                <Container>
                    <div className="flex justify-between items-center w-full">

                        <div className="text-2xl font-bold">AUTO</div>


                        <nav className="hidden md:flex gap-6">
                            <a href="#" className="hover:text-blue-500">Главная</a>
                            <a href="#" className="hover:text-blue-500">О компании</a>
                            <a href="#" className="hover:text-blue-500">Услуги</a>
                            <a href="#" className="hover:text-blue-500">Избранное</a>
                        </nav>


                        <button className="border px-4 py-2 rounded hover:bg-white hover:text-black transition">
                            Регистрация
                        </button>
                    </div>
                </Container>
            </div>

            <Container>
                <div className="text-center mt-16">
                    <h1 className="text-5xl font-bold">Выбери свой автомобиль</h1>
                    <p className="mt-20 text-2xl">Bishkek, Kyrgyzstan</p>
                </div>
            </Container>


            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-6">
                <a href="#" className="hover:text-blue-400">
                    <FaEnvelope size={28} />
                </a>
                <a href="#" className="hover:text-blue-400">
                    <FaInstagram size={28} />
                </a>
                <a href="#" className="hover:text-blue-400">
                    <FaTwitter size={28} />
                </a>
            </div>
        </header>
    );
};

export default Header;
