import React from "react";
import Container from "../../shared/helpers/Container.jsx";
import backgroundLogo from "../../shared/assets/Vector 2.png";
import cardLogo from "../../shared/assets/rule.png";

const services = [
    "Оценка автомобиля",
    "Подготовка к продаже",
    "Комиссионная продажа",
    "Консультация по рынку",
    "Трейд-ин",
    "Фотосъемка и создание объявлений",
];

const Services = () => {
    return (
        <div
            className="relative w-full min-h-[80vh] bg-cover bg-center py-10"
            style={{
                backgroundImage: `url(${backgroundLogo})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center -20px",
                backgroundSize: "600px auto",
            }}
        >
            <Container>
                <section className="text-center">
                    <h2 className="text-2xl font-bold mb-10">НАШИ УСЛУГИ</h2>
                    <div className="grid grid-cols-3 gap-10 justify-center">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="relative flex items-center justify-center text-center p-6 rounded-lg border border-white backdrop-blur-md shadow-lg"
                                style={{
                                    width: "386px",
                                    height: "160px",
                                    background: "#FFFFFF1A",
                                }}
                            >

                                <img
                                    src={cardLogo}
                                    alt="logo"
                                    className="absolute top-[-25px] p-2 rounded-full"
                                    style={{ width: "53.9px", height: "53.72px", background: "transparent" }}
                                />

                                <span className="text-lg font-semibold text-white">{service}</span>
                            </div>
                        ))}
                    </div>
                </section>
            </Container>
        </div>
    );
};

export default Services;