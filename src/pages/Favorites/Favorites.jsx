import React, { useState, useEffect } from "react";
import { FaTrash } from "react-icons/fa";
import Container from "../../shared/helpers/Container.jsx";
import HomeFavorites from "./HomeFavorites.jsx";

const Favorites = () => {
    const [favoriteCars, setFavoriteCars] = useState([]);

    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem("favoriteCars")) || [];
        setFavoriteCars(storedFavorites);
    }, []);

    const handleRemoveFromFavorites = (carId, e) => {
        e.stopPropagation();
        const updatedFavorites = favoriteCars.filter((car) => car.id !== carId);
        setFavoriteCars(updatedFavorites);
        localStorage.setItem("favoriteCars", JSON.stringify(updatedFavorites));
    };

    return (
        <>
            <HomeFavorites />
            <Container>
                <div className="favorites py-10 px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {favoriteCars.length > 0 ? (
                            favoriteCars.map((car) => (
                                <div
                                    key={car.id}
                                    className="relative p-5 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 w-[260px] h-[300px] flex flex-col justify-between border-gray-800-1"
                                    style={{
                                        background: "linear-gradient(145deg, #0D0F14, #111520)",
                                        boxShadow: "5px 5px 10px #090B10, -5px -5px 10px #1A1F2A"
                                    }}
                                >
                                    <h2 className="absolute top-5 left-5 text-white text-lg font-semibold">{car.brand}</h2>

                                    <p className="absolute top-10 left-5 text-gray-400 text-sm">{car.model}</p>

                                    <p className="absolute bottom-16 left-5 text-white text-xl font-bold">${car.price}</p>

                                    <img
                                        src={car.image || "https://via.placeholder.com/300x200"}
                                        alt={car.model}
                                        className="absolute top-[90px] left-1/2 transform -translate-x-1/2 w-[178px] h-[93px] object-cover rounded-md"
                                    />

                                    <button
                                        className="absolute bottom-5 right-5 p-3 rounded-lg transition-colors"
                                        style={{
                                            backgroundColor: "#D9534F",
                                            boxShadow: "3px 3px 6px #9E2C28, -3px -3px 6px #FF6B66"
                                        }}
                                        onClick={(e) => handleRemoveFromFavorites(car.id, e)}
                                    >
                                        <FaTrash size={18} color="white"/>
                                    </button>
                                </div>
                            ))
                        ) : (
                            <p className="text-white text-center text-lg">Нет избранных автомобилей</p>
                        )}
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Favorites;
