import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";
import backgroundImage from "../../shared/assets/image 47.png";
import arrowImage from "../../shared/assets/arrow.png";

export default function RegistrationPage() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
        remember: false,
    });
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    };

    return (
        <div
            className="relative w-[1400px] h-[900px] text-white bg-cover bg-center font-montserrat"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <button onClick={() => window.history.back()} className="absolute top-[200px] left-[420px]">
                <img src={arrowImage} alt="Back" className="w-[26px] h-[26px]" />
            </button>
            <div className="flex items-center justify-center min-h-screen">
                <div className="w-[625px] mt-[172px] mb-[115px] h-[650px] p-8 bg-[#111120] rounded-2xl shadow-lg">
                    <h2 className="text-4xl text-center text-white mt-[50px] mb-[25px]">Регистрация</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-white ml-8">ФИО*</label>
                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                className="w-[515px] border border-white h-[35px] ml-[30px] p-2 rounded bg-[#292E39] text-white"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-white ml-8">Email*</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-[515px] border border-white h-[35px] ml-[30px] p-2 rounded bg-[#292E39] text-white"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-white ml-8">Пароль*</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="w-[515px] border border-white h-[35px] ml-[30px] p-2 pr-10 rounded bg-[#292E39] text-white"
                                    required
                                />
                                <button
                                    type="button"
                                    className="absolute inset-y-0 right-8 flex items-center text-white"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>
                        </div>
                        <div>
                            <label className="block text-white ml-8">Подтвердите пароль*</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    className="w-[515px] border border-white h-[35px] ml-[30px] p-2 pr-10 rounded bg-[#292E39] text-white"
                                    required
                                />
                                <button
                                    type="button"
                                    className="absolute inset-y-0 right-8 flex items-center text-white"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                <label className="relative inline-flex items-center cursor-pointer ml-7">
                                    <input
                                        type="checkbox"
                                        name="remember"
                                        checked={formData.remember}
                                        onChange={handleChange}
                                        className="sr-only peer"
                                    />
                                    <div className="w-11 h-6 bg-gray-600 rounded-full peer-checked:bg-blue-600"></div>
                                </label>
                                <span className="text-gray-400">Запомнить</span>
                            </div>
                        </div>
                        <button type="submit" className="w-[515px] ml-[30px] h-[53px] text-2xl bg-blue-600 hover:bg-blue-700 text-white p-2 rounded">Регистрация</button>
                        <p className="text-center text-white">
                            Уже есть аккаунт? <Link to="/login" className="text-blue-400 hover:underline">Войти</Link>
                        </p>
                        <p className="text-center text-red-500">
                            <Link to="/AdminCarPage" className="hover:underline">Войти как админ</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}

