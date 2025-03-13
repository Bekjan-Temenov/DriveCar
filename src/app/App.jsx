import React, { useState } from "react";
import { BrowserRouter, useLocation } from "react-router-dom";
import Header from "../widgets/user/Header/Header.jsx";
import Footer from "../widgets/user/Footer/Footer.jsx";
import { MyRoutes } from "./routes";
import AdminCarsPage from "../pages/AdminCarPage/AdminCarPage.jsx";

function AppContent() {
    const location = useLocation();
    const [cars, setCars] = useState([
        { id: 1, brand: "Toyota", model: "Camry", price: 20000 },
        { id: 2, brand: "BMW", model: "X5", price: 40000 },
    ]);

    const hideHeaderAndFooter = location.pathname === "/register";

    return (
        <>
            {!hideHeaderAndFooter && <Header />}
            <MyRoutes cars={cars} setCars={setCars} />
            {!hideHeaderAndFooter && <Footer />}
        </>
    );
}

function App() {
    return (
        <BrowserRouter>
            <AppContent />
        </BrowserRouter>
    );
}

export default App;


