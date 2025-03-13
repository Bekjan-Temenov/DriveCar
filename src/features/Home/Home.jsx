import React from "react";
import backgroundImage from "../../shared/assets/background.png";
import { FiFacebook, FiInstagram, FiTwitter, FiSend } from "react-icons/fi";

const Home = () => {
    return (
        <div
            className="relative w-full h-[70vh] text-white bg-cover bg-center font-montserrat"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="absolute top-[199px] left-[50%] transform -translate-x-[50%] w-[749px] h-[67px] opacity-100">
                <h1 className="text-[55px] font-medium leading-[67px] text-white text-center">
                    Выбери свой автомобиль
                </h1>
            </div>
            <div className="absolute top-[303px] left-[50%] transform -translate-x-[50%] w-[239px] h-[34px] opacity-100">
                <p className="text-[24px] font-normal leading-[33.6px] text-white text-center">
                    Bishkek, Kyrgyzstan
                </p>
            </div>
            <div className="absolute top-[416px] left-[50%] transform -translate-x-[50%] w-[208px] h-[24px] opacity-100">
                <p className="text-[18px] font-normal leading-[23.76px] text-white text-center font-inter">
                    Наши социальные сети
                </p>
            </div>
            <div className="absolute top-[460px] left-[50%] transform -translate-x-[50%] flex gap-6">
                <a href="#" className="text-white hover:text-blue-400">
                    <FiFacebook size={28} />
                </a>
                <a href="#" className="text-white hover:text-blue-400">
                    <FiInstagram size={28} />
                </a>
                <a href="#" className="text-white hover:text-blue-400">
                    <FiTwitter size={28} />
                </a>
                <a href="#" className="text-white hover:text-blue-400">
                    <FiSend size={28} />
                </a>
            </div>
        </div>
    );
};

export default Home;
