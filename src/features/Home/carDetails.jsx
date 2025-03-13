import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const CarDetails = () => {
    const { id } = useParams();
    const [car, setCar] = useState(null);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState("description");
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        const storedCars = JSON.parse(localStorage.getItem("cars")) || [];
        const foundCar = storedCars.find((car) => car.id === parseInt(id));
        setCar(foundCar);
        setSelectedImage(
            foundCar?.image || "https://dummyimage.com/497x223/cccccc/000000"
        );
        setLoading(false);
    }, [id]);

    if (loading) {
        return <div className="text-white">Загрузка...</div>;
    }

    if (!car) {
        return <div className="text-white">Автомобиль не найден.</div>;
    }

    return (
        <div className="car-details bg-black py-[20px] pt-[56px] pb-[50px] mt-[50px] text-white min-h-screen">
            <div className="container mx-auto mt-[32px]">
                {/* Вкладки */}
                <div className="tabs flex space-x-[49px] justify-start ml-[80px]">
                    <button
                        className={`w-[143px] h-[30px] text-[20px] font-montserrat font-medium ${
                            activeTab === "description" ? "bg-[#4177DC]" : "bg-transparent"
                        } text-white hover:bg-[#4177DC] rounded-md`}
                        onClick={() => setActiveTab("description")}
                    >
                        Описание
                    </button>
                    <button
                        className={`w-[206px] h-[30px] text-[20px] font-montserrat font-medium ${
                            activeTab === "features" ? "bg-[#4177DC]" : "bg-transparent"
                        } text-white hover:bg-[#4177DC] rounded-md`}
                        onClick={() => setActiveTab("features")}
                    >
                        Характеристика
                    </button>
                </div>


                {/* Синяя линия под вкладками */}
                <div className="w-[1379px] h-[4px] bg-[#4177DC]  ml-[80px]"></div>

                {/* Если вкладка "Описание" */}
                {activeTab === "description" && (
                    <>
                        <h1 className="text-[36px] font-bold font-montserrat mt-[40px] ml-[80px]">
                            {car.model} {car.year} года за ~ {car.price} сом
                        </h1>

                        <div className="flex flex-col md:flex-row gap-[20px] mt-[20px] ml-[80px]">
                            {/* Карточка с изображением */}
                            <div
                                className="relative w-[522px] h-[571px] p-6 rounded-[20px] border border-black bg-[#111213] flex justify-center items-center"
                            >
                                {selectedImage ? (
                                    <img
                                        src={selectedImage}
                                        alt="Car"
                                        className="w-[497px] h-[223px] object-cover relative"
                                    />
                                ) : (
                                    <div
                                        className="w-[497px] h-[223px] bg-gray-400 text-center flex items-center justify-center text-white font-bold relative"
                                    >
                                        Нет изображения
                                    </div>
                                )}

                                {/* Свечение в центре карточки */}
                                <div
                                    className="absolute"
                                    style={{
                                        width: "378.87px",
                                        height: "329.42px",
                                        background: "rgba(55, 74, 109, 0.5)",
                                        borderWidth: "1px",
                                        borderRadius: "50%",
                                        filter: "blur(50px)",
                                        top: "50%", // Размещаем по вертикальному центру
                                        left: "50%", // Размещаем по горизонтальному центру
                                        transform: "translate(-50%, -50%)" // Корректируем позицию
                                    }}
                                ></div>
                            </div>


                            {/* Характеристики с отступом 20px от карточки */}
                            <div className="w-[413px] ml-[20px]">
                                <ul className="text-[20px] font-montserrat leading-[24.38px]">
                                    <li className="mb-[6px]">
                                        <strong>Кузов:</strong> {car.bodyType}
                                    </li>
                                    <div className="w-full border-t-[1px] border-[#595959] mb-[6px]"></div>
                                    <li className="mb-[6px]">
                                        <strong>Двигатель:</strong> {car.engine}
                                    </li>
                                    <div className="w-full border-t-[1px] border-[#595959] mb-[6px]"></div>
                                    <li className="mb-[6px]">
                                        <strong>Коробка передач:</strong> {car.transmission}
                                    </li>
                                    <div className="w-full border-t-[1px] border-[#595959] mb-[6px]"></div>
                                    <li className="mb-[6px]">
                                        <strong>Руль:</strong> {car.steering}
                                    </li>
                                    <div className="w-full border-t-[1px] border-[#595959] mb-[6px]"></div>
                                    <li className="mb-[6px]">
                                        <strong>Пробег:</strong> {car.mileage} км
                                    </li>
                                    <div className="w-full border-t-[1px] border-[#595959] mb-[6px]"></div>
                                    <li className="mb-[6px]">
                                        <strong>Цвет:</strong> {car.color}
                                    </li>
                                    <div className="w-full border-t-[1px] border-[#595959] mb-[6px]"></div>
                                    <li className="mb-[6px]">
                                        <strong>Объем:</strong> {car.volume} л
                                    </li>
                                    <div className="w-full border-t-[1px] border-[#595959] mb-[6px]"></div>
                                    <li className="mb-[6px]">
                                        <strong>Состояние:</strong> {car.condition}
                                    </li>
                                </ul>
                                <div
                                    className="mt-[50px] bg-black text-white font-montserrat font-medium text-[20px] leading-[24.38px] max-w-full overflow-hidden break-words rounded-lg">
                                    <h2 className="font-bold text-[28px] mb-[10px] text-black">Полное описание</h2>
                                    <p className="whitespace-pre-line">{car.description || "Нет доступного описания."}</p>
                                </div>
                            </div>
                        </div>

                        {/* Галерея с фиксированной шириной 522px и отступами */}
                        <div className="gallery  ml-[80px] mb-[20px]" style={{width: "522px"}}>
                            {car.gallery && car.gallery.length > 0 ? (
                                <div className="grid grid-cols-5 gap-x-[15px] gap-y-[15px]">
                                    {car.gallery.map((img, index) => (
                                        <div
                                            key={index}
                                            className="relative w-[100px] h-[70px] overflow-hidden rounded-lg cursor-pointer"
                                            onClick={() => setSelectedImage(img)}
                                        >
                                            <img
                                                src={img}
                                                alt={`Gallery image ${index}`}
                                                className="w-full h-full object-cover"
                                            />
                                            {/* Подсветка выбранного изображения */}
                                            {selectedImage === img && (
                                                <div
                                                    className="absolute inset-0 border-2 border-white rounded-lg"></div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="col-span-5 w-full text-center text-white ">
                                    Нет доступных изображений
                                </div>
                            )}
                        </div>
                    </>
                )}

                {/* Если вкладка "Характеристика" */}
                {activeTab === "features" && (
                        <div className="mt-10 mx-20 text-white">
                            {/* Заголовок */}
                            <h2 className="text-3xl mb-[50px] font-bold font-montserrat">
                                {car.model} {car.year} — технические характеристики
                            </h2>

                            <div className="flex flex-col md:flex-row gap-8 mt-6 items-center md:items-start relative">
                                {/* Картинка автомобиля (слева) */}
                                <div
                                    className="relative w-[320px] h-[340px] p-4 rounded-2xl border border-gray-700 bg-[#111213] flex justify-center items-center">
                                    {selectedImage ? (
                                        <img
                                            src={selectedImage}
                                            alt="Car"
                                            className="max-w-full max-h-full object-contain"
                                        />
                                    ) : (
                                        <div
                                            className="w-full h-full bg-gray-400 text-center flex items-center justify-center text-white font-bold">
                                            Нет изображения
                                        </div>
                                    )}
                                </div>

                                {/* Блок с текстом (справа) */}
                                <div className="w-full max-w-md text-lg font-montserrat font-medium leading-9">
                                    <table className="w-full">
                                        <tbody>
                                        <tr>
                                            <td className="pr-4 font-bold text-left">Характеристика:</td>
                                            <td className="text-left">{car.make} {car.model} {car.year}</td>
                                        </tr>
                                        <tr>
                                            <td className="pr-4 font-bold text-left">Марка:</td>
                                            <td className="text-left">{car.make || "Не указано"}</td>
                                        </tr>
                                        <tr>
                                            <td className="pr-4 font-bold text-left">Модель:</td>
                                            <td className="text-left">{car.model}</td>
                                        </tr>
                                        <tr>
                                            <td className="pr-4 font-bold text-left">Год выпуска:</td>
                                            <td className="text-left">{car.year} год</td>
                                        </tr>
                                        <tr>
                                            <td className="pr-4 font-bold text-left">Цена:</td>
                                            <td className="text-left">{car.price.toLocaleString()} сом</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* Контейнер для иконок, размещённых под характеристиками и показателями */}
                            <div className="flex mt-[-20px]  gap-[128px] items-center" style={{marginLeft: '356px'}}>
                                {/* Иконка просмотров - слева */}
                                <div className="flex items-center  gap-2">
                                    <svg className="w-6 h-6 fill-current" viewBox="0 0 16 16"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M8 3C4.5 3 1.3 5.1 0 8c1.3 2.9 4.5 5 8 5s6.7-2.1 8-5c-1.3-2.9-4.5-5-8-5zm0 8.3c-1.8 0-3.3-1.4-3.3-3.3S6.2 4.7 8 4.7 11.3 6.2 11.3 8 9.8 11.3 8 11.3z"/>
                                    </svg>
                                    <span>234</span>
                                </div>

                                {/* Иконка комментариев - справа */}
                                <div className="flex items-center gap-2">
                                    <svg className="w-6 h-6 fill-current" viewBox="0 0 512 512"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M496 32H16C7.2 32 0 39.2 0 48v288c0 8.8 7.2 16 16 16h115.2l101.5 90.5c6.1 5.4 15.3 4.9 20.9-1.2 3-3.3 4.4-7.6 4.4-12 0-.8-.1-1.6-.2-2.4l-3.2-27.3H496c8.8 0 16-7.2 16-16V48c0-8.8-7.2-16-16-16z"/>
                                    </svg>
                                    <span>0</span>
                                </div>
                            </div>
                        </div>
                    )
                }
                    </div>
        </div>
    );
};

export default CarDetails;

