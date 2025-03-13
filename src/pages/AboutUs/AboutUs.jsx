import React from "react";
import HomeAbout from "./HomeAbout.jsx";

const AboutUs = () => {
    return (
        <div className="text-white w-full">
            <HomeAbout />

            {/* Контакты */}
            <div className="max-w-[700px] mx-auto   ml-[80px]">
                <p className="text-[22px] leading-[29.04px] font-inter font-normal">
                    <strong>Телефон:</strong> +996 XXX XXX XXX<br />
                    <strong>Email:</strong> info@bishkekrealestate.kg<br />
                    <strong>Адрес:</strong> г. Бишкек, ул. Ленина, д. 123
                </p>
                <p className="text-[22px] leading-[29.04px] font-inter font-normal mt-[50px] mb-[60px]">
                    С уважением,<br />
                    Команда "Бишкек AUTO"
                </p>
            </div>
        </div>
    );
};

export default AboutUs;
