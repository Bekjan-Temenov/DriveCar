import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import logo from "../../../shared/assets/rule.png";
import bgImage from "../../../shared/assets/image 10.png";
import avatar from "../../../shared/assets/Vector (3).png";
import settingsIcon from "../../../shared/assets/settings.png";
import mycarsIcon from "../../../shared/assets/mycars.png";
import notiflicationIcon from "../../../shared/assets/right.png";
import exitIcon from "../../../shared/assets/exit.png";
import contentIcon from "../../../shared/assets/Vector.svg"; // или укажи правильный путь

const menuItems = [
    { name: "Сводка", path: "/summary", icon: settingsIcon },
    { name: "Мои машины", path: "/AdminCarPage", icon: mycarsIcon },
    { name: "Объявления", path: "/AdminAddCar", icon: notiflicationIcon },
    { name: "Контент", path: "/content", icon: contentIcon }, // Добавил контент
];

const AdminLayout = ({ onLogout, children }) => {
    return (
        <div className="flex">
            <aside
                className="w-[235px] left-[0px] h-[964px] ml-[20px] flex flex-col items-center py-8 bg-cover bg-center"
                style={{backgroundImage: `url(${bgImage})`}}
            >
                {/* Лого */}
                <div className="mb-10 relative">
                    <img src={logo} alt="AUTO" className="w-[75px] h-[75px]"/>
                    <span
                        className="absolute top-[14px] left-[18px] text-white font-exo font-medium text-[15.4px] leading-[21.56px]">AUTO</span>
                </div>

                {/* Навигация */}
                <nav className="flex flex-col  gap-[35px]">
                    {menuItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className="w-[200px] h-[40px] ml-[30px] mr-[30px] flex items-center gap-[16px] text-white text-lg transition bg-transparent hover:bg-white hover:text-black rounded-[8px] border border-white px-[15px] py-[8px] "
                        >
                            <img src={item.icon} alt={item.name} className="w-6 h-6"/>
                            <span>{item.name}</span>
                        </Link>
                    ))}

                    {/* Кнопка "Выйти" в конце */}
                    <button
                        onClick={onLogout}
                        className="w-[200px] h-[40px] flex items-center gap-[16px] ml-[30px] mr-[30px] text-white text-lg transition bg-transparent hover:bg-white hover:text-black rounded-[8px] border border-white px-[15px] py-[8px] mt-[400px]"
                    >
                        <img src={exitIcon} alt="Выйти" className="w-6 h-6"/>
                        <span>Выйти</span>
                    </button>
                </nav>


            </aside>
            <div className="ml-[90px] ">
                <header
                    className="h-[80px] flex items-center justify-between px-10  text-white w-full z-50  rounded-[30px]">
                    <div
                        className="relative w-[650px] h-[40px] bg-[#0B111C82] border border-white rounded-[30px]   mr-[100px] flex items-center">
                        <FaSearch className="text-white absolute left-6"/>
                        <input type="text" placeholder="Поиск..."
                               className="bg-transparent w-full text-white outline-none pl-[50px] pr-4 placeholder-white"/>
                    </div>
                    <div className="flex items-center gap-">
                        <span className="text-lg  mr-[15px]">Администратор</span>
                        <div className="relative w-[40px] h-[40px] items-center">
                        <div
                                className="absolute top-[6px] left-[5.75px] w-[34.5px] h-[34.5px] rounded-full border-2 border-white"></div>
                            <img src={avatar} alt="Admin"
                                 className="absolute top-2.5 left-[8.83px] w-[28px] h-[28px] rounded-full"/>
                        </div>
                    </div>
                </header>
                <div className="pt-[100px] px-10">{children}</div>
            </div>
        </div>
    );
};

export default AdminLayout;
