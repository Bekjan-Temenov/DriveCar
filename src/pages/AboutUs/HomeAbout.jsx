import React from "react";
import backgroundImage from "../../shared/assets/background.png";

const HomeAbout = () => {
    return (
        <div
            className="relative bg-cover bg-center flex flex-col items-center text-white"
            style={{
                backgroundImage: `linear-gradient(270.77deg, #0A0A0B -30.17%, rgba(2, 2, 2, 0) 54.39%, #0A0A0B 128.85%), url(${backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                MaxWidth: "1440px",
                height: "500px",
                top: "-100px",
            }}
        >

            <div className="w-full max-w-[1600px] flex items-center justify-center mt-[210px] px-4">
                <div className="flex-1 h-[1px] bg-white opacity-50"></div>
                <h1 className="mx-4 font-inter text-[22px] leading-[26.63px] text-white text-center">
                    О КОМПАНИИ
                </h1>
                <div className="flex-1 h-[1px] bg-white opacity-50"></div>
            </div>


            <div className="w-[1500px] text-left px-[150px] mr-[171px] mt-[100px]">
                <p className="text-[25px] leading-[35px] font-inter ">
                    Добро пожаловать в "Бишкек AUTO" – Авторынок – это онлайн авторынок, где собрана подробная
                    информация о подержанных и новых машинах, ценах и доступных комплектациях. У нас вы сможете
                    разместить бесплатные объявления о покупке, аренде, продаже авто, коммерческого транспорта,
                    спецтехники и авто услуг по всему Кыргызстану. На сайте вы сможете подобрать легковые автомобили
                    с пробегом, новые, на обмен и в рассрочку. Продажа авто в Бишкеке с фото, в рассрочку и дешево.
                </p>
            </div>

        </div>
    );
};

export default HomeAbout;



