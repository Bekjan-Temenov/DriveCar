import { useRoutes } from "react-router-dom";
import Layout from "../../widgets/user/Layout";
import HomePage from "../../pages/HomePage/HomePage";

export const MyRoutes = () => {
  return useRoutes([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
      ],
    },
  ]);
};
