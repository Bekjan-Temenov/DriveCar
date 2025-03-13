import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import backgroundImage from "../../shared/assets/image 47.png";
import arrowImage from "../../shared/assets/arrow.png";
export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [remember, setRemember] = useState(false);

    return (
        <div
            className="relative w-[1400px] h-[900px]  text-white bg-cover bg-center font-montserrat"
            style={{backgroundImage: `url(${backgroundImage})`}}
        >
            <button
                onClick={() => navigate(-1)}
                className="absolute top-[200px] left-[420px]"
            >
                <img src={arrowImage} alt="Back" className="w-[26px] h-[26px]"/>
            </button>
            <div className="flex items-center justify-center min-h-screen  ">
                <div className="w-[625px] mt-[172px] mb-[115px] h-[603px] left-[407px] top-[172px] p-8 bg-[#111120] rounded-2xl shadow-lg">
                    <h2 className="text-4xl font-monsterrat text-center text-white mt-[100px] mb-[25px]">Войти</h2>
                    <div className="space-y-4">
                        <div>
                            <label className="block font-monsterrat text-white ml-8">Email*</label>
                            <input type="email" className=" w-[515px] border border-white h-[35px] ml-[30px] p-2 mb-[10px] rounded bg-[#292E39] text-white"
                                   placeholder=""/>
                        </div>
                        <div className="relative">
                            <label className="block font-monsterrat text-white ml-8">Пароль*</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    className=" w-[515px] border border-white ml-[30px] h-[35px] p-2 pr-10 rounded bg-[#292E39] text-white"
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
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                <label className="relative inline-flex items-center cursor-pointer ml-7">
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
                            <a href="/Forgot" className="text-[#36CBFF]">Забыли пароль?</a>
                        </div>
                        <button className="w-[515px] ml-[30px] h-[53px] font-monsterrat text-2xl bg-blue-600 hover:bg-blue-700 text-white p-2 rounded">Войти</button>
                        <p className="text-center text-white">
                            Вы ещё не зарегистрированы? <a href="/register"
                                                           className="text-blue-400 hover:underline">Зарегистрироваться</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
