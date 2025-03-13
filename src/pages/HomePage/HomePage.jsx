import React from "react";
import Services from "../../features/Home/Services.jsx";
import ChooseAuto from "../../features/Home/ChooseAuto.jsx";
import Arguments from "../../features/Home/Arguments.jsx";
import Reviews from "../../features/Home/Reviews.jsx";
import Home from "../../features/Home/Home.jsx";

const HomePage = () => {
    return (
            <div className="text-white min-h-screen mt-30">
                <Home />
                <Services />
                <ChooseAuto />
                <Arguments />
                <Reviews />
            </div>
    );
};

export default HomePage;
