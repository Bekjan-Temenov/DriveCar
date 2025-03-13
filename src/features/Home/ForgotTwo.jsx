import { useState } from "react";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../../shared/assets/image 47.png";

export default function VerificationCodePage() {
    const [code, setCode] = useState(["", "", "", ""]);
    const navigate = useNavigate();

    const handleChange = (index, value) => {
        if (value.length > 1) return;
        const newCode = [...code];
        newCode[index] = value;
        setCode(newCode);
    };

    return (
        <div
            className="relative w-[1400px] h-[900px] text-white bg-cover bg-center font-montserrat"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="flex items-center justify-center min-h-screen">
                <div className="w-[625px] h-[610px] mt-[173px] p-8 bg-[#111120] rounded-2xl shadow-lg text-center">
                    <h2 className="text-4xl font-montserrat text-white mt-[40px] mb-[35px]">
                        Введите 4-значный код
                    </h2>
                    <p className="w-[370px] h-[60px] ml-[100px] text-white text-xl mb-[80px]">
                        На адрес электронной почты, который вы указали, должен был прийти четырехзначный код.
                    </p>
                    <div className="flex justify-center space-x-[25px] mb-4">
                        {code.map((num, index) => (
                            <input
                                key={index}
                                type="text"
                                maxLength="1"
                                value={num}
                                onChange={(e) => handleChange(index, e.target.value)}
                                className="w-[95px] h-[100px] text-3xl text-center text-black border border-white rounded-lg"
                            />
                        ))}
                    </div>
                    <div className="text-blue-400 text-sm mb-[44px]">
                        <span className="mr-[270px]">Отправить SMS ещё раз</span>
                        <span>00:30</span>
                    </div>
                    <div className="flex justify-center space-x-[60px]">
                        <button
                            className="w-[200px] h-[60px] bg-gray-600 hover:bg-blue-700 text-white rounded-lg"
                            onClick={() => navigate(-1)}
                        >
                            Отмена
                        </button>
                        <button
                            className="w-[200px] h-[60px] bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
                            onClick={() => navigate("/CreatePas")}
                        >
                            Подтвердить
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
