import React from "react";
import backgroundImage from "../../shared/assets/background.png";

const HomeFavorites = () => {
    return (
        <div
            className="relative w-full h-[370px] bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="relative z-10 text-center">
                <h1 className="font-montserrat font-medium text-[36px] leading-[44px] text-white mb-6">
                    ИЗБРАННЫЕ
                </h1>
                <p className="font-montserrat font-medium text-[32px] leading-[39px] text-white mt-[35px]">
                    Выбери свой автомобиль
                </p>
            </div>
        </div>
    );
};

export default HomeFavorites;


