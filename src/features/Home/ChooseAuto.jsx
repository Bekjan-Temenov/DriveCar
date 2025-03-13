import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import Container from "../../shared/helpers/Container.jsx";

const ChooseAuto = () => {
    const [cars, setCars] = useState([]);
    const [favoriteCars, setFavoriteCars] = useState(JSON.parse(localStorage.getItem("favoriteCars")) || []);

    useEffect(() => {
        const storedCars = JSON.parse(localStorage.getItem("cars")) || [];
        setCars(storedCars);
    }, []);

    useEffect(() => {
        localStorage.setItem("favoriteCars", JSON.stringify(favoriteCars));
    }, [favoriteCars]);

    const handleAddToFavorites = (car, e) => {
        e.stopPropagation();
        setFavoriteCars([...favoriteCars, car]);
    };

    return (
        <Container>
            <div className="choose-auto py-10 px-4">
                <h1 className="text-4xl font-bold text-center mb-8 text-white">Наши Автомобили</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {cars.length > 0 ? (
                        cars.slice(0, 4).map((car) => (
                            <div
                                key={car.id}
                                className="relative p-5 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 w-[260px] h-[300px] flex flex-col justify-between border-gray-800-1"
                                style={{
                                    background: "linear-gradient(145deg, #0D0F14, #111520)",
                                    boxShadow: "5px 5px 10px #090B10, -5px -5px 10px #1A1F2A"
                                }}
                                onClick={() => window.location.href = `/cars/${car.id}`}
                            >
                                {/* Марка */}
                                <h2 className="absolute top-5 left-5 text-white text-lg font-semibold">{car.brand}</h2>

                                {/* Модель */}
                                <p className="absolute top-10 left-5 text-gray-400 text-sm">{car.model}</p>

                                {/* Цена */}
                                <p className="absolute bottom-16 left-5 text-white text-xl font-bold">${car.price}</p>

                                {/* Картинка */}
                                <img
                                    src={car.image || "https://via.placeholder.com/300x200"}
                                    alt={car.model}
                                    className="absolute top-[90px] left-1/2 transform -translate-x-1/2 w-[178px] h-[93px] object-cover rounded-md"
                                />

                                {/* Кнопка корзины */}
                                <button
                                    className="absolute bottom-5 right-5 p-3 rounded-lg transition-colors"
                                    style={{
                                        backgroundColor: "#306AD9",
                                        boxShadow: "3px 3px 6px #1B3D88, -3px -3px 6px #4A8AFF"
                                    }}
                                    onClick={(e) => handleAddToFavorites(car, e)}
                                >
                                    <FaShoppingCart size={18} color="white" />
                                </button>
                            </div>
                        ))
                    ) : (
                        <p className="text-white">Нет доступных автомобилей</p>
                    )}
                </div>

                <div className="flex justify-center mt-8">
                    <Link
                        to="/AllCars"
                        className="bg-[#306AD9] text-white py-[18px] px-[32px] rounded-md text-[20px] font-medium leading-[28px] "
                    >
                        Показать еще
                    </Link>
                </div>
            </div>
        </Container>
    );
};

export default ChooseAuto;
