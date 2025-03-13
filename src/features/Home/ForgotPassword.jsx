import { useState } from "react";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../../shared/assets/image 47.png";
import arrowImage from "../../shared/assets/arrow.png";

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Password reset request for:", email);
        navigate("/VerifyForgot"); // Перенаправляем пользователя на страницу ввода кода
    };

    return (
        <div
            className="relative w-[1400px] h-[900px] text-white bg-cover bg-center font-montserrat"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <button
                onClick={() => navigate(-1)}
                className="absolute top-[280px] left-[430px]"
            >
                <img src={arrowImage} alt="Back" className="w-[26px] h-[26px]" />
            </button>
            <div className="flex items-center justify-center min-h-screen">
                <div
                    className="w-[625px] mt-[242px] mb-[115px] h-[450px] left-[407px] top-[172px] p-8 bg-[#111120] rounded-2xl shadow-lg">
                    <h2 className="text-4xl font-monsterrat text-center text-white mt-[40px] mb-[15px]">Забыли пароль</h2>
                    <p className="w-[308px] h-[29px] text-center text-white ml-[130px] mb-[45px] font-montserrat text-[24px] leading-[100%] tracking-[1px] font-normal">
                        Введите свой аккаунт!
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block font-monsterrat text-white mb-[5px] ml-8">Email*</label>
                            <input
                                type="email"
                                className="w-[515px] border border-white h-[35px] ml-[30px] p-2 rounded bg-[#292E39] mb-[45px] text-white"
                                placeholder="Введите email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-[515px] ml-[30px] h-[53px] font-monsterrat text-2xl bg-blue-600 hover:bg-blue-700 text-white p-2 rounded"
                        >
                            Продолжить
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

