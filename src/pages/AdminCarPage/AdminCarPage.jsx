import React, { useState, useEffect } from "react";
import AdminLayout from "../../widgets/user/Header/Adminheader.jsx";
import deleteIcon from '../../shared/assets/delete.png';
import changeIcon from '../../shared/assets/Change.png';

const AdminCarPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [carList, setCarList] = useState(JSON.parse(localStorage.getItem("cars")) || []);
    const [editingCar, setEditingCar] = useState(null);
    const [newCar, setNewCar] = useState({
        brand: "",
        model: "",
        description: "",
        year: "",
        mileage: "",
        body: "",
        steering: "",
        price: "",
        engine: "",
        condition: "",
        transmission: "",
        color: "",
        images: [],
    });

    useEffect(() => {
        localStorage.setItem("cars", JSON.stringify(carList));
    }, [carList]);

    const handleAddCar = () => {
        if (!newCar.brand || !newCar.model || !newCar.price) {
            return alert("Заполните все обязательные поля!");
        }

        const newCarWithId = { ...newCar, id: editingCar ? editingCar.id : Date.now() };
        if (editingCar) {
            setCarList(carList.map(car => car.id === editingCar.id ? { ...editingCar, ...newCar } : car));
            setEditingCar(null);
        } else {
            setCarList([...carList, newCarWithId]);
        }

        setIsModalOpen(false);
        setNewCar({
            brand: "",
            model: "",
            description: "",
            year: "",
            mileage: "",
            body: "",
            steering: "",
            price: "",
            engine: "",
            condition: "",
            transmission: "",
            color: "",
            images: [],
        });
    };

    const handleImageUpload = (event) => {
        const files = Array.from(event.target.files).map(file => URL.createObjectURL(file));
        setNewCar(prev => ({ ...prev, images: [...prev.images, ...files].slice(0, 10) }));
    };

    return (
        <div className="bg-[#0A0A0B] min-h-screen text-white pl-6">
            <AdminLayout/>
            <main className="flex flex-col items-center h-screen">
                <div className="absolute top-[100px] left-[360px] h-[859px] w-[996px] bg-[#0C192E7A] shadow-md p-4">
                    <div className="flex justify-between items-center border-b border-gray-600 pb-4">
                        <h1 className="text-3xl ml-[40px] font-lato">Мои машины</h1>
                        <button onClick={() => setIsModalOpen(true)}
                                className="bg-blue-600 h-[40px] w-[204px] rounded mr-[40px]">
                            + Добавить
                        </button>
                    </div>
                    <table className="w-full mt-4 border-collapse text-white table-fixed">
                        <thead>
                        <tr className="border-b border-gray-600">
                            <th className="p-4 text-center w-24">Фото</th>
                            <th className="p-4 text-center w-32">Марка</th>
                            <th className="p-4 text-center w-32">Модель</th>
                            <th className="p-4 text-center w-24">Цена</th>
                            <th className="p-4 text-center w-32">Действия</th>
                        </tr>
                        </thead>
                        <tbody>
                        {carList.map(car => (
                            <tr key={car.id} className="border-b border-gray-600">
                                <td className="p-4 text-center">
                                    <img
                                        src={car.images?.[0] || "/placeholder.jpg"}
                                        alt={car.brand}
                                        className="w-20 h-16 rounded mx-auto"
                                    />
                                </td>
                                <td className="p-4 text-center align-middle">{car.brand}</td>
                                <td className="p-4 text-center align-middle">{car.model}</td>
                                <td className="p-4 text-center align-middle">{car.price}</td>
                                <td className="p-4 flex justify-center items-center gap-4">
                                    <div className="flex items-center mt-4">
                                        <button className="flex items-center justify-center text-red-500">
                                            <img src={deleteIcon} alt="Delete" className="w-4 h-4"/>
                                        </button>

                                        <div className="mx-6 border-l-2 border-gray-300" style={{height: '24px'}}></div>

                                        <button className="flex items-center justify-center text-gray-400">
                                            <img src={changeIcon} alt="Change" className="w-4 h-4"/>
                                        </button>
                                    </div>

                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </main>


            {isModalOpen && (
                <div
                    className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-gray-900 p-6 rounded-lg  relative">
                    <div className="bg-blue-800 h-[83px] w-[600px] text-white text-2xl font-semibold">
                            Добавить машину
                        </div>
                        <div className="mt-6 ml-[190px] text-white text-xl font-semibold">Марка и модель</div>
                        <div className="grid grid-cols-5 gap-2 mt-4">
                            {newCar.images.map((img, i) => (
                                <img key={i} src={img} alt="car" className="w-16 h-16 object-cover rounded"/>
                            ))}
                        </div>
                        <div className="mt-4">
                            <input type="file" multiple onChange={handleImageUpload} className="hidden" id="upload"/>
                            <label htmlFor="upload"
                                   className="block text-center bg-blue-600 px-4 py-2 rounded cursor-pointer">
                                Загрузите изображение
                            </label>
                        </div>
                        <div className="mt-6 border-t border-gray-600"></div>
                        <div className="mt-6 text-white text-xl font-semibold">Добавить обзор активности</div>
                        <div className="grid grid-cols-2 gap-4">
                            <input
                                className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400"
                                placeholder="Марка"
                                value={newCar.brand}
                                onChange={(e) => setNewCar({...newCar, brand: e.target.value})}
                            />
                            <input
                                className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400"
                                placeholder="Модель"
                                value={newCar.model}
                                onChange={(e) => setNewCar({...newCar, model: e.target.value})}
                            />
                            <input
                                className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400"
                                placeholder="Цена ($)"
                                type="number"
                                value={newCar.price}
                                onChange={(e) => setNewCar({...newCar, price: e.target.value})}
                            />
                        </div>

                        <div className="mt-6 flex justify-between">
                            <button onClick={() => setIsModalOpen(false)} className="bg-gray-600 px-4 py-2 rounded">
                                Назад
                            </button>
                            <button onClick={handleAddCar} className="bg-blue-600 px-4 py-2 rounded">
                                Сохранить и опубликовать
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminCarPage;
