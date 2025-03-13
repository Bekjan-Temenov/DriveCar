import React, { useState, useEffect } from "react";
import { FaChevronDown, FaChevronUp, FaShoppingCart } from "react-icons/fa";
import Banners from "./banners.jsx";

const AllCars = () => {
    const [selectedPrice, setSelectedPrice] = useState({ min: "", max: "" });
    const [selectedBrand, setSelectedBrand] = useState("");
    const [selectedModel, setSelectedModel] = useState("");
    const [selectedYear, setSelectedYear] = useState({ min: "", max: "" });
    const [filteredCars, setFilteredCars] = useState([]);
    const [sortBy, setSortBy] = useState("alphabet");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [priceOpen, setPriceOpen] = useState(false);
    const [brandOpen, setBrandOpen] = useState(false);
    const [modelOpen, setModelOpen] = useState(false);
    const [yearOpen, setYearOpen] = useState(false);

    useEffect(() => {
        const savedCars = JSON.parse(localStorage.getItem("cars")) || [];
        setFilteredCars(savedCars);
    }, []);

    const brands = [
        "Honda", "Toyota", "Audi", "BMW", "Daewoo", "Hyundai", "Kia",
        "Land Rover", "Mercedes-Benz", "Lexus", "Porsche", "Subaru",
        "Mazda", "Nissan", "Volkswagen", "Chevrolet",
    ];

    return (
        <main className="all-cars py-10 px-4 from-gray-900 to-black min-h-screen">
            <Banners />

            <div className="flex gap-8 items-start">
                <div
                    className="filters w-[400px] h-[869px] bg-[#161A21] p-6 rounded-[10px] shadow-lg overflow-hidden ml-[80px] self-start">
                    {[{
                        label: "Цена",
                        state: priceOpen,
                        setState: setPriceOpen,
                        inputs: selectedPrice,
                        setInputs: setSelectedPrice
                    },
                        {
                            label: "Марка",
                            state: brandOpen,
                            setState: setBrandOpen,
                            options: brands,
                            setSelected: setSelectedBrand
                        },
                        {label: "Модель", state: modelOpen, setState: setModelOpen, setSelected: setSelectedModel},
                        {
                            label: "Год",
                            state: yearOpen,
                            setState: setYearOpen,
                            inputs: selectedYear,
                            setInputs: setSelectedYear
                        }].map(({label, state, setState, inputs, setInputs, options, setSelected}) => (
                        <div className="mb-5" key={label}>
                            <button
                                className="text-white text-sm flex justify-between w-full border border-white p-2 rounded-md"
                                onClick={() => setState(!state)}>
                                {label} {state ? <FaChevronUp/> : <FaChevronDown/>}
                            </button>
                            {state && inputs && (
                                <div className="flex gap-2 mt-2">
                                    <input type="number" placeholder="от"
                                           className="w-1/2 py-2 px-3 rounded bg-[#161A21] text-white text-sm border border-white"
                                           onChange={(e) => setInputs({...inputs, min: e.target.value})}/>
                                    <input type="number" placeholder="до"
                                           className="w-1/2 py-2 px-3 rounded bg-[#161A21] text-white text-sm border border-white"
                                           onChange={(e) => setInputs({...inputs, max: e.target.value})}/>
                                </div>
                            )}
                            {state && options && (
                                <div className="mt-2 max-h-[451px] overflow-hidden relative">
                                    <div className="absolute w-full h-[1px] bg-white bottom-0"></div>
                                    {options.map((option) => (
                                        <label key={option}
                                               className="block text-white text-sm cursor-pointer flex items-center gap-[11px]">
                                            <input type="checkbox" name={label} value={option}
                                                   onChange={(e) => setSelected(prev => e.target.checked ? [...prev, e.target.value] : prev.filter(v => v !== e.target.value))}/>
                                            {option}
                                        </label>
                                    ))}
                                </div>
                            )}
                            {state && !options && setSelected && (
                                <input type="text" placeholder={`Введите ${label}`}
                                       className="w-full mt-2 py-2 px-3 rounded bg-[#161A21] text-white text-sm border border-white"
                                       onChange={(e) => setSelected(e.target.value)}/>
                            )}
                        </div>
                    ))}
                    <button className="w-full bg-blue-600 text-white p-2 rounded-md mt-5">Применить</button>
                </div>

                <div className="flex flex-col w-full ml-[80px]">
                    <div className="flex justify-between items-center w-full mb-[30px]">
                        <div className="relative inline-block">
                            <button
                                className="bg-transparent text-white p-2 pr-8 rounded outline-none cursor-pointer flex items-center gap-2"
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            >
                                {sortBy === "" ? "По умолчанию" : sortBy === "alphabet" ? "Алфавиту" : "Цене"}
                                {isDropdownOpen ? <FaChevronUp/> : <FaChevronDown/>}
                            </button>
                            {isDropdownOpen && (
                                <div
                                    className="absolute left-0 top-full mt-2 w-full bg-gray-900 text-white rounded shadow-lg z-50">
                                    <div className="p-2 cursor-pointer hover:bg-gray-700" onClick={() => {
                                        setSortBy("");
                                        setIsDropdownOpen(false);
                                    }}>По умолчанию
                                    </div>
                                    <div className="p-2 cursor-pointer hover:bg-gray-700" onClick={() => {
                                        setSortBy("alphabet");
                                        setIsDropdownOpen(false);
                                    }}>Алфавиту
                                    </div>
                                    <div className="p-2 cursor-pointer hover:bg-gray-700" onClick={() => {
                                        setSortBy("price");
                                        setIsDropdownOpen(false);
                                    }}>Цене
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mr-4">
                        {filteredCars.map((car) => (
                            <div key={car.id}
                                 className="relative p-5 w-[285px] h-[312px] rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 mr-[50px] mb-[50px]"
                                 style={{
                                     background: "linear-gradient(145deg, #0D0F14, #111520)",
                                     boxShadow: "5px 5px 10px #090B10, -5px -5px 10px #1A1F2A"
                                 }}>
                                <h2 className="text-white text-lg font-semibold">{car.brand}</h2>
                                <p className="text-gray-400 text-sm">{car.model}</p>
                                <p className="text-white text-xl font-bold">${car.price}</p>
                                <button className="absolute bottom-5 right-5 p-3 rounded-lg bg-blue-600 shadow-md">
                                    <FaShoppingCart size={18} color="white"/>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default AllCars;

