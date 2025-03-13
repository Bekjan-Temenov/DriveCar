import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../../shared/assets/image 47.png";
import arrowImage from "../../shared/assets/arrow.png";

export default function CreatePasswordPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [remember, setRemember] = useState(false);
    const navigate = useNavigate();

    return (
        <div
            className="relative w-[1400px] h-[900px] text-white bg-cover bg-center font-montserrat"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <button
                onClick={() => navigate(-1)}
                className="absolute top-[200px] left-[420px]"
            >
                <img src={arrowImage} alt="Back" className="w-[26px] h-[26px]"/>
            </button>
            <div className="flex items-center justify-center min-h-screen">
                <div className="w-[625px] mt-[172px] h-[603px] p-8 bg-[#111120] rounded-2xl shadow-lg">
                    <h2 className="text-4xl font-monsterrat text-center text-white mt-[40px] mb-[15px]">Создать Пароль</h2>
                    <p className="text-center text-white mb-[40px]">Выберите надёжный пароль!<br/>Минимальная длина пароля 8 символов.</p>
                    <div className="space-y-4">
                        <div className="relative">
                            <label className="block text-white ml-8">Новый пароль*</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    className="w-[515px] border border-white ml-[30px] h-[35px] p-2 pr-10 rounded bg-[#292E39] text-white"
                                    placeholder=""
                                />
                                <button
                                    type="button"
                                    className="absolute inset-y-0 right-8 flex items-center text-white"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <EyeOff size={20}/> : <Eye size={20}/>}
                                </button>
                            </div>
                        </div>
                        <div className="relative">
                            <label className="block text-white ml-8">Подтвердите новый пароль*</label>
                            <div className="relative">
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    className="w-[515px] border border-white ml-[30px] h-[35px] p-2 pr-10 rounded bg-[#292E39] text-white"
                                    placeholder=""
                                />
                                <button
                                    type="button"
                                    className="absolute inset-y-0 right-8 flex items-center text-white"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                >
                                    {showConfirmPassword ? <EyeOff size={20}/> : <Eye size={20}/>}
                                </button>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2 ml-7 mt-2">
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={remember}
                                    onChange={() => setRemember(!remember)}
                                    className="sr-only peer"
                                />
                                <div
                                    className="w-11 h-6 bg-gray-600 peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                            </label>
                            <span className="text-gray-400">Запомнить</span>
                        </div>
                        <button className="w-[515px] ml-[30px] h-[53px] font-monsterrat text-2xl bg-blue-600 hover:bg-blue-700 text-white p-2 rounded">
                            Сменить Пароль
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
