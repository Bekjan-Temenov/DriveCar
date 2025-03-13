import React, { useState } from 'react';
import Slider from 'react-slick';
import ByImg from '../../shared/assets/Ellipse 5.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CustomArrow(props) {
    const { onClick, direction } = props;
    const isLeft = direction === 'left';
    return (
        <button
            onClick={onClick}
            className={`absolute ${isLeft ? 'left-[calc(50%-60px-10.5px)]' : 'right-[calc(50%-60px-10.5px)]'} bottom-[-50px] w-[55px] h-[55px] border-2 border-white rounded-full flex items-center justify-center bg-transparent`}
        >
            <span className="material-icons text-white">
                {isLeft ? 'arrow_back' : 'arrow_forward'}
            </span>
        </button>
    );
}

function Reviews() {
    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        prevArrow: <CustomArrow direction="left" />,
        nextArrow: <CustomArrow direction="right" />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="bg-black text-white flex flex-col items-center py-16 px-6">
            <div className="flex items-center justify-center mb-4">
                <div className="h-[3px] w-[48px] bg-[#1D1D3B] mr-[15px]"></div>
                <h1 className="flex items-center">
                    <span className="text-white font-inter font-semibold text-[28px] leading-[36.96px] mr-[15px]">
                        Что говорят
                    </span>
                    <span className="bg-[#001A72] text-white font-inter font-semibold text-[28px] leading-[33.89px] px-[27px] rounded-tl-[2px]">
                        ЛЮДИ
                    </span>
                </h1>
                <div className="h-[3px] w-[48px] bg-[#1D1D3B] ml-[15px]"></div>
            </div>
            <p className="text-center mb-8 text-white-400 max-w-3xl">
                В данном сервисе мы уже собрали для вас отзывы от наших клиентов, которые уже воспользовались нашим сервисом по
                подбору автомобиля.
            </p>
            <div className="w-full max-w-6xl relative mb-[60px]">
                <Slider {...sliderSettings}>
                    {Array(3)
                        .fill(0)
                        .map((_, i) => (
                            <div key={i} className="p-[12.5px] gap-5">
                                <div
                                    className="bg-[#1A1C71] p-6 rounded-lg shadow-lg flex flex-col items-start w-[370px] h-[300px] opacity-100 relative mb-3">
                                    <img
                                        src={ByImg}
                                        alt="User avatar"
                                        className="absolute w-[60px] h-[60px] top-[25px] left-[20px] opacity-100"
                                    />
                                    <h3 className="absolute w-[172px] h-[29px] top-[40px] left-[100px] opacity-100 font-montserrat text-[24px] font-normal text-left">
                                        Кортни Генри
                                    </h3>
                                    <p className="absolute w-[320px] h-[120px] top-[112px] left-[20px] opacity-100 font-montserrat text-[16px] font-normal text-left text-white-400">
                                        В данном сервисе мы уже собрали для вас отзывы от наших клиентов, которые уже
                                        воспользовались нашим сервисом по подбору автомобиля.
                                    </p>
                                    <span className="absolute w-[40px] h-[21px] top-[264px] left-[290px] opacity-100 font-montserrat text-[16px] font-semibold text-center text-white-400">
                                        16:34
                                    </span>
                                </div>
                            </div>
                        ))}
                </Slider>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition mt-5">
                Оставить отзыв
            </button>
        </div>
    );
}

export default Reviews;
