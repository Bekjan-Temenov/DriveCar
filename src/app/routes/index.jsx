import { useRoutes } from "react-router-dom";
import Layout from "../../widgets/user/Layout";
import HomePage from "../../pages/HomePage/HomePage";
import Favorites from "../../pages/Favorites/Favorites.jsx";
import AboutUs from "../../pages/AboutUs/AboutUs.jsx";
import CarDetails from "../../features/Home/CarDetails.jsx";
import Allcars from "../../features/Home/Allcars.jsx";
import Registretionforms from "../../features/Home/Registretionforms.jsx";
import AdminCarsPage from "../../pages/AdminCarPage/AdminCarPage.jsx";
import AdminAddCar from "../../pages/AdminAddCar/AdminAddCar.jsx";
import Banners from "../../features/Home/banners.jsx";
import LoginPage from "../../features/Home/LoginPage.jsx";
import ForgotPasswordPage from "../../features/Home/ForgotPassword.jsx";
import VerificationCodePage from "../../features/Home/ForgotTwo.jsx";
import CreatePasswordPage from "../../features/Home/CreatePassword.jsx";

export const MyRoutes = ({ cars, setCars }) => {
  return useRoutes([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "Favorites",
          element: <Favorites />,
        },
        {
          path: "about",
          element: <AboutUs />,
        },
        {
          path: "cars/:id",
          element: <CarDetails />,
        },
        {
          path: "/allCars",
          element: <Allcars />,
        },
        {
          path: "register",
          element: <Registretionforms />,
        },
        {
          path: "/AdminCarPage",
          element: <AdminCarsPage cars={cars} setCars={setCars} />,
        },
        {
          path: "AdminAddCar",
          element: <AdminAddCar />
        },
        {
          path: "Banners",
          element: <Banners />
        },
        {
          path: "/login",
          element: <LoginPage />
        },
        {
          path: "/forgot",
          element: <ForgotPasswordPage />
        },
        {
          path: "/VerifyForgot",
          element: < VerificationCodePage />
        },
        {
         path: "/CreatePas" ,
         element: < CreatePasswordPage />
        }
      ],
    },
  ]);
};
