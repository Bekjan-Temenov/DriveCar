import React from 'react';
import MyImage from './../../shared/assets/subscribe 1.png';
import MyImage2 from './../../shared/assets/subscribe 2 (1).png';
import Container from "../../shared/helpers/Container.jsx";

const Arguments = () => {
    return (
        <Container>
            <section className="bg-black text-white py-16 px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-[32px] font-semibold leading-[42.24px] text-center font-montserrat mb-12" style={{ textUnderlinePosition: 'from-font', textDecorationSkipInk: 'none' }}>
                        3 АРГУМЕНТА ПОЧЕМУ ВАМ СТОИТ ДОВЕРИТЬ РЕШЕНИЕ ВАШЕГО АВТОМОБИЛЬНОГО ВОПРОСА
                    </h2>
                    <div className="flex flex-col gap-12 items-center">

                        {/* Первый аргумент */}
                        <div className="relative flex items-center w-[1200px] h-[345px] p-8 overflow-hidden rounded-lg" style={{ background: 'linear-gradient(334.53deg, #0A0A0B 14.35%, rgba(10, 10, 11, 0.7) 33.24%, rgba(10, 10, 11, 0) 45.92%)' }}>
                            <div className="relative w-[484px] text-left">
                                <h3 className="text-[24px] font-medium leading-[33.6px] font-montserrat" style={{ textUnderlinePosition: 'from-font', textDecorationSkipInk: 'none' }}>Высокий стандарт безопасности</h3>
                                <p className="text-white-400 text-[18px] font-normal leading-[25.2px] font-montserrat mt-3">
                                    Высокий стандарт безопасности: Наш автомобиль оснащен передовыми системами безопасности, включая адаптивный круиз-контроль, систему предупреждения столкновений и автоматическое экстренное торможение. Эти функции разработаны для обеспечения максимальной защиты водителя и пассажиров, что делает наш автомобиль надежным выбором для семьи.
                                </p>
                            </div>
                            <img src={MyImage} alt="Безопасность" className="absolute right-8 w-[400px] object-cover" />
                        </div>

                        {/* Второй аргумент */}
                        <div className="relative flex items-center w-[1200px] h-[345px] p-8 overflow-hidden rounded-lg" style={{ background: 'linear-gradient(334.53deg, #0A0A0B 14.35%, rgba(10, 10, 11, 0.7) 33.24%, rgba(10, 10, 11, 0) 45.92%)' }}>
                            <img src={MyImage2} alt="Надежность" className="absolute left-8 w-[400px] object-cover" />
                            <div className="relative w-[484px] text-right ml-auto">
                                <h3 className="text-[24px] font-medium leading-[33.6px] font-montserrat" style={{ textUnderlinePosition: 'from-font', textDecorationSkipInk: 'none' }}>Надежность и долговечность</h3>
                                <p className="text-white-400 text-[18px] font-normal leading-[25.2px] font-montserrat mt-3">
                                    Благодаря высококачественным материалам и инженерным решениям, наш автомобиль прослужит долгие годы. Мы уверены в его надежности, поэтому предоставляем долгосрочную гарантию и поддержку, что подтверждает наше доверие к качеству продукта.
                                </p>
                            </div>
                        </div>

                        {/* Третий аргумент */}
                        <div className="relative flex items-center w-[1200px] h-[345px] p-8 overflow-hidden rounded-lg" style={{ background: 'linear-gradient(334.53deg, #0A0A0B 14.35%, rgba(10, 10, 11, 0.7) 33.24%, rgba(10, 10, 11, 0) 45.92%)' }}>
                            <div className="relative w-[484px] text-left">
                                <h3 className="text-[24px] font-medium leading-[33.6px] font-montserrat" style={{ textUnderlinePosition: 'from-font', textDecorationSkipInk: 'none' }}>Положительные отзывы и репутация</h3>
                                <p className="text-white-400 text-[18px] font-normal leading-[25.2px] font-montserrat mt-3">
                                    Наш автомобиль уже заслужил признание на рынке благодаря положительным отзывам клиентов и экспертным оценкам. Люди доверяют нашему бренду за его приверженность качеству и удовлетворению потребностей клиентов.
                                </p>
                            </div>
                            <img src={MyImage} alt="Отзывы" className="absolute right-8 w-[400px] object-cover" />
                        </div>
                    </div>
                </div>
            </section>
        </Container>
    );
};

export default Arguments;
