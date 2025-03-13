import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AdminLayout from "../../widgets/user/Header/Adminheader.jsx";

// Функция для получения объявлений (эмуляция запроса к API)
export const getAnnouncements = async () => {
    // Здесь должна быть логика получения данных, например:
    return [
        {
            image: "https://via.placeholder.com/150",
            title: "Объявление 1",
            description: "Описание объявления 1",
            phone: "+1234567890",
        },
    ];
};

export default function AdManager() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [ads, setAds] = useState([]);
    const [newAd, setNewAd] = useState({ image: "", title: "", description: "", phone: "" });

    useEffect(() => {
        // Загружаем объявления при загрузке компонента
        getAnnouncements().then(setAds);
    }, []);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setNewAd({ ...newAd, image: event.target.result });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleAddAd = () => {
        if (newAd.image && newAd.title && newAd.description) {
            setAds([...ads, newAd]);
            setNewAd({ image: "", title: "", description: "", phone: "" });
            setIsModalOpen(false);
        }
    };

    return (
        <AdminLayout>
            <div>
                <div className="relative flex flex-col items-center p-6 w-[996px] bg-[#0C192E7A]">
                    <button onClick={() => setIsModalOpen(true)}
                            className="bg-blue-600 text-white px-4 py-2 rounded mb-6">
                        Добавить объявление
                    </button>

                    {isModalOpen && (
                        <div
                            className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                            <div className="bg-gray-900 p-6 rounded-lg w-[500px] relative">
                                <div className="bg-blue-800 text-white text-2xl font-semibold px-8 py-4 rounded-t-lg">
                                    Добавить объявление
                                </div>
                                <div className="mt-6 text-white text-xl font-semibold">Изображение</div>
                                {newAd.image && <img src={newAd.image} alt="preview"
                                                     className="w-full h-40 object-cover mt-2 rounded"/>}
                                <input type="file" onChange={handleImageUpload} className="hidden" id="upload"/>
                                <label htmlFor="upload"
                                       className="block bg-blue-600 text-white px-4 py-2 rounded cursor-pointer text-center mt-2">
                                    Загрузить изображение
                                </label>
                                <div className="mt-4 text-white text-xl font-semibold">Заголовок</div>
                                <input type="text" className="w-full p-2 bg-gray-800 text-white rounded mt-2"
                                       value={newAd.title}
                                       onChange={(e) => setNewAd({...newAd, title: e.target.value})}/>
                                <div className="mt-4 text-white text-xl font-semibold">Описание</div>
                                <textarea className="w-full p-2 bg-gray-800 text-white rounded mt-2 h-20"
                                          value={newAd.description}
                                          onChange={(e) => setNewAd({...newAd, description: e.target.value})}/>
                                <div className="mt-4 text-white text-xl font-semibold">Телефон</div>
                                <input type="text" className="w-full p-2 bg-gray-800 text-white rounded mt-2"
                                       value={newAd.phone}
                                       onChange={(e) => setNewAd({...newAd, phone: e.target.value})}/>
                                <div className="mt-6 flex justify-between">
                                    <button onClick={() => setIsModalOpen(false)}
                                            className="bg-gray-600 px-4 py-2 rounded">Закрыть
                                    </button>
                                    <button onClick={handleAddAd} className="bg-blue-600 px-4 py-2 rounded">Сохранить
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </AdminLayout>
    );
}





