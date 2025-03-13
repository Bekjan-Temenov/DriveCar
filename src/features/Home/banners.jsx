import { useEffect, useState } from "react";
import { getAnnouncements } from "../../pages/AdminAddCar/AdminAddCar.jsx"; // Убедись, что путь правильный
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FiFacebook, FiInstagram, FiTwitter, FiSend } from "react-icons/fi";
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Показывать только 1 объявление за раз
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: false, // Убедитесь, что центральный слайд не активирован
    focusOnSelect: true, // Сделать так, чтобы слайд можно было выбрать
};

const Banners = () => {
    const [announcements, setAnnouncements] = useState([]);

    useEffect(() => {
        const fetchAnnouncements = async () => {
            try {
                const data = await getAnnouncements();
                setAnnouncements(data);
            } catch (error) {
                console.error("Ошибка загрузки объявлений:", error);
            }
        };
        fetchAnnouncements();
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1, // Показывать только 1 объявление за раз
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="w-full max-w-4xl mx-auto">
            <Slider {...settings} className="w-full h-[500px]">
                {announcements.map((announcement, index) => (
                    <div key={index} className="relative w-full h-full">
                        <img src={announcement.image} alt="Car" className="w-full h-full object-cover rounded-xl"/>
                        <div
                            className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-6">
                            <h3 className="text-3xl font-bold mb-2">{announcement.title}</h3>
                            <p className="text-lg mb-4">{announcement.description}</p>
                            <div className="bg-black bg-opacity-70 px-6 py-3 rounded-lg text-xl font-semibold mb-4">
                                РАССРОЧКА 6/9/12 МЕСЯЦЕВ
                            </div>
                            <p className="text-lg mb-4">📞 {announcement.phone}</p>
                            <div className="flex gap-6">
                                <a href="#" className="text-white hover:text-blue-400"><FiFacebook size={28}/></a>
                                <a href="#" className="text-white hover:text-pink-400"><FiInstagram size={28}/></a>
                                <a href="#" className="text-white hover:text-blue-400"><FiTwitter size={28}/></a>
                                <a href="#" className="text-white hover:text-blue-400"><FiSend size={28}/></a>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>

    );
};

export default Banners;

